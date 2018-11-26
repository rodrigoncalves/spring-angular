import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/model/product";
import { CompanyService } from "src/app/services/company.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Company } from "src/app/model/company";
import { ProductService } from "src/app/services/product.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'app-form-company',
    templateUrl: './form.component.html',
    styleUrls: ['../../company/form/form.component.css']
})
export class FormProductComponent implements OnInit {

    private title: string;
    private product: Product = new Product();
    private companies: Company[];
    private productForm: FormGroup;

    constructor(private companyService: CompanyService,
        private productService: ProductService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params['id'] == undefined) {
                this.title = "Cadastro de Produtos"
            } else {
                this.title = "Editar Produtos";
                this.productService.getProduct(Number(params['id']))
                    .subscribe(res => this.product = res);
            }
        });

        this.companyService.getCompanies().subscribe(companies => {
            this.companies = companies;
        });

        this.productForm = this.formBuilder.group({
            id: [''],
            name: ['', Validators.required],
            value: ['', Validators.required],
            companyId: ['', Validators.required],
        });
    }

    save(): void {
        let companyId = <number>this.productForm.controls.companyId.value;
        if (this.product.id == undefined) {
            this.productService.addProduct(companyId, this.product).subscribe(() => {
                this.router.navigate(['/companies/', companyId]);
                alert("Registro salvo com sucesso");
            }, error => alert(error));
        } else {
            this.productService.editProduct(this.product).subscribe(() => {
                this.router.navigate(['/companies', companyId]);
                alert("Registro salvo com sucesso");
            }, error => alert(error));
        }
    }

}

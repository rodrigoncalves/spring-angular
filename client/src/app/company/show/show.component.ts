import { OnInit, Component } from "@angular/core";
import { Company } from "src/app/model/company";
import { CompanyService } from "src/app/services/company.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "src/app/model/product";
import { ProductService } from "src/app/services/product.service";

@Component({
    selector: 'app-show-company',
    templateUrl: './show.component.html',
    styleUrls: ['../company.component.css']
})
export class ShowCompanyComponent implements OnInit {

    private company: Company;
    private products: Product[];

    constructor(private companyService: CompanyService,
        private productService: ProductService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.companyService.getCompany(params['id'])
                .subscribe(res => {
                    this.company = res;
                }, error => {
                    console.log(error);
                    this.router.navigate(['/companies']);
                });
        });

        this.activatedRoute.params.subscribe(params => {
            this.companyService.getCompanyProducts(params['id'])
                .subscribe(res => {
                    this.products = res;
                }, error => {
                    console.log(error);
                    this.router.navigate(['/companies'])
                });
        });
    }

    edit(id: number): void {
        this.router.navigate(['/product/', id, 'edit'])
    }

    delete(id: number, index: number): void {
        if (confirm("Deseja realmente excluir este registro?")) {
            this.productService.deleteProduct(id).subscribe(res => {
                // remove row from table
                this.products.splice(index, 1);
            }, error => alert(error));
        }
    }

}

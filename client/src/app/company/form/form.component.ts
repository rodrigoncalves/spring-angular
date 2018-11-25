import { Component, OnInit } from "@angular/core";
import { Company } from "src/app/model/company";
import { Router, ActivatedRoute } from "@angular/router";
import { CompanyService } from "src/app/services/company.service";
import { ServerResponse } from "src/app/services/server.response";

@Component({
    selector: 'app-form-company',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormCompanyComponent implements OnInit {

    private title: string;
    private company: Company = new Company();

    constructor(private companyService: CompanyService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params['name'] == undefined) {
                this.title = "Cadastro de Empresa"
            } else {
                this.title = "Editar Empresa";
                this.companyService.getCompany(Number(params['id']))
                    .subscribe(res => this.company = res);
            }
        })
    }

    save(): void {
        if (this.company.id == undefined) {
            this.companyService.addCompany(this.company).subscribe(response => {
                let res: ServerResponse = <ServerResponse>response;

                alert(res.message);
                if (res.code == 1) {
                    this.company = new Company();
                }
            }, error => alert(error));
        } else {
            this.companyService.editCompany(this.company).subscribe(response => {
                let res: ServerResponse = <ServerResponse>response;

                alert(res.message)
                if (res.code == 1) {
                    this.router.navigate(['/companies']);
                }
            }, error => alert(error));
        }
    }
}

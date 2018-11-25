import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    private companies: Company[] = new Array();
    private title: string;

    constructor(private companyService: CompanyService,
                private router: Router) {
    }

    ngOnInit() {
        this.title = 'Lista de empresas';
        this.companyService.getCompanies()
            .subscribe(res => this.companies = res);
    }

    edit(id: number): void {
        this.router.navigate(['/company/', id, 'edit'])
    }

    delete(id: number, index: number): void {
        if (confirm("Deseja realmente excluir este registro?")) {
            this.companyService.deleteCompany(id).subscribe(res => {
                // remove row from table
                this.companies.splice(index, 1);
            }, error => alert(error));
        }
    }

}

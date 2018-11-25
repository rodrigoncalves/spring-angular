import { OnInit, Component } from "@angular/core";
import { Company } from "src/app/model/company";
import { CompanyService } from "src/app/services/company.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-view-company',
    templateUrl: './view.component.html',
    styleUrls: ['../form/form.component.css']
})
export class ViewCompanyComponent implements OnInit {

    private company: Company;
    // private products: Product[];

    constructor(private companyService: CompanyService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.companyService.getCompanyProducts(params['id'])
                .subscribe(res => {
                    this.company = res;
                }, error => {
                    console.log(this.company);
                    this.router.navigate(['/companies'])
                });
        });
    }

}

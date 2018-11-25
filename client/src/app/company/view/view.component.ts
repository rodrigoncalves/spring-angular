import { OnInit, Component } from "@angular/core";
import { Company } from "src/app/model/company";
import { CompanyService } from "src/app/services/company.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "src/app/model/product";

@Component({
    selector: 'app-view-company',
    templateUrl: './view.component.html',
    styleUrls: ['../company.component.css']
})
export class ViewCompanyComponent implements OnInit {

    private company: Company;
    private products: Product[];

    constructor(private companyService: CompanyService,
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

}

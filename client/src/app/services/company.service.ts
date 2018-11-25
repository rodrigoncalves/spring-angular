import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { ConfigService } from "./config.service";
import { Company } from "../model/company";

import { map } from 'rxjs/operators'; // Angular 6

@Injectable()
export class CompanyService {

    private baseUrlService: string = '';
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

        this.baseUrlService = configService.getUrlService() + '/companies/';
        this.headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        this.options = new RequestOptions({headers: this.headers});
    }

    getCompanies() {
        return this.http.get(this.baseUrlService)
            .pipe(map(res => res.json()));
    }

    addCompany(company: Company) {
        return this.http.post(this.baseUrlService, JSON.stringify(company), this.options)
            .pipe(map(res => {
                return res.json();
            }));
    }

    editCompany(company: Company) {
        return this.http.put(this.baseUrlService + company.id, JSON.stringify(company), this.options)
            .pipe(map(res => res.json()));
    }

    deleteCompany(companyId: number) {
        return this.http.delete(this.baseUrlService + companyId);
    }

    getCompany(companyId: number) {
        return this.http.get(this.baseUrlService + companyId)
            .pipe(map(res => res.json()));
    }

    getCompanyProducts(companyId: number) {
        return this.http.get(this.baseUrlService + companyId + '/products')
            .pipe(map(res => res.json()));
    }

}

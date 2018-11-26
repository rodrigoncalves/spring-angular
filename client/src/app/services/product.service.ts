import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { ConfigService } from "./config.service";
import { Product } from "../model/product";

import { map } from 'rxjs/operators'; // Angular 6

@Injectable()
export class ProductService {

    private baseUrlService: string = '';
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

        this.baseUrlService = configService.getUrlService();
        this.headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        this.options = new RequestOptions({headers: this.headers});
    }

    getProducts() {
        return this.http.get(this.baseUrlService + "/products")
            .pipe(map(res => res.json()));
    }

    getProduct(productId: number) {
        return this.http.get(this.baseUrlService + "/products/" + productId)
            .pipe(map(res => res.json()));
    }

    addProduct(companyId: number, product: Product) {
        return this.http.post(this.baseUrlService + "/companies/" + companyId + "/products",
            JSON.stringify(product), this.options)
            .pipe(map(res => res.json()));
    }

    editProduct(product: Product) {
        return this.http.put(this.baseUrlService + "/products/" + product.id,
            JSON.stringify(product), this.options)
            .pipe(map(res => res.json()));
    }

    deleteProduct(productId: number) {
        return this.http.delete(this.baseUrlService + "/products/" + productId);
    }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }
    public getProduct(productId: string) {
        const url = 'http://localhost:8999/policy-service/1.0/api/policy/products/' + productId;
        return this.http.get(url, requestOptions);
    }

    public getQuestions(productId: string) {
        const url = 'http://localhost:8999/policy-service/1.0/api/policy/products/' + productId + '/questions';
        return this.http.get(url, requestOptions);
    }

    public getPlans(productId: string) {
        const url = 'http://localhost:8999/policy-service/1.0/api/policy/products/' + productId + '/plans';
        return this.http.get(url, requestOptions);
    }
}

const REQUEST_HEADER: any = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT'
    })
};

const requestOptions: any = new RequestOptions(REQUEST_HEADER);

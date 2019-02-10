import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { RootObject, Response } from 'src/app/quote/quote.component';

@Injectable()
export class QuoteService {
    constructor(private http: HttpClient) { }
    public quoteUsingPOST(dto: RootObject) {
        const json: string = JSON.stringify(dto);
        return this.http.post<Response>(url, json, requestOptions);
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

const url = 'http://localhost:8999/policy-service/1.0/api/policy/quote';

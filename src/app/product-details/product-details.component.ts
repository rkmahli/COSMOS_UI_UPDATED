import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/services/product-service';
@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public keyword: string;
    public product: Product;
    public plan: Plan;
    public question: Question;
    constructor(private productService: ProductService) {
        this.product = new Product();
        this.plan = new Plan();

    }

    getProductDetails() {
        this.productService.getProduct(this.keyword).subscribe(data => {
            this.product.enddate = data['enddate'];
            this.product.lobid = data['lobid'];
            this.product.productid = data['productid'];
            this.product.productname = data['productname'];
            this.product.shortProductname = data['shortProductname'];
            this.product.startdate = data['startdate'];
        });
        this.productService.getPlans(this.keyword).subscribe(data => {
            this.plan.planid = data[0]['planid'];
            this.plan.policytype = data[0]['policytype'];
            this.plan.sumInsuredinLakhs = [new SumInsuredinLakh()];
            this.plan.sumInsuredinLakhs[0].sumInsured = data[0]['sumInsuredinLakhs'][0]['sumInsured'];
            this.plan.planDetails = [new PlanDetail()];
            this.plan.planDetails[0].grosspremium = data[0]['planDetails'][0]['grosspremium'];
            this.plan.planDetails[0].premium = data[0]['planDetails'][0]['premium'];
        });
    }

    ngOnInit() {
    }

}

export class Question {
    links?: any;
    productid: number;
    question: string;
    questionid: number;
}

export class Product {
    backdatedinception: boolean;
    backdatedinceptionrange: number;
    effectivedate: string;
    enddate: string;
    links?: any;
    lobid: number;
    productid: number;
    productname: string;
    riskstartdaterange: number;
    shortProductname: string;
    startdate: string;
}

export class PlanDetail {
    ageRange: number;
    grosspremium: number;
    premium: number;
    sumInsured: number;
}

export class SumInsuredinLakh {
    sumInsured: number;
}

export class Plan {
    links?: any;
    planDetails: PlanDetail[];
    planid: number;
    policytype: string;
    productid: number;
    sumInsuredinLakhs: SumInsuredinLakh[];
}

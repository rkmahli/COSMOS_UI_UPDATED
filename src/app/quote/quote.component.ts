import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public quoteFlag: boolean;
  public currentPage = 1;
  public response: Response;
  public modalData: modalVO = new modalVO();


  dto: RootObject = new RootObject();
  constructor(private quoteService: QuoteService) {
    this.dto.policyDetails = new PolicyDetails();
    this.dto.policyDetails.beneficiaryList = new Array<BeneficiaryList>();
    this.dto.policyDetails.beneficiaryList.push(new BeneficiaryList());
    this.dto.policyDetails.beneficiaryList[0].links = null;
    this.dto.policyDetails.communicationDetails = new CommunicationDetails();
    this.dto.policyDetails.communicationDetails.links = null;
    this.dto.policyDetails.links = null;
    this.dto.policyDetails.policyDetails = new PolicyDetails2();
    this.dto.policyDetails.policyDetails.policyStatusId = '1';
    this.dto.policyDetails.policyStatusId = '1';
    this.dto.policyDetails.questionList = new Array<QuestionList>();
    this.dto.policyDetails.questionList.push(new QuestionList());
    this.dto.policyDetails.questionList[0].questionAns = '';
    this.dto.policyDetails.questionList[0].questionId = '';
  }

  ngOnInit() {
  }
  submit() {
    this.quoteService.quoteUsingPOST(this.dto).subscribe(data => {
      this.modalData.afinityId = data['affinityId'];
      this.modalData.planId = data['planId'];
      this.modalData.policyId = data['policyId'];
      this.quoteFlag = true;
    });
  }
  setPage(n: number) {
    this.currentPage = n;
    window.scrollTo(0, 0);
  }
}

export class BeneficiaryList {
  dob: string;
  gender: string;
  links?: any;
  name: string;
  nomineeName: string;
  nomineeRelation: string;
  nomineeType: string;
  proposerRelation: string;
}

export class CommunicationDetails {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  district: string;
  emailId: string;
  links?: any;
  mobile: string;
  pincode: string;
  state: string;
  telephone: string;
}

export class PolicyDetails2 {
  affinityid: string;
  branchId: string;
  covernoteno: string;
  customerid: string;
  employeecode: string;
  lastUpdatedBy: string;
  lastUpdatedDate: string;
  masterpolicyno: string;
  planId: string;
  policyEndDate: string;
  policyId: string;
  policyStartDate: string;
  policyStatusId: string;
  policyterm: string;
  productID: string;
}

export class QuestionList {
  questionAns: string;
  questionId: string;
}

export class PolicyDetails {
  affinityId: string;
  beneficiaryList: BeneficiaryList[];
  branchId: string;
  communicationDetails: CommunicationDetails;
  customerId: string;
  employeeCode: string;
  gstNo: string;
  links?: any;
  masterpolicyno: string;
  paymentOption: string;
  planId: string;
  policyDetails: PolicyDetails2;
  policyEndDate: string;
  policyId: string;
  policyStartDate: string;
  policyStatusId: string;
  policyTerm: string;
  productId: string;
  questionList: QuestionList[];
  sumInsured: string;
}

export class RootObject {
  policyDetails: PolicyDetails;
}

export class Response {
  affinityId: number;
  beneficiaryList?: any;
  branchId: number;
  communicationDetails?: any;
  customerId?: any;
  employeeCode: string;
  gstNo?: any;
  links?: any;
  masterpolicyno: string;
  paymentOption?: any;
  planId: number;
  policyDetails?: any;
  policyEndDate: number;
  policyId: number;
  policyStartDate: number;
  policyStatusId?: any;
  policyTerm: string;
  productId?: any;
  questionList?: any;
  sumInsured?: any;
}

class modalVO {
  afinityId: any;
  policyId: any;
  planId: any;
}

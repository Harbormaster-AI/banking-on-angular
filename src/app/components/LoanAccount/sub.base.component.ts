import { HttpClient } from '@angular/common/http';
import { BaseComponent } from '../base.component';

import { Directive } from '@angular/core';

/**
	Base class of all LoanAccount Edit and Create Components.  
 **/
@Directive()
export class SubBaseComponent extends BaseComponent {

  constructor (http: HttpClient) { super(http); }
  
  ngOnInit() {
  	super.ngOnInit();
  	
	this.initBankList();
	this.initBranchList();
	this.initBankingProductList();
	this.initCustomerList();
	this.initRepaymentScheduleList();
	this.initLoanPaymentList();
	this.initCollateralList();
	this.initFeeChargeList();
  }
}

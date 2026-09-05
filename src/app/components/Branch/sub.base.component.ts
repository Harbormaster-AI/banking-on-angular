import { HttpClient } from '@angular/common/http';
import { BaseComponent } from '../base.component';

import { Directive } from '@angular/core';

/**
	Base class of all Branch Edit and Create Components.  
 **/
@Directive()
export class SubBaseComponent extends BaseComponent {

  constructor (http: HttpClient) { super(http); }
  
  ngOnInit() {
  	super.ngOnInit();
  	
	this.initBankList();
	this.initAccountList();
	this.initLoanAccountList();
	this.initATMList();
  }
}

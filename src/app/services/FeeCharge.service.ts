import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {FeeCharge} from '../models/FeeCharge';
import {AccountService} from '../services/Account.service';
import {LoanAccountService} from '../services/LoanAccount.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class FeeChargeService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	feeCharge : FeeCharge;

	//********************************************************************
	// Catch all for the return value of a service call
	//********************************************************************
	result: any;

	//********************************************************************
	// sole constructor, injected with the HttpClient
	//********************************************************************
	constructor(private http: HttpClient) {
		super();
	}

		//********************************************************************
	// add a FeeCharge
	// returns the results untouched as a JSON representation
	// delegates via URI
	//********************************************************************
	addFeeCharge(feeCode, amount, appliedOn, Account, LoanAccount, FeeType) : Observable<any> {
		const uri_ = this.apiUrl + '/FeeCharge/create';
		const obj = {
			      		feeCode: feeCode,
      		amount: amount,
      		appliedOn: appliedOn,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		LoanAccount: LoanAccount != null && LoanAccount.length > 0 ? LoanAccount : null,
			FeeType: FeeType
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a FeeCharge
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateFeeCharge(feeCode, amount, appliedOn, Account, LoanAccount, FeeType, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/FeeCharge/update/' + id;
		const obj = {
				      		feeCode: feeCode,
      		amount: amount,
      		appliedOn: appliedOn,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		LoanAccount: LoanAccount != null && LoanAccount.length > 0 ? LoanAccount : null,
			FeeType: FeeType
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a FeeCharge
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteFeeCharge(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/FeeCharge/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a FeeCharge
	// returns the results untouched as an Observable FeeCharge
	// FeeCharge model
	// delegates via URI
	//********************************************************************
	getFeeCharge(id) : Observable<FeeCharge> {
		const uri_ = this.apiUrl + '/FeeCharge/load/' + id;

		return this.http.get<FeeCharge>(uri_);
	}
	
	//********************************************************************
	// gets all FeeCharge
	// returns the results untouched as JSON representation of an
	// Observable array of FeeCharge models
	// delegates via URI
	//********************************************************************
	getFeeCharges() : Observable<FeeCharge[]> {
		const uri_ = this.apiUrl + '/FeeCharge/';

		return this
			.http.get<FeeCharge[]>(uri_);
	}
	
			//********************************************************************
	// assigns a Account on a FeeCharge
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignAccount( feeChargeId, _accountId ): Observable<any> {

		// get the FeeCharge from storage
		this.loadHelper( feeChargeId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).getAccount(_accountId);

	// assign the Account
	this.feeCharge.account = tmp;

	// save the FeeCharge
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Account on a FeeCharge
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignAccount( feeChargeId ): Observable<any> {

		// get the FeeCharge from storage
		this.loadHelper( feeChargeId );

	// assign Account to null
	this.feeCharge.account = null;

	// save the FeeCharge
	return this.saveHelper();
}

		//********************************************************************
	// assigns a LoanAccount on a FeeCharge
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignLoanAccount( feeChargeId, _loanAccountId ): Observable<any> {

		// get the FeeCharge from storage
		this.loadHelper( feeChargeId );

	// get the LoanAccount from storage
	var tmp 	= new LoanAccountService(this.http).getLoanAccount(_loanAccountId);

	// assign the LoanAccount
	this.feeCharge.loanAccount = tmp;

	// save the FeeCharge
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a LoanAccount on a FeeCharge
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignLoanAccount( feeChargeId ): Observable<any> {

		// get the FeeCharge from storage
		this.loadHelper( feeChargeId );

	// assign LoanAccount to null
	this.feeCharge.loanAccount = null;

	// save the FeeCharge
	return this.saveHelper();
}

	
	
	//********************************************************************
	// saveHelper - internal helper to save a FeeCharge
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/FeeCharge/update/' + this.feeCharge;

	return  this.http.post(uri_, this.feeCharge );
}

	//********************************************************************
	// loadHelper - internal helper to load a FeeCharge
	//********************************************************************	
	loadHelper( id ) {
		this.getFeeCharge(id)
			.subscribe((res : FeeCharge) => {
				this.feeCharge = res;
			});
	}
}
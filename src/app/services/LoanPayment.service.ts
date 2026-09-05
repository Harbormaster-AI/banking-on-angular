import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {LoanPayment} from '../models/LoanPayment';
import {LoanAccountService} from '../services/LoanAccount.service';
import {TransactionService} from '../services/Transaction.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class LoanPaymentService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	loanPayment : any;

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
	// add a LoanPayment
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addLoanPayment(paymentReference, amount, paymentDate, LoanAccount, Transaction, Method, Status) : Promise<any> {
		const uri = this.apiUrl + '/LoanPayment/add';
		const obj = {
			      		paymentReference: paymentReference,
      		amount: amount,
      		paymentDate: paymentDate,
      		LoanAccount: LoanAccount != null && LoanAccount.length > 0 ? LoanAccount : null,
      		Transaction: Transaction != null && Transaction.length > 0 ? Transaction : null,
      		Method: Method,
			Status: Status
};

	return this.http.post(uri, obj).toPromise();
}

	//********************************************************************
	// gets all LoanPayment
	// returns the results untouched as JSON representation of an
	// array of LoanPayment models
	// delegates via URI to an ORM handler
	//********************************************************************
	getLoanPayments() {
		const uri = this.apiUrl + '/LoanPayment';

		return this
			.http.get(uri);
	}

	//********************************************************************
	// edit a LoanPayment
	// returns the results untouched as a JSON representation of a
	// LoanPayment model
	// delegates via URI to an ORM handler
	//********************************************************************
	editLoanPayment(id) {
		const uri = this.apiUrl + '/LoanPayment/edit/' + id;

		return this.http.get(uri);
	}

	//********************************************************************
	// update a LoanPayment
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
			updateLoanPayment(paymentReference, amount, paymentDate, LoanAccount, Transaction, Method, Status, id)  : Promise<any>  {
			const uri = this.apiUrl + '/LoanPayment/update/' + id;
	const obj = {
		      		paymentReference: paymentReference,
      		amount: amount,
      		paymentDate: paymentDate,
      		LoanAccount: LoanAccount != null && LoanAccount.length > 0 ? LoanAccount : null,
      		Transaction: Transaction != null && Transaction.length > 0 ? Transaction : null,
      		Method: Method,
			Status: Status
};

	return firstValueFrom(this.http.post(uri, obj));
}

	//********************************************************************
	// delete a LoanPayment
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteLoanPayment(id)  : Promise<any> {
		const uri = this.apiUrl + '/LoanPayment/delete/' + id;

		return firstValueFrom(this.http.get(uri));
	}

			//********************************************************************
	// assigns a LoanAccount on a LoanPayment
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignLoanAccount( loanPaymentId, _loanAccountId ): Promise<any> {

		// get the LoanPayment from storage
		this.loadHelper( loanPaymentId );

	// get the LoanAccount from storage
	var tmp 	= new LoanAccountService(this.http).editLoanAccount(_loanAccountId);

	// assign the LoanAccount
	this.loanPayment.loanAccount = tmp;

	// save the LoanPayment
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a LoanAccount on a LoanPayment
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignLoanAccount( loanPaymentId ): Promise<any> {

		// get the LoanPayment from storage
		this.loadHelper( loanPaymentId );

	// assign LoanAccount to null
	this.loanPayment.loanAccount = null;

	// save the LoanPayment
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Transaction on a LoanPayment
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignTransaction( loanPaymentId, _transactionId ): Promise<any> {

		// get the LoanPayment from storage
		this.loadHelper( loanPaymentId );

	// get the Transaction from storage
	var tmp 	= new TransactionService(this.http).editTransaction(_transactionId);

	// assign the Transaction
	this.loanPayment.transaction = tmp;

	// save the LoanPayment
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Transaction on a LoanPayment
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignTransaction( loanPaymentId ): Promise<any> {

		// get the LoanPayment from storage
		this.loadHelper( loanPaymentId );

	// assign Transaction to null
	this.loanPayment.transaction = null;

	// save the LoanPayment
	return this.saveHelper();
}

	
	
	//********************************************************************
	// saveHelper - internal helper to save a LoanPayment
	//********************************************************************
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/LoanPayment/update/' + this.loanPayment;

	return firstValueFrom( this
		.http
		.post(uri, this.loanPayment)
);
}

	//********************************************************************
	// loadHelper - internal helper to load a LoanPayment
	//********************************************************************	
	loadHelper( id ) {
		this.editLoanPayment(id)
			.subscribe(res => {
				this.loanPayment = res;
			});
	}
}
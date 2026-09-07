import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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
	loanPayment : LoanPayment;

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
	// delegates via URI
	//********************************************************************
	addLoanPayment(paymentReference, amount, paymentDate, LoanAccount, Transaction, Method, Status) : Observable<any> {
		const uri_ = this.apiUrl + '/LoanPayment/create';
		const obj = {
			      		paymentReference: paymentReference,
      		amount: amount,
      		paymentDate: paymentDate,
      		LoanAccount: LoanAccount != null && LoanAccount.length > 0 ? LoanAccount : null,
      		Transaction: Transaction != null && Transaction.length > 0 ? Transaction : null,
      		Method: Method,
			Status: Status
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a LoanPayment
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateLoanPayment(paymentReference, amount, paymentDate, LoanAccount, Transaction, Method, Status, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/LoanPayment/update/' + id;
		const obj = {
				      		paymentReference: paymentReference,
      		amount: amount,
      		paymentDate: paymentDate,
      		LoanAccount: LoanAccount != null && LoanAccount.length > 0 ? LoanAccount : null,
      		Transaction: Transaction != null && Transaction.length > 0 ? Transaction : null,
      		Method: Method,
			Status: Status
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a LoanPayment
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteLoanPayment(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/LoanPayment/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a LoanPayment
	// returns the results untouched as an Observable LoanPayment
	// LoanPayment model
	// delegates via URI
	//********************************************************************
	getLoanPayment(id) : Observable<LoanPayment> {
		const uri_ = this.apiUrl + '/LoanPayment/load/' + id;

		return this.http.get<LoanPayment>(uri_);
	}
	
	//********************************************************************
	// gets all LoanPayment
	// returns the results untouched as JSON representation of an
	// Observable array of LoanPayment models
	// delegates via URI
	//********************************************************************
	getLoanPayments() : Observable<LoanPayment[]> {
		const uri_ = this.apiUrl + '/LoanPayment/';

		return this
			.http.get<LoanPayment[]>(uri_);
	}
	
			//********************************************************************
	// assigns a LoanAccount on a LoanPayment
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignLoanAccount( loanPaymentId, _loanAccountId ): Observable<any> {

		// get the LoanPayment from storage
		this.loadHelper( loanPaymentId );

	// get the LoanAccount from storage
	var tmp 	= new LoanAccountService(this.http).getLoanAccount(_loanAccountId);

	// assign the LoanAccount
	this.loanPayment.loanAccount = tmp;

	// save the LoanPayment
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a LoanAccount on a LoanPayment
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignLoanAccount( loanPaymentId ): Observable<any> {

		// get the LoanPayment from storage
		this.loadHelper( loanPaymentId );

	// assign LoanAccount to null
	this.loanPayment.loanAccount = null;

	// save the LoanPayment
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Transaction on a LoanPayment
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignTransaction( loanPaymentId, _transactionId ): Observable<any> {

		// get the LoanPayment from storage
		this.loadHelper( loanPaymentId );

	// get the Transaction from storage
	var tmp 	= new TransactionService(this.http).getTransaction(_transactionId);

	// assign the Transaction
	this.loanPayment.transaction = tmp;

	// save the LoanPayment
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Transaction on a LoanPayment
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignTransaction( loanPaymentId ): Observable<any> {

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
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/LoanPayment/update/' + this.loanPayment;

	return  this.http.post(uri_, this.loanPayment );
}

	//********************************************************************
	// loadHelper - internal helper to load a LoanPayment
	//********************************************************************	
	loadHelper( id ) {
		this.getLoanPayment(id)
			.subscribe((res : LoanPayment) => {
				this.loanPayment = res;
			});
	}
}
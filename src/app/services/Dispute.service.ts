import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Dispute} from '../models/Dispute';
import {TransactionService} from '../services/Transaction.service';
import {CustomerService} from '../services/Customer.service';
import {AccountService} from '../services/Account.service';
import {PaymentCardService} from '../services/PaymentCard.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class DisputeService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	dispute : Dispute;

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
	// add a Dispute
	// returns the results untouched as a JSON representation
	// delegates via URI
	//********************************************************************
	addDispute(disputeReference, raisedOn, reason, Transaction, Customer, Account, PaymentCard, Status) : Observable<any> {
		const uri_ = this.apiUrl + '/Dispute/create';
		const obj = {
			      		disputeReference: disputeReference,
      		raisedOn: raisedOn,
      		reason: reason,
      		Transaction: Transaction != null && Transaction.length > 0 ? Transaction : null,
      		Customer: Customer != null && Customer.length > 0 ? Customer : null,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		PaymentCard: PaymentCard != null && PaymentCard.length > 0 ? PaymentCard : null,
			Status: Status
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a Dispute
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateDispute(disputeReference, raisedOn, reason, Transaction, Customer, Account, PaymentCard, Status, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/Dispute/update/' + id;
		const obj = {
				      		disputeReference: disputeReference,
      		raisedOn: raisedOn,
      		reason: reason,
      		Transaction: Transaction != null && Transaction.length > 0 ? Transaction : null,
      		Customer: Customer != null && Customer.length > 0 ? Customer : null,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		PaymentCard: PaymentCard != null && PaymentCard.length > 0 ? PaymentCard : null,
			Status: Status
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a Dispute
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteDispute(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/Dispute/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a Dispute
	// returns the results untouched as an Observable Dispute
	// Dispute model
	// delegates via URI
	//********************************************************************
	getDispute(id) : Observable<Dispute> {
		const uri_ = this.apiUrl + '/Dispute/load/' + id;

		return this.http.get<Dispute>(uri_);
	}
	
	//********************************************************************
	// gets all Dispute
	// returns the results untouched as JSON representation of an
	// Observable array of Dispute models
	// delegates via URI
	//********************************************************************
	getDisputes() : Observable<Dispute[]> {
		const uri_ = this.apiUrl + '/Dispute/';

		return this
			.http.get<Dispute[]>(uri_);
	}
	
			//********************************************************************
	// assigns a Transaction on a Dispute
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignTransaction( disputeId, _transactionId ): Observable<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// get the Transaction from storage
	var tmp 	= new TransactionService(this.http).getTransaction(_transactionId);

	// assign the Transaction
	this.dispute.transaction = tmp;

	// save the Dispute
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Transaction on a Dispute
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignTransaction( disputeId ): Observable<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// assign Transaction to null
	this.dispute.transaction = null;

	// save the Dispute
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Customer on a Dispute
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignCustomer( disputeId, _customerId ): Observable<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// get the Customer from storage
	var tmp 	= new CustomerService(this.http).getCustomer(_customerId);

	// assign the Customer
	this.dispute.customer = tmp;

	// save the Dispute
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Customer on a Dispute
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignCustomer( disputeId ): Observable<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// assign Customer to null
	this.dispute.customer = null;

	// save the Dispute
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Account on a Dispute
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignAccount( disputeId, _accountId ): Observable<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).getAccount(_accountId);

	// assign the Account
	this.dispute.account = tmp;

	// save the Dispute
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Account on a Dispute
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignAccount( disputeId ): Observable<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// assign Account to null
	this.dispute.account = null;

	// save the Dispute
	return this.saveHelper();
}

		//********************************************************************
	// assigns a PaymentCard on a Dispute
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignPaymentCard( disputeId, _paymentCardId ): Observable<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// get the PaymentCard from storage
	var tmp 	= new PaymentCardService(this.http).getPaymentCard(_paymentCardId);

	// assign the PaymentCard
	this.dispute.paymentCard = tmp;

	// save the Dispute
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a PaymentCard on a Dispute
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignPaymentCard( disputeId ): Observable<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// assign PaymentCard to null
	this.dispute.paymentCard = null;

	// save the Dispute
	return this.saveHelper();
}

	
	
	//********************************************************************
	// saveHelper - internal helper to save a Dispute
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/Dispute/update/' + this.dispute;

	return  this.http.post(uri_, this.dispute );
}

	//********************************************************************
	// loadHelper - internal helper to load a Dispute
	//********************************************************************	
	loadHelper( id ) {
		this.getDispute(id)
			.subscribe((res : Dispute) => {
				this.dispute = res;
			});
	}
}
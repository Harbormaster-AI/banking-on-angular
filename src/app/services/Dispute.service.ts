import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
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
	dispute : any;

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
	// delegates via URI to an ORM handler
	//********************************************************************
	addDispute(disputeReference, raisedOn, reason, Transaction, Customer, Account, PaymentCard, Status) : Promise<any> {
		const uri = this.apiUrl + '/Dispute/add';
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

	return this.http.post(uri, obj).toPromise();
}

	//********************************************************************
	// gets all Dispute
	// returns the results untouched as JSON representation of an
	// array of Dispute models
	// delegates via URI to an ORM handler
	//********************************************************************
	getDisputes() {
		const uri = this.apiUrl + '/Dispute';

		return this
			.http.get(uri);
	}

	//********************************************************************
	// edit a Dispute
	// returns the results untouched as a JSON representation of a
	// Dispute model
	// delegates via URI to an ORM handler
	//********************************************************************
	editDispute(id) {
		const uri = this.apiUrl + '/Dispute/edit/' + id;

		return this.http.get(uri);
	}

	//********************************************************************
	// update a Dispute
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
			updateDispute(disputeReference, raisedOn, reason, Transaction, Customer, Account, PaymentCard, Status, id)  : Promise<any>  {
			const uri = this.apiUrl + '/Dispute/update/' + id;
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

	return firstValueFrom(this.http.post(uri, obj));
}

	//********************************************************************
	// delete a Dispute
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteDispute(id)  : Promise<any> {
		const uri = this.apiUrl + '/Dispute/delete/' + id;

		return firstValueFrom(this.http.get(uri));
	}

			//********************************************************************
	// assigns a Transaction on a Dispute
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignTransaction( disputeId, _transactionId ): Promise<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// get the Transaction from storage
	var tmp 	= new TransactionService(this.http).editTransaction(_transactionId);

	// assign the Transaction
	this.dispute.transaction = tmp;

	// save the Dispute
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Transaction on a Dispute
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignTransaction( disputeId ): Promise<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// assign Transaction to null
	this.dispute.transaction = null;

	// save the Dispute
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Customer on a Dispute
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignCustomer( disputeId, _customerId ): Promise<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// get the Customer from storage
	var tmp 	= new CustomerService(this.http).editCustomer(_customerId);

	// assign the Customer
	this.dispute.customer = tmp;

	// save the Dispute
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Customer on a Dispute
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignCustomer( disputeId ): Promise<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// assign Customer to null
	this.dispute.customer = null;

	// save the Dispute
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Account on a Dispute
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignAccount( disputeId, _accountId ): Promise<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).editAccount(_accountId);

	// assign the Account
	this.dispute.account = tmp;

	// save the Dispute
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Account on a Dispute
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignAccount( disputeId ): Promise<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// assign Account to null
	this.dispute.account = null;

	// save the Dispute
	return this.saveHelper();
}

		//********************************************************************
	// assigns a PaymentCard on a Dispute
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignPaymentCard( disputeId, _paymentCardId ): Promise<any> {

		// get the Dispute from storage
		this.loadHelper( disputeId );

	// get the PaymentCard from storage
	var tmp 	= new PaymentCardService(this.http).editPaymentCard(_paymentCardId);

	// assign the PaymentCard
	this.dispute.paymentCard = tmp;

	// save the Dispute
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a PaymentCard on a Dispute
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignPaymentCard( disputeId ): Promise<any> {

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
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/Dispute/update/' + this.dispute;

	return firstValueFrom( this
		.http
		.post(uri, this.dispute)
);
}

	//********************************************************************
	// loadHelper - internal helper to load a Dispute
	//********************************************************************	
	loadHelper( id ) {
		this.editDispute(id)
			.subscribe(res => {
				this.dispute = res;
			});
	}
}
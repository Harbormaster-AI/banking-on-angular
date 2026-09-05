import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {ExternalAccount} from '../models/ExternalAccount';
import {CustomerService} from '../services/Customer.service';
import {TransactionService} from '../services/Transaction.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class ExternalAccountService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	externalAccount : ExternalAccount;

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
	// add a ExternalAccount
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addExternalAccount(name, iban, accountNumber, bic, bankName, country, Customer, Transactions) : Observable<any> {
		const uri = this.apiUrl + '/ExternalAccount/add';
		const obj = {
			      		name: name,
      		iban: iban,
      		accountNumber: accountNumber,
      		bic: bic,
      		bankName: bankName,
      		country: country,
      		Customer: Customer != null && Customer.length > 0 ? Customer : null,
			Transactions: Transactions != null && Transactions.length > 0 ? Transactions : null
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all ExternalAccount
	// returns the results untouched as JSON representation of an
	// array of ExternalAccount models
	// delegates via URI to an ORM handler
	//********************************************************************
	getExternalAccounts() : Observable<ExternalAccount[]> {
		const uri = this.apiUrl + '/ExternalAccount';

		return this
			.http.get<ExternalAccount[]>(uri);
	}

	//********************************************************************
	// edit a ExternalAccount
	// returns the results untouched as a JSON representation of a
	// ExternalAccount model
	// delegates via URI to an ORM handler
	//********************************************************************
	editExternalAccount(id) : Observable<ExternalAccount> {
		const uri = this.apiUrl + '/ExternalAccount/edit/' + id;

		return this.http.get<ExternalAccount>(uri);
	}

	//********************************************************************
	// update a ExternalAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
		updateExternalAccount(name, iban, accountNumber, bic, bankName, country, Customer, Transactions, id)  :  Observable<any>  {
				const uri = this.apiUrl + '/ExternalAccount/update/' + id;
			const obj = {
				      		name: name,
      		iban: iban,
      		accountNumber: accountNumber,
      		bic: bic,
      		bankName: bankName,
      		country: country,
      		Customer: Customer != null && Customer.length > 0 ? Customer : null,
			Transactions: Transactions != null && Transactions.length > 0 ? Transactions : null
			};
		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a ExternalAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteExternalAccount(id)  : Observable<any> {
		const uri = this.apiUrl + '/ExternalAccount/delete/' + id;

		return this.http.get(uri);
	}

			//********************************************************************
	// assigns a Customer on a ExternalAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignCustomer( externalAccountId, _customerId ): Promise<any> {

		// get the ExternalAccount from storage
		this.loadHelper( externalAccountId );

	// get the Customer from storage
	var tmp 	= new CustomerService(this.http).editCustomer(_customerId);

	// assign the Customer
	this.externalAccount.customer = tmp;

	// save the ExternalAccount
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Customer on a ExternalAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignCustomer( externalAccountId ): Promise<any> {

		// get the ExternalAccount from storage
		this.loadHelper( externalAccountId );

	// assign Customer to null
	this.externalAccount.customer = null;

	// save the ExternalAccount
	return this.saveHelper();
}

	
		//********************************************************************
	// adds one or more transactionsIds as a Transactions
	// to a ExternalAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addTransactions( externalAccountId, transactionsIds ): Promise<any> {

		// get the ExternalAccount
		this.loadHelper( externalAccountId );

	// split on a comma with no spaces
	var idList = transactionsIds.split(',')

	// iterate over array of transactions ids
	idList.forEach(function (id) {
		// read the Transaction
		var transaction = new TransactionService(this.http).editTransaction(id);
		// add the Transaction if not already assigned
		if ( this.externalAccount.transactions.indexOf(transaction) == -1 )
		this.externalAccount.transactions.push(transaction);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more transactionsIds as a Transactions
	// from a ExternalAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeTransactions( externalAccountId, transactionsIds ): Promise<any> {

		// get the ExternalAccount
		this.loadHelper( externalAccountId );


	// split on a comma with no spaces
	var idList 					= transactionsIds.split(',');
	var transactions 	= this.externalAccount.transactions;

	if ( transactions != null && transactionsIds != null ) {

		// iterate over array of transactions ids
		transactions.forEach(function (obj) {
			if ( transactionsIds.indexOf(obj._id) > -1 ) {
				// remove the Transaction
				this.externalAccount.transactions.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

	
	//********************************************************************
	// saveHelper - internal helper to save a ExternalAccount
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri = this.apiUrl + '/ExternalAccount/update/' + this.externalAccount;

	return  this.http.post(uri, this.externalAccount );
}

	//********************************************************************
	// loadHelper - internal helper to load a ExternalAccount
	//********************************************************************	
	loadHelper( id ) {
		this.editExternalAccount(id)
			.subscribe((res : ExternalAccount) => {
				this.externalAccount = res;
			});
	}
}
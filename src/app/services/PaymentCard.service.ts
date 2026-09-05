import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {PaymentCard} from '../models/PaymentCard';
import {BankService} from '../services/Bank.service';
import {AccountService} from '../services/Account.service';
import {CustomerService} from '../services/Customer.service';
import {TransactionService} from '../services/Transaction.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class PaymentCardService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	paymentCard : PaymentCard;

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
	// add a PaymentCard
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addPaymentCard(cardNumber, embossedName, expiryMonth, expiryYear, Bank, Account, Customer, Transactions, CardType, CardStatus, Network) : Observable<any> {
		const uri = this.apiUrl + '/PaymentCard/add';
		const obj = {
			      		cardNumber: cardNumber,
      		embossedName: embossedName,
      		expiryMonth: expiryMonth,
      		expiryYear: expiryYear,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		Customer: Customer != null && Customer.length > 0 ? Customer : null,
      		Transactions: Transactions != null && Transactions.length > 0 ? Transactions : null,
      		CardType: CardType,
      		CardStatus: CardStatus,
			Network: Network
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all PaymentCard
	// returns the results untouched as JSON representation of an
	// array of PaymentCard models
	// delegates via URI to an ORM handler
	//********************************************************************
	getPaymentCards() ): Observable<PaymentCard[]> {
		const uri = this.apiUrl + '/PaymentCard';

		return this
			.http.get<PaymentCard[]>(uri);
	}

	//********************************************************************
	// edit a PaymentCard
	// returns the results untouched as a JSON representation of a
	// PaymentCard model
	// delegates via URI to an ORM handler
	//********************************************************************
	editPaymentCard(id) : Observable<PaymentCard> {
		const uri = this.apiUrl + '/PaymentCard/edit/' + id;

		return this.http.get(Observable<PaymentCard>)(uri);
	}

	//********************************************************************
	// update a PaymentCard
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
			updatePaymentCard(cardNumber, embossedName, expiryMonth, expiryYear, Bank, Account, Customer, Transactions, CardType, CardStatus, Network, id)  : Promise<any>  {
			const uri = this.apiUrl + '/PaymentCard/update/' + id;
	const obj = {
		      		cardNumber: cardNumber,
      		embossedName: embossedName,
      		expiryMonth: expiryMonth,
      		expiryYear: expiryYear,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		Customer: Customer != null && Customer.length > 0 ? Customer : null,
      		Transactions: Transactions != null && Transactions.length > 0 ? Transactions : null,
      		CardType: CardType,
      		CardStatus: CardStatus,
			Network: Network
};

	return firstValueFrom(this.http.post(uri, obj));
}

	//********************************************************************
	// delete a PaymentCard
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deletePaymentCard(id)  : Observable<any> {
		const uri = this.apiUrl + '/PaymentCard/delete/' + id;

		return firstValueFrom(this.http.get(uri));
	}

			//********************************************************************
	// assigns a Bank on a PaymentCard
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBank( paymentCardId, _bankId ): Promise<any> {

		// get the PaymentCard from storage
		this.loadHelper( paymentCardId );

	// get the Bank from storage
	var tmp 	= new BankService(this.http).editBank(_bankId);

	// assign the Bank
	this.paymentCard.bank = tmp;

	// save the PaymentCard
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Bank on a PaymentCard
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignBank( paymentCardId ): Promise<any> {

		// get the PaymentCard from storage
		this.loadHelper( paymentCardId );

	// assign Bank to null
	this.paymentCard.bank = null;

	// save the PaymentCard
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Account on a PaymentCard
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignAccount( paymentCardId, _accountId ): Promise<any> {

		// get the PaymentCard from storage
		this.loadHelper( paymentCardId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).editAccount(_accountId);

	// assign the Account
	this.paymentCard.account = tmp;

	// save the PaymentCard
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Account on a PaymentCard
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignAccount( paymentCardId ): Promise<any> {

		// get the PaymentCard from storage
		this.loadHelper( paymentCardId );

	// assign Account to null
	this.paymentCard.account = null;

	// save the PaymentCard
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Customer on a PaymentCard
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignCustomer( paymentCardId, _customerId ): Promise<any> {

		// get the PaymentCard from storage
		this.loadHelper( paymentCardId );

	// get the Customer from storage
	var tmp 	= new CustomerService(this.http).editCustomer(_customerId);

	// assign the Customer
	this.paymentCard.customer = tmp;

	// save the PaymentCard
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Customer on a PaymentCard
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignCustomer( paymentCardId ): Promise<any> {

		// get the PaymentCard from storage
		this.loadHelper( paymentCardId );

	// assign Customer to null
	this.paymentCard.customer = null;

	// save the PaymentCard
	return this.saveHelper();
}

	
		//********************************************************************
	// adds one or more transactionsIds as a Transactions
	// to a PaymentCard
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addTransactions( paymentCardId, transactionsIds ): Promise<any> {

		// get the PaymentCard
		this.loadHelper( paymentCardId );

	// split on a comma with no spaces
	var idList = transactionsIds.split(',')

	// iterate over array of transactions ids
	idList.forEach(function (id) {
		// read the Transaction
		var transaction = new TransactionService(this.http).editTransaction(id);
		// add the Transaction if not already assigned
		if ( this.paymentCard.transactions.indexOf(transaction) == -1 )
		this.paymentCard.transactions.push(transaction);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more transactionsIds as a Transactions
	// from a PaymentCard
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeTransactions( paymentCardId, transactionsIds ): Promise<any> {

		// get the PaymentCard
		this.loadHelper( paymentCardId );


	// split on a comma with no spaces
	var idList 					= transactionsIds.split(',');
	var transactions 	= this.paymentCard.transactions;

	if ( transactions != null && transactionsIds != null ) {

		// iterate over array of transactions ids
		transactions.forEach(function (obj) {
			if ( transactionsIds.indexOf(obj._id) > -1 ) {
				// remove the Transaction
				this.paymentCard.transactions.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

	
	//********************************************************************
	// saveHelper - internal helper to save a PaymentCard
	//********************************************************************
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/PaymentCard/update/' + this.paymentCard;

	return firstValueFrom( this
		.http
		.post(uri, this.paymentCard)
);
}

	//********************************************************************
	// loadHelper - internal helper to load a PaymentCard
	//********************************************************************	
	loadHelper( id ) {
		this.editPaymentCard(id)
			.subscribe(res : PaymentCard => {
				this.paymentCard = res;
			});
	}
}
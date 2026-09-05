import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {FXTrade} from '../models/FXTrade';
import {CustomerService} from '../services/Customer.service';
import {BankService} from '../services/Bank.service';
import {ExchangeRateService} from '../services/ExchangeRate.service';
import {AccountService} from '../services/Account.service';
import {TransactionService} from '../services/Transaction.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class FXTradeService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	fXTrade : FXTrade;

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
	// add a FXTrade
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addFXTrade(tradeReference, tradeDate, settlementDate, amountSold, amountBought, rate, Customer, Bank, ExchangeRate, SourceAccount, DestinationAccount, Transaction, Status) : Promise<any> {
		const uri = this.apiUrl + '/FXTrade/add';
		const obj = {
			      		tradeReference: tradeReference,
      		tradeDate: tradeDate,
      		settlementDate: settlementDate,
      		amountSold: amountSold,
      		amountBought: amountBought,
      		rate: rate,
      		Customer: Customer != null && Customer.length > 0 ? Customer : null,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		ExchangeRate: ExchangeRate != null && ExchangeRate.length > 0 ? ExchangeRate : null,
      		SourceAccount: SourceAccount != null && SourceAccount.length > 0 ? SourceAccount : null,
      		DestinationAccount: DestinationAccount != null && DestinationAccount.length > 0 ? DestinationAccount : null,
      		Transaction: Transaction != null && Transaction.length > 0 ? Transaction : null,
			Status: Status
};

	return this.http.post(uri, obj).toPromise();
}

	//********************************************************************
	// gets all FXTrade
	// returns the results untouched as JSON representation of an
	// array of FXTrade models
	// delegates via URI to an ORM handler
	//********************************************************************
	getFXTrades() {
		const uri = this.apiUrl + '/FXTrade';

		return this
			.http.get(uri);
	}

	//********************************************************************
	// edit a FXTrade
	// returns the results untouched as a JSON representation of a
	// FXTrade model
	// delegates via URI to an ORM handler
	//********************************************************************
	editFXTrade(id) {
		const uri = this.apiUrl + '/FXTrade/edit/' + id;

		return this.http.get(uri);
	}

	//********************************************************************
	// update a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
			updateFXTrade(tradeReference, tradeDate, settlementDate, amountSold, amountBought, rate, Customer, Bank, ExchangeRate, SourceAccount, DestinationAccount, Transaction, Status, id)  : Promise<any>  {
			const uri = this.apiUrl + '/FXTrade/update/' + id;
	const obj = {
		      		tradeReference: tradeReference,
      		tradeDate: tradeDate,
      		settlementDate: settlementDate,
      		amountSold: amountSold,
      		amountBought: amountBought,
      		rate: rate,
      		Customer: Customer != null && Customer.length > 0 ? Customer : null,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		ExchangeRate: ExchangeRate != null && ExchangeRate.length > 0 ? ExchangeRate : null,
      		SourceAccount: SourceAccount != null && SourceAccount.length > 0 ? SourceAccount : null,
      		DestinationAccount: DestinationAccount != null && DestinationAccount.length > 0 ? DestinationAccount : null,
      		Transaction: Transaction != null && Transaction.length > 0 ? Transaction : null,
			Status: Status
};

	return firstValueFrom(this.http.post(uri, obj));
}

	//********************************************************************
	// delete a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteFXTrade(id)  : Promise<any> {
		const uri = this.apiUrl + '/FXTrade/delete/' + id;

		return firstValueFrom(this.http.get(uri));
	}

			//********************************************************************
	// assigns a Customer on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignCustomer( fXTradeId, _customerId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the Customer from storage
	var tmp 	= new CustomerService(this.http).editCustomer(_customerId);

	// assign the Customer
	this.fXTrade.customer = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Customer on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignCustomer( fXTradeId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// assign Customer to null
	this.fXTrade.customer = null;

	// save the FXTrade
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Bank on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBank( fXTradeId, _bankId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the Bank from storage
	var tmp 	= new BankService(this.http).editBank(_bankId);

	// assign the Bank
	this.fXTrade.bank = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Bank on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignBank( fXTradeId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// assign Bank to null
	this.fXTrade.bank = null;

	// save the FXTrade
	return this.saveHelper();
}

		//********************************************************************
	// assigns a ExchangeRate on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignExchangeRate( fXTradeId, _exchangeRateId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the ExchangeRate from storage
	var tmp 	= new ExchangeRateService(this.http).editExchangeRate(_exchangeRateId);

	// assign the ExchangeRate
	this.fXTrade.exchangeRate = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a ExchangeRate on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignExchangeRate( fXTradeId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// assign ExchangeRate to null
	this.fXTrade.exchangeRate = null;

	// save the FXTrade
	return this.saveHelper();
}

		//********************************************************************
	// assigns a SourceAccount on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignSourceAccount( fXTradeId, _sourceAccountId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).editAccount(_sourceAccountId);

	// assign the SourceAccount
	this.fXTrade.sourceAccount = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a SourceAccount on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignSourceAccount( fXTradeId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// assign SourceAccount to null
	this.fXTrade.sourceAccount = null;

	// save the FXTrade
	return this.saveHelper();
}

		//********************************************************************
	// assigns a DestinationAccount on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignDestinationAccount( fXTradeId, _destinationAccountId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).editAccount(_destinationAccountId);

	// assign the DestinationAccount
	this.fXTrade.destinationAccount = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a DestinationAccount on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignDestinationAccount( fXTradeId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// assign DestinationAccount to null
	this.fXTrade.destinationAccount = null;

	// save the FXTrade
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Transaction on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignTransaction( fXTradeId, _transactionId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the Transaction from storage
	var tmp 	= new TransactionService(this.http).editTransaction(_transactionId);

	// assign the Transaction
	this.fXTrade.transaction = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Transaction on a FXTrade
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignTransaction( fXTradeId ): Promise<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// assign Transaction to null
	this.fXTrade.transaction = null;

	// save the FXTrade
	return this.saveHelper();
}

	
	
	//********************************************************************
	// saveHelper - internal helper to save a FXTrade
	//********************************************************************
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/FXTrade/update/' + this.fXTrade;

	return firstValueFrom( this
		.http
		.post(uri, this.fXTrade)
);
}

	//********************************************************************
	// loadHelper - internal helper to load a FXTrade
	//********************************************************************	
	loadHelper( id ) {
		this.editFXTrade(id)
			.subscribe(res : FXTrade => {
				this.fXTrade = res;
			});
	}
}
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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
	// delegates via URI
	//********************************************************************
	addFXTrade(tradeReference, tradeDate, settlementDate, amountSold, amountBought, rate, Customer, Bank, ExchangeRate, SourceAccount, DestinationAccount, Transaction, Status) : Observable<any> {
		const uri_ = this.apiUrl + '/FXTrade/create';
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

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateFXTrade(tradeReference, tradeDate, settlementDate, amountSold, amountBought, rate, Customer, Bank, ExchangeRate, SourceAccount, DestinationAccount, Transaction, Status, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/FXTrade/update/' + id;
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
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteFXTrade(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/FXTrade/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a FXTrade
	// returns the results untouched as an Observable FXTrade
	// FXTrade model
	// delegates via URI
	//********************************************************************
	getFXTrade(id) : Observable<FXTrade> {
		const uri_ = this.apiUrl + '/FXTrade/load/' + id;

		return this.http.get<FXTrade>(uri_);
	}
	
	//********************************************************************
	// gets all FXTrade
	// returns the results untouched as JSON representation of an
	// Observable array of FXTrade models
	// delegates via URI
	//********************************************************************
	getFXTrades() : Observable<FXTrade[]> {
		const uri_ = this.apiUrl + '/FXTrade/';

		return this
			.http.get<FXTrade[]>(uri_);
	}
	
			//********************************************************************
	// assigns a Customer on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignCustomer( fXTradeId, _customerId ): Observable<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the Customer from storage
	var tmp 	= new CustomerService(this.http).getCustomer(_customerId);

	// assign the Customer
	this.fXTrade.customer = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Customer on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignCustomer( fXTradeId ): Observable<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// assign Customer to null
	this.fXTrade.customer = null;

	// save the FXTrade
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Bank on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignBank( fXTradeId, _bankId ): Observable<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the Bank from storage
	var tmp 	= new BankService(this.http).getBank(_bankId);

	// assign the Bank
	this.fXTrade.bank = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Bank on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignBank( fXTradeId ): Observable<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// assign Bank to null
	this.fXTrade.bank = null;

	// save the FXTrade
	return this.saveHelper();
}

		//********************************************************************
	// assigns a ExchangeRate on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignExchangeRate( fXTradeId, _exchangeRateId ): Observable<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the ExchangeRate from storage
	var tmp 	= new ExchangeRateService(this.http).getExchangeRate(_exchangeRateId);

	// assign the ExchangeRate
	this.fXTrade.exchangeRate = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a ExchangeRate on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignExchangeRate( fXTradeId ): Observable<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// assign ExchangeRate to null
	this.fXTrade.exchangeRate = null;

	// save the FXTrade
	return this.saveHelper();
}

		//********************************************************************
	// assigns a SourceAccount on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignSourceAccount( fXTradeId, _sourceAccountId ): Observable<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).getAccount(_sourceAccountId);

	// assign the SourceAccount
	this.fXTrade.sourceAccount = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a SourceAccount on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignSourceAccount( fXTradeId ): Observable<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// assign SourceAccount to null
	this.fXTrade.sourceAccount = null;

	// save the FXTrade
	return this.saveHelper();
}

		//********************************************************************
	// assigns a DestinationAccount on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignDestinationAccount( fXTradeId, _destinationAccountId ): Observable<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).getAccount(_destinationAccountId);

	// assign the DestinationAccount
	this.fXTrade.destinationAccount = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a DestinationAccount on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignDestinationAccount( fXTradeId ): Observable<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// assign DestinationAccount to null
	this.fXTrade.destinationAccount = null;

	// save the FXTrade
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Transaction on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignTransaction( fXTradeId, _transactionId ): Observable<any> {

		// get the FXTrade from storage
		this.loadHelper( fXTradeId );

	// get the Transaction from storage
	var tmp 	= new TransactionService(this.http).getTransaction(_transactionId);

	// assign the Transaction
	this.fXTrade.transaction = tmp;

	// save the FXTrade
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Transaction on a FXTrade
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignTransaction( fXTradeId ): Observable<any> {

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
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/FXTrade/update/' + this.fXTrade;

	return  this.http.post(uri_, this.fXTrade );
}

	//********************************************************************
	// loadHelper - internal helper to load a FXTrade
	//********************************************************************	
	loadHelper( id ) {
		this.getFXTrade(id)
			.subscribe((res : FXTrade) => {
				this.fXTrade = res;
			});
	}
}
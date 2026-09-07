import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {ExchangeRate} from '../models/ExchangeRate';
import {BankService} from '../services/Bank.service';
import {FXTradeService} from '../services/FXTrade.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class ExchangeRateService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	exchangeRate : ExchangeRate;

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
	// add a ExchangeRate
	// returns the results untouched as a JSON representation
	// delegates via URI
	//********************************************************************
	addExchangeRate(baseCurrency, counterCurrency, rate, asOf, source, Bank, FxTrades) : Observable<any> {
		const uri_ = this.apiUrl + '/ExchangeRate/create';
		const obj = {
			      		baseCurrency: baseCurrency,
      		counterCurrency: counterCurrency,
      		rate: rate,
      		asOf: asOf,
      		source: source,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
			FxTrades: FxTrades != null && FxTrades.length > 0 ? FxTrades : null
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a ExchangeRate
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateExchangeRate(baseCurrency, counterCurrency, rate, asOf, source, Bank, FxTrades, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/ExchangeRate/update/' + id;
		const obj = {
				      		baseCurrency: baseCurrency,
      		counterCurrency: counterCurrency,
      		rate: rate,
      		asOf: asOf,
      		source: source,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
			FxTrades: FxTrades != null && FxTrades.length > 0 ? FxTrades : null
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a ExchangeRate
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteExchangeRate(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/ExchangeRate/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a ExchangeRate
	// returns the results untouched as an Observable ExchangeRate
	// ExchangeRate model
	// delegates via URI
	//********************************************************************
	getExchangeRate(id) : Observable<ExchangeRate> {
		const uri_ = this.apiUrl + '/ExchangeRate/load/' + id;

		return this.http.get<ExchangeRate>(uri_);
	}
	
	//********************************************************************
	// gets all ExchangeRate
	// returns the results untouched as JSON representation of an
	// Observable array of ExchangeRate models
	// delegates via URI
	//********************************************************************
	getExchangeRates() : Observable<ExchangeRate[]> {
		const uri_ = this.apiUrl + '/ExchangeRate/';

		return this
			.http.get<ExchangeRate[]>(uri_);
	}
	
			//********************************************************************
	// assigns a Bank on a ExchangeRate
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignBank( exchangeRateId, _bankId ): Observable<any> {

		// get the ExchangeRate from storage
		this.loadHelper( exchangeRateId );

	// get the Bank from storage
	var tmp 	= new BankService(this.http).getBank(_bankId);

	// assign the Bank
	this.exchangeRate.bank = tmp;

	// save the ExchangeRate
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Bank on a ExchangeRate
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignBank( exchangeRateId ): Observable<any> {

		// get the ExchangeRate from storage
		this.loadHelper( exchangeRateId );

	// assign Bank to null
	this.exchangeRate.bank = null;

	// save the ExchangeRate
	return this.saveHelper();
}

	
		//********************************************************************
	// adds one or more fxTradesIds as a FxTrades
	// to a ExchangeRate
	// returns a Promise
	// delegates via URI
	//********************************************************************
	addFxTrades( exchangeRateId, fxTradesIds ): Observable<any> {

		// get the ExchangeRate
		this.loadHelper( exchangeRateId );

	// split on a comma with no spaces
	var idList = fxTradesIds.split(',')

	// iterate over array of fxTrades ids
	idList.forEach(function (id) {
		// read the FXTrade
		var fXTrade = new FXTradeService(this.http).getFXTrade(id);
		// add the FXTrade if not already assigned
		if ( this.exchangeRate.fxTrades.indexOf(fXTrade) == -1 )
		this.exchangeRate.fxTrades.push(fXTrade);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more fxTradesIds as a FxTrades
	// from a ExchangeRate
	// returns a Promise
	// delegates via URI
	//********************************************************************
	removeFxTrades( exchangeRateId, fxTradesIds ): Observable<any> {

		// get the ExchangeRate
		this.loadHelper( exchangeRateId );


	// split on a comma with no spaces
	var idList 					= fxTradesIds.split(',');
	var fxTrades 	= this.exchangeRate.fxTrades;

	if ( fxTrades != null && fxTradesIds != null ) {

		// iterate over array of fxTrades ids
		fxTrades.forEach(function (obj) {
			if ( fxTradesIds.indexOf(obj._id) > -1 ) {
				// remove the FXTrade
				this.exchangeRate.fxTrades.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

	
	//********************************************************************
	// saveHelper - internal helper to save a ExchangeRate
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/ExchangeRate/update/' + this.exchangeRate;

	return  this.http.post(uri_, this.exchangeRate );
}

	//********************************************************************
	// loadHelper - internal helper to load a ExchangeRate
	//********************************************************************	
	loadHelper( id ) {
		this.getExchangeRate(id)
			.subscribe((res : ExchangeRate) => {
				this.exchangeRate = res;
			});
	}
}
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
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
	// delegates via URI to an ORM handler
	//********************************************************************
	addExchangeRate(baseCurrency, counterCurrency, rate, asOf, source, Bank, FxTrades) : Observable<any> {
		const uri = this.apiUrl + '/ExchangeRate/add';
		const obj = {
			      		baseCurrency: baseCurrency,
      		counterCurrency: counterCurrency,
      		rate: rate,
      		asOf: asOf,
      		source: source,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
			FxTrades: FxTrades != null && FxTrades.length > 0 ? FxTrades : null
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all ExchangeRate
	// returns the results untouched as JSON representation of an
	// array of ExchangeRate models
	// delegates via URI to an ORM handler
	//********************************************************************
	getExchangeRates() ): Observable<ExchangeRate[]> {
		const uri = this.apiUrl + '/ExchangeRate';

		return this
			.http.get<ExchangeRate[]>(uri);
	}

	//********************************************************************
	// edit a ExchangeRate
	// returns the results untouched as a JSON representation of a
	// ExchangeRate model
	// delegates via URI to an ORM handler
	//********************************************************************
	editExchangeRate(id) : Observable<ExchangeRate> {
		const uri = this.apiUrl + '/ExchangeRate/edit/' + id;

		return this.http.get(Observable<ExchangeRate>)(uri);
	}

	//********************************************************************
	// update a ExchangeRate
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
			updateExchangeRate(baseCurrency, counterCurrency, rate, asOf, source, Bank, FxTrades, id)  :  Observable<any>  {
				const uri = this.apiUrl + '/ExchangeRate/update/' + id;
		const obj = {
			      		baseCurrency: baseCurrency,
      		counterCurrency: counterCurrency,
      		rate: rate,
      		asOf: asOf,
      		source: source,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
			FxTrades: FxTrades != null && FxTrades.length > 0 ? FxTrades : null
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a ExchangeRate
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteExchangeRate(id)  : Observable<any> {
		const uri = this.apiUrl + '/ExchangeRate/delete/' + id;

		return this.http.get(uri);
	}

			//********************************************************************
	// assigns a Bank on a ExchangeRate
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBank( exchangeRateId, _bankId ): Promise<any> {

		// get the ExchangeRate from storage
		this.loadHelper( exchangeRateId );

	// get the Bank from storage
	var tmp 	= new BankService(this.http).editBank(_bankId);

	// assign the Bank
	this.exchangeRate.bank = tmp;

	// save the ExchangeRate
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Bank on a ExchangeRate
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignBank( exchangeRateId ): Promise<any> {

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
	// delegates via URI to an ORM handler
	//********************************************************************
	addFxTrades( exchangeRateId, fxTradesIds ): Promise<any> {

		// get the ExchangeRate
		this.loadHelper( exchangeRateId );

	// split on a comma with no spaces
	var idList = fxTradesIds.split(',')

	// iterate over array of fxTrades ids
	idList.forEach(function (id) {
		// read the FXTrade
		var fXTrade = new FXTradeService(this.http).editFXTrade(id);
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
	// delegates via URI to an ORM handler
	//********************************************************************
	removeFxTrades( exchangeRateId, fxTradesIds ): Promise<any> {

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
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/ExchangeRate/update/' + this.exchangeRate;

	return  this.http.post(uri, this.exchangeRate );
}

	//********************************************************************
	// loadHelper - internal helper to load a ExchangeRate
	//********************************************************************	
	loadHelper( id ) {
		this.editExchangeRate(id)
			.subscribe(res : ExchangeRate => {
				this.exchangeRate = res;
			});
	}
}
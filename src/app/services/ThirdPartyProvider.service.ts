import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {ThirdPartyProvider} from '../models/ThirdPartyProvider';
import {BankService} from '../services/Bank.service';
import {ConsentService} from '../services/Consent.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class ThirdPartyProviderService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	thirdPartyProvider : ThirdPartyProvider;

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
	// add a ThirdPartyProvider
	// returns the results untouched as a JSON representation
	// delegates via URI
	//********************************************************************
	addThirdPartyProvider(name, registrationId, website, Bank, Consents) : Observable<any> {
		const uri_ = this.apiUrl + '/ThirdPartyProvider/create';
		const obj = {
			      		name: name,
      		registrationId: registrationId,
      		website: website,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
			Consents: Consents != null && Consents.length > 0 ? Consents : null
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a ThirdPartyProvider
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateThirdPartyProvider(name, registrationId, website, Bank, Consents, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/ThirdPartyProvider/update/' + id;
		const obj = {
				      		name: name,
      		registrationId: registrationId,
      		website: website,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
			Consents: Consents != null && Consents.length > 0 ? Consents : null
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a ThirdPartyProvider
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteThirdPartyProvider(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/ThirdPartyProvider/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a ThirdPartyProvider
	// returns the results untouched as an Observable ThirdPartyProvider
	// ThirdPartyProvider model
	// delegates via URI
	//********************************************************************
	getThirdPartyProvider(id) : Observable<ThirdPartyProvider> {
		const uri_ = this.apiUrl + '/ThirdPartyProvider/load/' + id;

		return this.http.get<ThirdPartyProvider>(uri_);
	}
	
	//********************************************************************
	// gets all ThirdPartyProvider
	// returns the results untouched as JSON representation of an
	// Observable array of ThirdPartyProvider models
	// delegates via URI
	//********************************************************************
	getThirdPartyProviders() : Observable<ThirdPartyProvider[]> {
		const uri_ = this.apiUrl + '/ThirdPartyProvider/';

		return this
			.http.get<ThirdPartyProvider[]>(uri_);
	}
	
			//********************************************************************
	// assigns a Bank on a ThirdPartyProvider
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignBank( thirdPartyProviderId, _bankId ): Observable<any> {

		// get the ThirdPartyProvider from storage
		this.loadHelper( thirdPartyProviderId );

	// get the Bank from storage
	var tmp 	= new BankService(this.http).getBank(_bankId);

	// assign the Bank
	this.thirdPartyProvider.bank = tmp;

	// save the ThirdPartyProvider
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Bank on a ThirdPartyProvider
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignBank( thirdPartyProviderId ): Observable<any> {

		// get the ThirdPartyProvider from storage
		this.loadHelper( thirdPartyProviderId );

	// assign Bank to null
	this.thirdPartyProvider.bank = null;

	// save the ThirdPartyProvider
	return this.saveHelper();
}

	
		//********************************************************************
	// adds one or more consentsIds as a Consents
	// to a ThirdPartyProvider
	// returns a Promise
	// delegates via URI
	//********************************************************************
	addConsents( thirdPartyProviderId, consentsIds ): Observable<any> {

		// get the ThirdPartyProvider
		this.loadHelper( thirdPartyProviderId );

	// split on a comma with no spaces
	var idList = consentsIds.split(',')

	// iterate over array of consents ids
	idList.forEach(function (id) {
		// read the Consent
		var consent = new ConsentService(this.http).getConsent(id);
		// add the Consent if not already assigned
		if ( this.thirdPartyProvider.consents.indexOf(consent) == -1 )
		this.thirdPartyProvider.consents.push(consent);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more consentsIds as a Consents
	// from a ThirdPartyProvider
	// returns a Promise
	// delegates via URI
	//********************************************************************
	removeConsents( thirdPartyProviderId, consentsIds ): Observable<any> {

		// get the ThirdPartyProvider
		this.loadHelper( thirdPartyProviderId );


	// split on a comma with no spaces
	var idList 					= consentsIds.split(',');
	var consents 	= this.thirdPartyProvider.consents;

	if ( consents != null && consentsIds != null ) {

		// iterate over array of consents ids
		consents.forEach(function (obj) {
			if ( consentsIds.indexOf(obj._id) > -1 ) {
				// remove the Consent
				this.thirdPartyProvider.consents.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

	
	//********************************************************************
	// saveHelper - internal helper to save a ThirdPartyProvider
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/ThirdPartyProvider/update/' + this.thirdPartyProvider;

	return  this.http.post(uri_, this.thirdPartyProvider );
}

	//********************************************************************
	// loadHelper - internal helper to load a ThirdPartyProvider
	//********************************************************************	
	loadHelper( id ) {
		this.getThirdPartyProvider(id)
			.subscribe((res : ThirdPartyProvider) => {
				this.thirdPartyProvider = res;
			});
	}
}
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
	// delegates via URI to an ORM handler
	//********************************************************************
	addThirdPartyProvider(name, registrationId, website, Bank, Consents) : Observable<any> {
		const uri = this.apiUrl + '/ThirdPartyProvider/add';
		const obj = {
			      		name: name,
      		registrationId: registrationId,
      		website: website,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
			Consents: Consents != null && Consents.length > 0 ? Consents : null
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all ThirdPartyProvider
	// returns the results untouched as JSON representation of an
	// array of ThirdPartyProvider models
	// delegates via URI to an ORM handler
	//********************************************************************
	getThirdPartyProviders() : Observable<ThirdPartyProvider[]> {
		const uri = this.apiUrl + '/ThirdPartyProvider';

		return this
			.http.get<ThirdPartyProvider[]>(uri);
	}

	//********************************************************************
	// edit a ThirdPartyProvider
	// returns the results untouched as a JSON representation of a
	// ThirdPartyProvider model
	// delegates via URI to an ORM handler
	//********************************************************************
	editThirdPartyProvider(id) : Observable<ThirdPartyProvider> {
		const uri = this.apiUrl + '/ThirdPartyProvider/edit/' + id;

		return this.http.get<ThirdPartyProvider>(uri);
	}

	//********************************************************************
	// update a ThirdPartyProvider
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
		updateThirdPartyProvider(name, registrationId, website, Bank, Consents, id)  :  Observable<any>  {
				const uri = this.apiUrl + '/ThirdPartyProvider/update/' + id;
			const obj = {
				      		name: name,
      		registrationId: registrationId,
      		website: website,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
			Consents: Consents != null && Consents.length > 0 ? Consents : null
			};
		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a ThirdPartyProvider
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteThirdPartyProvider(id)  : Observable<any> {
		const uri = this.apiUrl + '/ThirdPartyProvider/delete/' + id;

		return this.http.get(uri);
	}

			//********************************************************************
	// assigns a Bank on a ThirdPartyProvider
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBank( thirdPartyProviderId, _bankId ): Promise<any> {

		// get the ThirdPartyProvider from storage
		this.loadHelper( thirdPartyProviderId );

	// get the Bank from storage
	var tmp 	= new BankService(this.http).editBank(_bankId);

	// assign the Bank
	this.thirdPartyProvider.bank = tmp;

	// save the ThirdPartyProvider
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Bank on a ThirdPartyProvider
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignBank( thirdPartyProviderId ): Promise<any> {

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
	// delegates via URI to an ORM handler
	//********************************************************************
	addConsents( thirdPartyProviderId, consentsIds ): Promise<any> {

		// get the ThirdPartyProvider
		this.loadHelper( thirdPartyProviderId );

	// split on a comma with no spaces
	var idList = consentsIds.split(',')

	// iterate over array of consents ids
	idList.forEach(function (id) {
		// read the Consent
		var consent = new ConsentService(this.http).editConsent(id);
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
	// delegates via URI to an ORM handler
	//********************************************************************
	removeConsents( thirdPartyProviderId, consentsIds ): Promise<any> {

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
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/ThirdPartyProvider/update/' + this.thirdPartyProvider;

	return  this.http.post(uri, this.thirdPartyProvider );
}

	//********************************************************************
	// loadHelper - internal helper to load a ThirdPartyProvider
	//********************************************************************	
	loadHelper( id ) {
		this.editThirdPartyProvider(id)
			.subscribe((res : ThirdPartyProvider) => {
				this.thirdPartyProvider = res;
			});
	}
}
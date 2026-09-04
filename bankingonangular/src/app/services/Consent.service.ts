import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Consent} from '../models/Consent';
import {CustomerService} from '../services/Customer.service';
import {BankService} from '../services/Bank.service';
import {AccountService} from '../services/Account.service';
import {ThirdPartyProviderService} from '../services/ThirdPartyProvider.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
  })
    
export class ConsentService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	consent : any;
	
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
	// add a Consent 
	// returns the results untouched as a JSON representation 
	// delegates via URI to an ORM handler
	//********************************************************************
  	addConsent(grantedOn, expiresOn, Customer, Bank, AuthorizedAccounts, ThirdPartyProvider, ConsentType, Status) : Promise<any> {
    	const uri = this.ormUrl + '/Consent/add';
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// gets all Consent 
	// returns the results untouched as JSON representation of an
	// array of Consent models
	// delegates via URI to an ORM handler
	//********************************************************************
	getConsents() {
    	const uri = this.ormUrl + '/Consent';
    	
    	return this
            	.http.get(uri).map(res => {
              						return res;
            					});
  	}

	//********************************************************************
	// edit a Consent 
	// returns the results untouched as a JSON representation of a
	// Consent model
	// delegates via URI to an ORM handler
	//********************************************************************
  	editConsent(id) {
    	const uri = this.ormUrl + '/Consent/edit/' + id;
    	
    	return this.http.get(uri).map(res => {
              							return res;
            						});
  	}

	//********************************************************************
	// update a Consent 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	updateConsent(grantedOn, expiresOn, Customer, Bank, AuthorizedAccounts, ThirdPartyProvider, ConsentType, Status, id)  : Promise<any>  {
    	const uri = this.ormUrl + '/Consent/update/' + id;
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// delete a Consent 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteConsent(id)  : Promise<any> {
    	const uri = this.ormUrl + '/Consent/delete/' + id;

        return this.http.get(uri).toPromise();
  }
  
    		//********************************************************************
	// assigns a Customer on a Consent
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignCustomer( consentId, _customerId ): Promise<any> {

		// get the Consent from storage
		this.loadHelper( consentId );
		
		// get the Customer from storage
		var tmp 	= new CustomerService(this.http).editCustomer(_customerId);
		
		// assign the Customer		
		this.consent.customer = tmp;
      		
		// save the Consent
		return this.saveHelper();		
	}

	//********************************************************************
	// unassigns a Customer on a Consent
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	unassignCustomer( consentId ): Promise<any> {

		// get the Consent from storage
        this.loadHelper( consentId );
		
		// assign Customer to null		
		this.consent.customer = null;
      		
		// save the Consent
		return this.saveHelper();
	}
	
	//********************************************************************
	// assigns a Bank on a Consent
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBank( consentId, _bankId ): Promise<any> {

		// get the Consent from storage
		this.loadHelper( consentId );
		
		// get the Bank from storage
		var tmp 	= new BankService(this.http).editBank(_bankId);
		
		// assign the Bank		
		this.consent.bank = tmp;
      		
		// save the Consent
		return this.saveHelper();		
	}

	//********************************************************************
	// unassigns a Bank on a Consent
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	unassignBank( consentId ): Promise<any> {

		// get the Consent from storage
        this.loadHelper( consentId );
		
		// assign Bank to null		
		this.consent.bank = null;
      		
		// save the Consent
		return this.saveHelper();
	}
	
	//********************************************************************
	// assigns a ThirdPartyProvider on a Consent
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignThirdPartyProvider( consentId, _thirdPartyProviderId ): Promise<any> {

		// get the Consent from storage
		this.loadHelper( consentId );
		
		// get the ThirdPartyProvider from storage
		var tmp 	= new ThirdPartyProviderService(this.http).editThirdPartyProvider(_thirdPartyProviderId);
		
		// assign the ThirdPartyProvider		
		this.consent.thirdPartyProvider = tmp;
      		
		// save the Consent
		return this.saveHelper();		
	}

	//********************************************************************
	// unassigns a ThirdPartyProvider on a Consent
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	unassignThirdPartyProvider( consentId ): Promise<any> {

		// get the Consent from storage
        this.loadHelper( consentId );
		
		// assign ThirdPartyProvider to null		
		this.consent.thirdPartyProvider = null;
      		
		// save the Consent
		return this.saveHelper();
	}
	

	//********************************************************************
	// adds one or more authorizedAccountsIds as a AuthorizedAccounts 
	// to a Consent
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	addAuthorizedAccounts( consentId, authorizedAccountsIds ): Promise<any> {

		// get the Consent
		this.loadHelper( consentId );
				
		// split on a comma with no spaces
		var idList = authorizedAccountsIds.split(',')

		// iterate over array of authorizedAccounts ids
		idList.forEach(function (id) {
			// read the Account		
			var account = new AccountService(this.http).editAccount(id);	
			// add the Account if not already assigned
			if ( this.consent.authorizedAccounts.indexOf(account) == -1 )
				this.consent.authorizedAccounts.push(account);
		});
				
		// save it		
		return this.saveHelper();
	}			
	
	//********************************************************************
	// removes one or more authorizedAccountsIds as a AuthorizedAccounts 
	// from a Consent
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************						
	removeAuthorizedAccounts( consentId, authorizedAccountsIds ): Promise<any> {
		
		// get the Consent
		this.loadHelper( consentId );

				
		// split on a comma with no spaces
		var idList 					= authorizedAccountsIds.split(',');
		var authorizedAccounts 	= this.consent.authorizedAccounts;
		
		if ( authorizedAccounts != null && authorizedAccountsIds != null ) {
		
			// iterate over array of authorizedAccounts ids
			authorizedAccounts.forEach(function (obj) {				
				if ( authorizedAccountsIds.indexOf(obj._id) > -1 ) {
					 // remove the Account
					this.consent.authorizedAccounts.pop(obj);
				}
			});
					
		    // save it		
			return this.saveHelper();
		}
	}
			

	//********************************************************************
	// saveHelper - internal helper to save a Consent
	//********************************************************************
	saveHelper() : Promise<any> {
		
		const uri = this.ormUrl + '/Consent/update/' + this.consent._id;		
		
    	return this
      			.http
      			.post(uri, this.consent)
				.toPromise();			
	}

	//********************************************************************
	// loadHelper - internal helper to load a Consent
	//********************************************************************	
	loadHelper( id ) {
		this.editConsent(id)
        		.subscribe(res => {
        			this.consent = res;
      			});
	}
}
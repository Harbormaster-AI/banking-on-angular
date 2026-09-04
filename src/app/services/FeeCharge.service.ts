import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {FeeCharge} from '../models/FeeCharge';
import {AccountService} from '../services/Account.service';
import {LoanAccountService} from '../services/LoanAccount.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
  })
    
export class FeeChargeService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	feeCharge : any;
	
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
	// add a FeeCharge 
	// returns the results untouched as a JSON representation 
	// delegates via URI to an ORM handler
	//********************************************************************
  	addFeeCharge(feeCode, amount, appliedOn, Account, LoanAccount, FeeType) : Promise<any> {
    	const uri = this.ormUrl + '/FeeCharge/add';
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// gets all FeeCharge 
	// returns the results untouched as JSON representation of an
	// array of FeeCharge models
	// delegates via URI to an ORM handler
	//********************************************************************
	getFeeCharges() {
    	const uri = this.ormUrl + '/FeeCharge';
    	
    	return this
            	.http.get(uri).map(res => {
              						return res;
            					});
  	}

	//********************************************************************
	// edit a FeeCharge 
	// returns the results untouched as a JSON representation of a
	// FeeCharge model
	// delegates via URI to an ORM handler
	//********************************************************************
  	editFeeCharge(id) {
    	const uri = this.ormUrl + '/FeeCharge/edit/' + id;
    	
    	return this.http.get(uri).map(res => {
              							return res;
            						});
  	}

	//********************************************************************
	// update a FeeCharge 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	updateFeeCharge(feeCode, amount, appliedOn, Account, LoanAccount, FeeType, id)  : Promise<any>  {
    	const uri = this.ormUrl + '/FeeCharge/update/' + id;
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// delete a FeeCharge 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteFeeCharge(id)  : Promise<any> {
    	const uri = this.ormUrl + '/FeeCharge/delete/' + id;

        return this.http.get(uri).toPromise();
  }
  
    		//********************************************************************
	// assigns a Account on a FeeCharge
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignAccount( feeChargeId, _accountId ): Promise<any> {

		// get the FeeCharge from storage
		this.loadHelper( feeChargeId );
		
		// get the Account from storage
		var tmp 	= new AccountService(this.http).editAccount(_accountId);
		
		// assign the Account		
		this.feeCharge.account = tmp;
      		
		// save the FeeCharge
		return this.saveHelper();		
	}

	//********************************************************************
	// unassigns a Account on a FeeCharge
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	unassignAccount( feeChargeId ): Promise<any> {

		// get the FeeCharge from storage
        this.loadHelper( feeChargeId );
		
		// assign Account to null		
		this.feeCharge.account = null;
      		
		// save the FeeCharge
		return this.saveHelper();
	}
	
	//********************************************************************
	// assigns a LoanAccount on a FeeCharge
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignLoanAccount( feeChargeId, _loanAccountId ): Promise<any> {

		// get the FeeCharge from storage
		this.loadHelper( feeChargeId );
		
		// get the LoanAccount from storage
		var tmp 	= new LoanAccountService(this.http).editLoanAccount(_loanAccountId);
		
		// assign the LoanAccount		
		this.feeCharge.loanAccount = tmp;
      		
		// save the FeeCharge
		return this.saveHelper();		
	}

	//********************************************************************
	// unassigns a LoanAccount on a FeeCharge
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	unassignLoanAccount( feeChargeId ): Promise<any> {

		// get the FeeCharge from storage
        this.loadHelper( feeChargeId );
		
		// assign LoanAccount to null		
		this.feeCharge.loanAccount = null;
      		
		// save the FeeCharge
		return this.saveHelper();
	}
	


	//********************************************************************
	// saveHelper - internal helper to save a FeeCharge
	//********************************************************************
	saveHelper() : Promise<any> {
		
		const uri = this.ormUrl + '/FeeCharge/update/' + this.feeCharge._id;		
		
    	return this
      			.http
      			.post(uri, this.feeCharge)
				.toPromise();			
	}

	//********************************************************************
	// loadHelper - internal helper to load a FeeCharge
	//********************************************************************	
	loadHelper( id ) {
		this.editFeeCharge(id)
        		.subscribe(res => {
        			this.feeCharge = res;
      			});
	}
}
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Collateral} from '../models/Collateral';
import {LoanAccountService} from '../services/LoanAccount.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
  })
    
export class CollateralService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	collateral : any;
	
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
	// add a Collateral 
	// returns the results untouched as a JSON representation 
	// delegates via URI to an ORM handler
	//********************************************************************
  	addCollateral(appraisedValue, description, location, LoanAccount, CollateralType) : Promise<any> {
    	const uri = this.ormUrl + '/Collateral/add';
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// gets all Collateral 
	// returns the results untouched as JSON representation of an
	// array of Collateral models
	// delegates via URI to an ORM handler
	//********************************************************************
	getCollaterals() {
    	const uri = this.ormUrl + '/Collateral';
    	
    	return this
            	.http.get(uri).map(res => {
              						return res;
            					});
  	}

	//********************************************************************
	// edit a Collateral 
	// returns the results untouched as a JSON representation of a
	// Collateral model
	// delegates via URI to an ORM handler
	//********************************************************************
  	editCollateral(id) {
    	const uri = this.ormUrl + '/Collateral/edit/' + id;
    	
    	return this.http.get(uri).map(res => {
              							return res;
            						});
  	}

	//********************************************************************
	// update a Collateral 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	updateCollateral(appraisedValue, description, location, LoanAccount, CollateralType, id)  : Promise<any>  {
    	const uri = this.ormUrl + '/Collateral/update/' + id;
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// delete a Collateral 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteCollateral(id)  : Promise<any> {
    	const uri = this.ormUrl + '/Collateral/delete/' + id;

        return this.http.get(uri).toPromise();
  }
  
    		//********************************************************************
	// assigns a LoanAccount on a Collateral
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignLoanAccount( collateralId, _loanAccountId ): Promise<any> {

		// get the Collateral from storage
		this.loadHelper( collateralId );
		
		// get the LoanAccount from storage
		var tmp 	= new LoanAccountService(this.http).editLoanAccount(_loanAccountId);
		
		// assign the LoanAccount		
		this.collateral.loanAccount = tmp;
      		
		// save the Collateral
		return this.saveHelper();		
	}

	//********************************************************************
	// unassigns a LoanAccount on a Collateral
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	unassignLoanAccount( collateralId ): Promise<any> {

		// get the Collateral from storage
        this.loadHelper( collateralId );
		
		// assign LoanAccount to null		
		this.collateral.loanAccount = null;
      		
		// save the Collateral
		return this.saveHelper();
	}
	


	//********************************************************************
	// saveHelper - internal helper to save a Collateral
	//********************************************************************
	saveHelper() : Promise<any> {
		
		const uri = this.ormUrl + '/Collateral/update/' + this.collateral._id;		
		
    	return this
      			.http
      			.post(uri, this.collateral)
				.toPromise();			
	}

	//********************************************************************
	// loadHelper - internal helper to load a Collateral
	//********************************************************************	
	loadHelper( id ) {
		this.editCollateral(id)
        		.subscribe(res => {
        			this.collateral = res;
      			});
	}
}
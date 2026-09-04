import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {ScreeningResult} from '../models/ScreeningResult';
import {KycProfileService} from '../services/KycProfile.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
  })
    
export class ScreeningResultService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	screeningResult : any;
	
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
	// add a ScreeningResult 
	// returns the results untouched as a JSON representation 
	// delegates via URI to an ORM handler
	//********************************************************************
  	addScreeningResult(screeningDate, provider, KycProfile, Outcome) : Promise<any> {
    	const uri = this.ormUrl + '/ScreeningResult/add';
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// gets all ScreeningResult 
	// returns the results untouched as JSON representation of an
	// array of ScreeningResult models
	// delegates via URI to an ORM handler
	//********************************************************************
	getScreeningResults() {
    	const uri = this.ormUrl + '/ScreeningResult';
    	
    	return this
            	.http.get(uri).map(res => {
              						return res;
            					});
  	}

	//********************************************************************
	// edit a ScreeningResult 
	// returns the results untouched as a JSON representation of a
	// ScreeningResult model
	// delegates via URI to an ORM handler
	//********************************************************************
  	editScreeningResult(id) {
    	const uri = this.ormUrl + '/ScreeningResult/edit/' + id;
    	
    	return this.http.get(uri).map(res => {
              							return res;
            						});
  	}

	//********************************************************************
	// update a ScreeningResult 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	updateScreeningResult(screeningDate, provider, KycProfile, Outcome, id)  : Promise<any>  {
    	const uri = this.ormUrl + '/ScreeningResult/update/' + id;
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// delete a ScreeningResult 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteScreeningResult(id)  : Promise<any> {
    	const uri = this.ormUrl + '/ScreeningResult/delete/' + id;

        return this.http.get(uri).toPromise();
  }
  
    		//********************************************************************
	// assigns a KycProfile on a ScreeningResult
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignKycProfile( screeningResultId, _kycProfileId ): Promise<any> {

		// get the ScreeningResult from storage
		this.loadHelper( screeningResultId );
		
		// get the KycProfile from storage
		var tmp 	= new KycProfileService(this.http).editKycProfile(_kycProfileId);
		
		// assign the KycProfile		
		this.screeningResult.kycProfile = tmp;
      		
		// save the ScreeningResult
		return this.saveHelper();		
	}

	//********************************************************************
	// unassigns a KycProfile on a ScreeningResult
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	unassignKycProfile( screeningResultId ): Promise<any> {

		// get the ScreeningResult from storage
        this.loadHelper( screeningResultId );
		
		// assign KycProfile to null		
		this.screeningResult.kycProfile = null;
      		
		// save the ScreeningResult
		return this.saveHelper();
	}
	


	//********************************************************************
	// saveHelper - internal helper to save a ScreeningResult
	//********************************************************************
	saveHelper() : Promise<any> {
		
		const uri = this.ormUrl + '/ScreeningResult/update/' + this.screeningResult._id;		
		
    	return this
      			.http
      			.post(uri, this.screeningResult)
				.toPromise();			
	}

	//********************************************************************
	// loadHelper - internal helper to load a ScreeningResult
	//********************************************************************	
	loadHelper( id ) {
		this.editScreeningResult(id)
        		.subscribe(res => {
        			this.screeningResult = res;
      			});
	}
}
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {RiskAssessment} from '../models/RiskAssessment';
import {KycProfileService} from '../services/KycProfile.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
  })
    
export class RiskAssessmentService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	riskAssessment : any;
	
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
	// add a RiskAssessment 
	// returns the results untouched as a JSON representation 
	// delegates via URI to an ORM handler
	//********************************************************************
  	addRiskAssessment(score, assessedOn, KycProfile, Rating) : Promise<any> {
    	const uri = this.ormUrl + '/RiskAssessment/add';
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// gets all RiskAssessment 
	// returns the results untouched as JSON representation of an
	// array of RiskAssessment models
	// delegates via URI to an ORM handler
	//********************************************************************
	getRiskAssessments() {
    	const uri = this.ormUrl + '/RiskAssessment';
    	
    	return this
            	.http.get(uri).map(res => {
              						return res;
            					});
  	}

	//********************************************************************
	// edit a RiskAssessment 
	// returns the results untouched as a JSON representation of a
	// RiskAssessment model
	// delegates via URI to an ORM handler
	//********************************************************************
  	editRiskAssessment(id) {
    	const uri = this.ormUrl + '/RiskAssessment/edit/' + id;
    	
    	return this.http.get(uri).map(res => {
              							return res;
            						});
  	}

	//********************************************************************
	// update a RiskAssessment 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	updateRiskAssessment(score, assessedOn, KycProfile, Rating, id)  : Promise<any>  {
    	const uri = this.ormUrl + '/RiskAssessment/update/' + id;
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// delete a RiskAssessment 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteRiskAssessment(id)  : Promise<any> {
    	const uri = this.ormUrl + '/RiskAssessment/delete/' + id;

        return this.http.get(uri).toPromise();
  }
  
    		//********************************************************************
	// assigns a KycProfile on a RiskAssessment
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignKycProfile( riskAssessmentId, _kycProfileId ): Promise<any> {

		// get the RiskAssessment from storage
		this.loadHelper( riskAssessmentId );
		
		// get the KycProfile from storage
		var tmp 	= new KycProfileService(this.http).editKycProfile(_kycProfileId);
		
		// assign the KycProfile		
		this.riskAssessment.kycProfile = tmp;
      		
		// save the RiskAssessment
		return this.saveHelper();		
	}

	//********************************************************************
	// unassigns a KycProfile on a RiskAssessment
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	unassignKycProfile( riskAssessmentId ): Promise<any> {

		// get the RiskAssessment from storage
        this.loadHelper( riskAssessmentId );
		
		// assign KycProfile to null		
		this.riskAssessment.kycProfile = null;
      		
		// save the RiskAssessment
		return this.saveHelper();
	}
	


	//********************************************************************
	// saveHelper - internal helper to save a RiskAssessment
	//********************************************************************
	saveHelper() : Promise<any> {
		
		const uri = this.ormUrl + '/RiskAssessment/update/' + this.riskAssessment._id;		
		
    	return this
      			.http
      			.post(uri, this.riskAssessment)
				.toPromise();			
	}

	//********************************************************************
	// loadHelper - internal helper to load a RiskAssessment
	//********************************************************************	
	loadHelper( id ) {
		this.editRiskAssessment(id)
        		.subscribe(res => {
        			this.riskAssessment = res;
      			});
	}
}
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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
	riskAssessment : RiskAssessment;

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
	addRiskAssessment(score, assessedOn, KycProfile, Rating) : Observable<any> {
		const uri = this.apiUrl + '/RiskAssessment/add';
		const obj = {
			      		score: score,
      		assessedOn: assessedOn,
      		KycProfile: KycProfile != null && KycProfile.length > 0 ? KycProfile : null,
			Rating: Rating
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all RiskAssessment
	// returns the results untouched as JSON representation of an
	// array of RiskAssessment models
	// delegates via URI to an ORM handler
	//********************************************************************
	getRiskAssessments() : Observable<RiskAssessment[]> {
		const uri = this.apiUrl + '/RiskAssessment';

		return this
			.http.get<RiskAssessment[]>(uri);
	}

	//********************************************************************
	// edit a RiskAssessment
	// returns the results untouched as a JSON representation of a
	// RiskAssessment model
	// delegates via URI to an ORM handler
	//********************************************************************
	editRiskAssessment(id) : Observable<RiskAssessment> {
		const uri = this.apiUrl + '/RiskAssessment/edit/' + id;

		return this.http.get<RiskAssessment>(uri);
	}

	//********************************************************************
	// update a RiskAssessment
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
		updateRiskAssessment(score, assessedOn, KycProfile, Rating, id)  :  Observable<any>  {
				const uri = this.apiUrl + '/RiskAssessment/update/' + id;
			const obj = {
				      		score: score,
      		assessedOn: assessedOn,
      		KycProfile: KycProfile != null && KycProfile.length > 0 ? KycProfile : null,
			Rating: Rating
			};
		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a RiskAssessment
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteRiskAssessment(id)  : Observable<any> {
		const uri = this.apiUrl + '/RiskAssessment/delete/' + id;

		return this.http.get(uri);
	}

			//********************************************************************
	// assigns a KycProfile on a RiskAssessment
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignKycProfile( riskAssessmentId, _kycProfileId ): Observable<any> {

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
	unassignKycProfile( riskAssessmentId ): Observable<any> {

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
	saveHelper() : Observable<any> {

		const uri = this.apiUrl + '/RiskAssessment/update/' + this.riskAssessment;

	return  this.http.post(uri, this.riskAssessment );
}

	//********************************************************************
	// loadHelper - internal helper to load a RiskAssessment
	//********************************************************************	
	loadHelper( id ) {
		this.editRiskAssessment(id)
			.subscribe((res : RiskAssessment) => {
				this.riskAssessment = res;
			});
	}
}
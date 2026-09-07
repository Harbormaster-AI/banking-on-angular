import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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
	screeningResult : ScreeningResult;

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
	// delegates via URI
	//********************************************************************
	addScreeningResult(screeningDate, provider, KycProfile, Outcome) : Observable<any> {
		const uri_ = this.apiUrl + '/ScreeningResult/create';
		const obj = {
			      		screeningDate: screeningDate,
      		provider: provider,
      		KycProfile: KycProfile != null && KycProfile.length > 0 ? KycProfile : null,
			Outcome: Outcome
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a ScreeningResult
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateScreeningResult(screeningDate, provider, KycProfile, Outcome, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/ScreeningResult/update/' + id;
		const obj = {
				      		screeningDate: screeningDate,
      		provider: provider,
      		KycProfile: KycProfile != null && KycProfile.length > 0 ? KycProfile : null,
			Outcome: Outcome
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a ScreeningResult
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteScreeningResult(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/ScreeningResult/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a ScreeningResult
	// returns the results untouched as an Observable ScreeningResult
	// ScreeningResult model
	// delegates via URI
	//********************************************************************
	getScreeningResult(id) : Observable<ScreeningResult> {
		const uri_ = this.apiUrl + '/ScreeningResult/load/' + id;

		return this.http.get<ScreeningResult>(uri_);
	}
	
	//********************************************************************
	// gets all ScreeningResult
	// returns the results untouched as JSON representation of an
	// Observable array of ScreeningResult models
	// delegates via URI
	//********************************************************************
	getScreeningResults() : Observable<ScreeningResult[]> {
		const uri_ = this.apiUrl + '/ScreeningResult/';

		return this
			.http.get<ScreeningResult[]>(uri_);
	}
	
			//********************************************************************
	// assigns a KycProfile on a ScreeningResult
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignKycProfile( screeningResultId, _kycProfileId ): Observable<any> {

		// get the ScreeningResult from storage
		this.loadHelper( screeningResultId );

	// get the KycProfile from storage
	var tmp 	= new KycProfileService(this.http).getKycProfile(_kycProfileId);

	// assign the KycProfile
	this.screeningResult.kycProfile = tmp;

	// save the ScreeningResult
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a KycProfile on a ScreeningResult
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignKycProfile( screeningResultId ): Observable<any> {

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
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/ScreeningResult/update/' + this.screeningResult;

	return  this.http.post(uri_, this.screeningResult );
}

	//********************************************************************
	// loadHelper - internal helper to load a ScreeningResult
	//********************************************************************	
	loadHelper( id ) {
		this.getScreeningResult(id)
			.subscribe((res : ScreeningResult) => {
				this.screeningResult = res;
			});
	}
}
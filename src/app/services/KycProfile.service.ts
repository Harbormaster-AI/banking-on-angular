import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {KycProfile} from '../models/KycProfile';
import {CustomerService} from '../services/Customer.service';
import {IdentityDocumentService} from '../services/IdentityDocument.service';
import {RiskAssessmentService} from '../services/RiskAssessment.service';
import {ScreeningResultService} from '../services/ScreeningResult.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class KycProfileService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	kycProfile : KycProfile;

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
	// add a KycProfile
	// returns the results untouched as a JSON representation
	// delegates via URI
	//********************************************************************
	addKycProfile(profileId, lastReviewedOn, Customer, IdentityDocuments, RiskAssessments, Screenings, Status) : Observable<any> {
		const uri_ = this.apiUrl + '/KycProfile/create';
		const obj = {
			      		profileId: profileId,
      		lastReviewedOn: lastReviewedOn,
      		Customer: Customer != null && Customer.length > 0 ? Customer : null,
      		IdentityDocuments: IdentityDocuments != null && IdentityDocuments.length > 0 ? IdentityDocuments : null,
      		RiskAssessments: RiskAssessments != null && RiskAssessments.length > 0 ? RiskAssessments : null,
      		Screenings: Screenings != null && Screenings.length > 0 ? Screenings : null,
			Status: Status
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a KycProfile
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateKycProfile(profileId, lastReviewedOn, Customer, IdentityDocuments, RiskAssessments, Screenings, Status, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/KycProfile/update/' + id;
		const obj = {
				      		profileId: profileId,
      		lastReviewedOn: lastReviewedOn,
      		Customer: Customer != null && Customer.length > 0 ? Customer : null,
      		IdentityDocuments: IdentityDocuments != null && IdentityDocuments.length > 0 ? IdentityDocuments : null,
      		RiskAssessments: RiskAssessments != null && RiskAssessments.length > 0 ? RiskAssessments : null,
      		Screenings: Screenings != null && Screenings.length > 0 ? Screenings : null,
			Status: Status
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a KycProfile
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteKycProfile(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/KycProfile/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a KycProfile
	// returns the results untouched as an Observable KycProfile
	// KycProfile model
	// delegates via URI
	//********************************************************************
	getKycProfile(id) : Observable<KycProfile> {
		const uri_ = this.apiUrl + '/KycProfile/load/' + id;

		return this.http.get<KycProfile>(uri_);
	}
	
	//********************************************************************
	// gets all KycProfile
	// returns the results untouched as JSON representation of an
	// Observable array of KycProfile models
	// delegates via URI
	//********************************************************************
	getKycProfiles() : Observable<KycProfile[]> {
		const uri_ = this.apiUrl + '/KycProfile/';

		return this
			.http.get<KycProfile[]>(uri_);
	}
	
			//********************************************************************
	// assigns a Customer on a KycProfile
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignCustomer( kycProfileId, _customerId ): Observable<any> {

		// get the KycProfile from storage
		this.loadHelper( kycProfileId );

	// get the Customer from storage
	var tmp 	= new CustomerService(this.http).getCustomer(_customerId);

	// assign the Customer
	this.kycProfile.customer = tmp;

	// save the KycProfile
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Customer on a KycProfile
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignCustomer( kycProfileId ): Observable<any> {

		// get the KycProfile from storage
		this.loadHelper( kycProfileId );

	// assign Customer to null
	this.kycProfile.customer = null;

	// save the KycProfile
	return this.saveHelper();
}

	
		//********************************************************************
	// adds one or more identityDocumentsIds as a IdentityDocuments
	// to a KycProfile
	// returns a Promise
	// delegates via URI
	//********************************************************************
	addIdentityDocuments( kycProfileId, identityDocumentsIds ): Observable<any> {

		// get the KycProfile
		this.loadHelper( kycProfileId );

	// split on a comma with no spaces
	var idList = identityDocumentsIds.split(',')

	// iterate over array of identityDocuments ids
	idList.forEach(function (id) {
		// read the IdentityDocument
		var identityDocument = new IdentityDocumentService(this.http).getIdentityDocument(id);
		// add the IdentityDocument if not already assigned
		if ( this.kycProfile.identityDocuments.indexOf(identityDocument) == -1 )
		this.kycProfile.identityDocuments.push(identityDocument);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more identityDocumentsIds as a IdentityDocuments
	// from a KycProfile
	// returns a Promise
	// delegates via URI
	//********************************************************************
	removeIdentityDocuments( kycProfileId, identityDocumentsIds ): Observable<any> {

		// get the KycProfile
		this.loadHelper( kycProfileId );


	// split on a comma with no spaces
	var idList 					= identityDocumentsIds.split(',');
	var identityDocuments 	= this.kycProfile.identityDocuments;

	if ( identityDocuments != null && identityDocumentsIds != null ) {

		// iterate over array of identityDocuments ids
		identityDocuments.forEach(function (obj) {
			if ( identityDocumentsIds.indexOf(obj._id) > -1 ) {
				// remove the IdentityDocument
				this.kycProfile.identityDocuments.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more riskAssessmentsIds as a RiskAssessments
	// to a KycProfile
	// returns a Promise
	// delegates via URI
	//********************************************************************
	addRiskAssessments( kycProfileId, riskAssessmentsIds ): Observable<any> {

		// get the KycProfile
		this.loadHelper( kycProfileId );

	// split on a comma with no spaces
	var idList = riskAssessmentsIds.split(',')

	// iterate over array of riskAssessments ids
	idList.forEach(function (id) {
		// read the RiskAssessment
		var riskAssessment = new RiskAssessmentService(this.http).getRiskAssessment(id);
		// add the RiskAssessment if not already assigned
		if ( this.kycProfile.riskAssessments.indexOf(riskAssessment) == -1 )
		this.kycProfile.riskAssessments.push(riskAssessment);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more riskAssessmentsIds as a RiskAssessments
	// from a KycProfile
	// returns a Promise
	// delegates via URI
	//********************************************************************
	removeRiskAssessments( kycProfileId, riskAssessmentsIds ): Observable<any> {

		// get the KycProfile
		this.loadHelper( kycProfileId );


	// split on a comma with no spaces
	var idList 					= riskAssessmentsIds.split(',');
	var riskAssessments 	= this.kycProfile.riskAssessments;

	if ( riskAssessments != null && riskAssessmentsIds != null ) {

		// iterate over array of riskAssessments ids
		riskAssessments.forEach(function (obj) {
			if ( riskAssessmentsIds.indexOf(obj._id) > -1 ) {
				// remove the RiskAssessment
				this.kycProfile.riskAssessments.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more screeningsIds as a Screenings
	// to a KycProfile
	// returns a Promise
	// delegates via URI
	//********************************************************************
	addScreenings( kycProfileId, screeningsIds ): Observable<any> {

		// get the KycProfile
		this.loadHelper( kycProfileId );

	// split on a comma with no spaces
	var idList = screeningsIds.split(',')

	// iterate over array of screenings ids
	idList.forEach(function (id) {
		// read the ScreeningResult
		var screeningResult = new ScreeningResultService(this.http).getScreeningResult(id);
		// add the ScreeningResult if not already assigned
		if ( this.kycProfile.screenings.indexOf(screeningResult) == -1 )
		this.kycProfile.screenings.push(screeningResult);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more screeningsIds as a Screenings
	// from a KycProfile
	// returns a Promise
	// delegates via URI
	//********************************************************************
	removeScreenings( kycProfileId, screeningsIds ): Observable<any> {

		// get the KycProfile
		this.loadHelper( kycProfileId );


	// split on a comma with no spaces
	var idList 					= screeningsIds.split(',');
	var screenings 	= this.kycProfile.screenings;

	if ( screenings != null && screeningsIds != null ) {

		// iterate over array of screenings ids
		screenings.forEach(function (obj) {
			if ( screeningsIds.indexOf(obj._id) > -1 ) {
				// remove the ScreeningResult
				this.kycProfile.screenings.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

	
	//********************************************************************
	// saveHelper - internal helper to save a KycProfile
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/KycProfile/update/' + this.kycProfile;

	return  this.http.post(uri_, this.kycProfile );
}

	//********************************************************************
	// loadHelper - internal helper to load a KycProfile
	//********************************************************************	
	loadHelper( id ) {
		this.getKycProfile(id)
			.subscribe((res : KycProfile) => {
				this.kycProfile = res;
			});
	}
}
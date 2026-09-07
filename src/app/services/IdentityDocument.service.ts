import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {IdentityDocument} from '../models/IdentityDocument';
import {KycProfileService} from '../services/KycProfile.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class IdentityDocumentService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	identityDocument : IdentityDocument;

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
	// add a IdentityDocument
	// returns the results untouched as a JSON representation
	// delegates via URI
	//********************************************************************
	addIdentityDocument(documentNumber, issuingCountry, expirationDate, KycProfile, DocumentType) : Observable<any> {
		const uri_ = this.apiUrl + '/IdentityDocument/create';
		const obj = {
			      		documentNumber: documentNumber,
      		issuingCountry: issuingCountry,
      		expirationDate: expirationDate,
      		KycProfile: KycProfile != null && KycProfile.length > 0 ? KycProfile : null,
			DocumentType: DocumentType
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a IdentityDocument
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateIdentityDocument(documentNumber, issuingCountry, expirationDate, KycProfile, DocumentType, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/IdentityDocument/update/' + id;
		const obj = {
				      		documentNumber: documentNumber,
      		issuingCountry: issuingCountry,
      		expirationDate: expirationDate,
      		KycProfile: KycProfile != null && KycProfile.length > 0 ? KycProfile : null,
			DocumentType: DocumentType
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a IdentityDocument
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteIdentityDocument(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/IdentityDocument/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a IdentityDocument
	// returns the results untouched as an Observable IdentityDocument
	// IdentityDocument model
	// delegates via URI
	//********************************************************************
	getIdentityDocument(id) : Observable<IdentityDocument> {
		const uri_ = this.apiUrl + '/IdentityDocument/load/' + id;

		return this.http.get<IdentityDocument>(uri_);
	}
	
	//********************************************************************
	// gets all IdentityDocument
	// returns the results untouched as JSON representation of an
	// Observable array of IdentityDocument models
	// delegates via URI
	//********************************************************************
	getIdentityDocuments() : Observable<IdentityDocument[]> {
		const uri_ = this.apiUrl + '/IdentityDocument/';

		return this
			.http.get<IdentityDocument[]>(uri_);
	}
	
			//********************************************************************
	// assigns a KycProfile on a IdentityDocument
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignKycProfile( identityDocumentId, _kycProfileId ): Observable<any> {

		// get the IdentityDocument from storage
		this.loadHelper( identityDocumentId );

	// get the KycProfile from storage
	var tmp 	= new KycProfileService(this.http).getKycProfile(_kycProfileId);

	// assign the KycProfile
	this.identityDocument.kycProfile = tmp;

	// save the IdentityDocument
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a KycProfile on a IdentityDocument
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignKycProfile( identityDocumentId ): Observable<any> {

		// get the IdentityDocument from storage
		this.loadHelper( identityDocumentId );

	// assign KycProfile to null
	this.identityDocument.kycProfile = null;

	// save the IdentityDocument
	return this.saveHelper();
}

	
	
	//********************************************************************
	// saveHelper - internal helper to save a IdentityDocument
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/IdentityDocument/update/' + this.identityDocument;

	return  this.http.post(uri_, this.identityDocument );
}

	//********************************************************************
	// loadHelper - internal helper to load a IdentityDocument
	//********************************************************************	
	loadHelper( id ) {
		this.getIdentityDocument(id)
			.subscribe((res : IdentityDocument) => {
				this.identityDocument = res;
			});
	}
}
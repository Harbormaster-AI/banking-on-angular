import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
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
	// delegates via URI to an ORM handler
	//********************************************************************
	addIdentityDocument(documentNumber, issuingCountry, expirationDate, KycProfile, DocumentType) : Observable<any> {
		const uri = this.apiUrl + '/IdentityDocument/add';
		const obj = {
			      		documentNumber: documentNumber,
      		issuingCountry: issuingCountry,
      		expirationDate: expirationDate,
      		KycProfile: KycProfile != null && KycProfile.length > 0 ? KycProfile : null,
			DocumentType: DocumentType
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all IdentityDocument
	// returns the results untouched as JSON representation of an
	// array of IdentityDocument models
	// delegates via URI to an ORM handler
	//********************************************************************
	getIdentityDocuments() ): Observable<IdentityDocument[]> {
		const uri = this.apiUrl + '/IdentityDocument';

		return this
			.http.get<IdentityDocument[]>(uri);
	}

	//********************************************************************
	// edit a IdentityDocument
	// returns the results untouched as a JSON representation of a
	// IdentityDocument model
	// delegates via URI to an ORM handler
	//********************************************************************
	editIdentityDocument(id) : Observable<IdentityDocument> {
		const uri = this.apiUrl + '/IdentityDocument/edit/' + id;

		return this.http.get(Observable<IdentityDocument>)(uri);
	}

	//********************************************************************
	// update a IdentityDocument
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
			updateIdentityDocument(documentNumber, issuingCountry, expirationDate, KycProfile, DocumentType, id)  :  Observable<any>  {
				const uri = this.apiUrl + '/IdentityDocument/update/' + id;
		const obj = {
			      		documentNumber: documentNumber,
      		issuingCountry: issuingCountry,
      		expirationDate: expirationDate,
      		KycProfile: KycProfile != null && KycProfile.length > 0 ? KycProfile : null,
			DocumentType: DocumentType
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a IdentityDocument
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteIdentityDocument(id)  : Observable<any> {
		const uri = this.apiUrl + '/IdentityDocument/delete/' + id;

		return this.http.get(uri);
	}

			//********************************************************************
	// assigns a KycProfile on a IdentityDocument
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignKycProfile( identityDocumentId, _kycProfileId ): Promise<any> {

		// get the IdentityDocument from storage
		this.loadHelper( identityDocumentId );

	// get the KycProfile from storage
	var tmp 	= new KycProfileService(this.http).editKycProfile(_kycProfileId);

	// assign the KycProfile
	this.identityDocument.kycProfile = tmp;

	// save the IdentityDocument
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a KycProfile on a IdentityDocument
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignKycProfile( identityDocumentId ): Promise<any> {

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
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/IdentityDocument/update/' + this.identityDocument;

	return  this.http.post(uri, this.identityDocument );
}

	//********************************************************************
	// loadHelper - internal helper to load a IdentityDocument
	//********************************************************************	
	loadHelper( id ) {
		this.editIdentityDocument(id)
			.subscribe(res : IdentityDocument => {
				this.identityDocument = res;
			});
	}
}
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {ATM} from '../models/ATM';
import {BranchService} from '../services/Branch.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class ATMService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	aTM : ATM;

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
	// add a ATM
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addATM(terminalId, location, Branch, Status) : Observable<any> {
		const uri = this.apiUrl + '/ATM/add';
		const obj = {
			      		terminalId: terminalId,
      		location: location,
      		Branch: Branch != null && Branch.length > 0 ? Branch : null,
			Status: Status
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all ATM
	// returns the results untouched as JSON representation of an
	// array of ATM models
	// delegates via URI to an ORM handler
	//********************************************************************
	getATMs() : Observable<ATM[]> {
		const uri = this.apiUrl + '/ATM';

		return this
			.http.get<ATM[]>(uri);
	}

	//********************************************************************
	// edit a ATM
	// returns the results untouched as a JSON representation of a
	// ATM model
	// delegates via URI to an ORM handler
	//********************************************************************
	editATM(id) : Observable<ATM> {
		const uri = this.apiUrl + '/ATM/edit/' + id;

		return this.http.get(<ATM>)(uri);
	}

	//********************************************************************
	// update a ATM
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
			updateATM(terminalId, location, Branch, Status, id)  :  Observable<any>  {
					const uri = this.apiUrl + '/ATM/update/' + id;
			const obj = {
				      		terminalId: terminalId,
      		location: location,
      		Branch: Branch != null && Branch.length > 0 ? Branch : null,
			Status: Status
			};
		}
		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a ATM
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteATM(id)  : Observable<any> {
		const uri = this.apiUrl + '/ATM/delete/' + id;

		return this.http.get(uri);
	}

			//********************************************************************
	// assigns a Branch on a ATM
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBranch( aTMId, _branchId ): Promise<any> {

		// get the ATM from storage
		this.loadHelper( aTMId );

	// get the Branch from storage
	var tmp 	= new BranchService(this.http).editBranch(_branchId);

	// assign the Branch
	this.aTM.branch = tmp;

	// save the ATM
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Branch on a ATM
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignBranch( aTMId ): Promise<any> {

		// get the ATM from storage
		this.loadHelper( aTMId );

	// assign Branch to null
	this.aTM.branch = null;

	// save the ATM
	return this.saveHelper();
}

	
	
	//********************************************************************
	// saveHelper - internal helper to save a ATM
	//********************************************************************
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/ATM/update/' + this.aTM;

	return  this.http.post(uri, this.aTM );
}

	//********************************************************************
	// loadHelper - internal helper to load a ATM
	//********************************************************************	
	loadHelper( id ) {
		this.editATM(id)
			.subscribe(res : ATM => {
				this.aTM = res;
			});
	}
}
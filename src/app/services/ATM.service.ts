import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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
	// delegates via URI
	//********************************************************************
	addATM(terminalId, location, Branch, Status) : Observable<any> {
		const uri_ = this.apiUrl + '/ATM/create';
		const obj = {
			      		terminalId: terminalId,
      		location: location,
      		Branch: Branch != null && Branch.length > 0 ? Branch : null,
			Status: Status
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a ATM
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateATM(terminalId, location, Branch, Status, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/ATM/update/' + id;
		const obj = {
				      		terminalId: terminalId,
      		location: location,
      		Branch: Branch != null && Branch.length > 0 ? Branch : null,
			Status: Status
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a ATM
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteATM(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/ATM/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a ATM
	// returns the results untouched as an Observable ATM
	// ATM model
	// delegates via URI
	//********************************************************************
	getATM(id) : Observable<ATM> {
		const uri_ = this.apiUrl + '/ATM/load/' + id;

		return this.http.get<ATM>(uri_);
	}
	
	//********************************************************************
	// gets all ATM
	// returns the results untouched as JSON representation of an
	// Observable array of ATM models
	// delegates via URI
	//********************************************************************
	getATMs() : Observable<ATM[]> {
		const uri_ = this.apiUrl + '/ATM/';

		return this
			.http.get<ATM[]>(uri_);
	}
	
			//********************************************************************
	// assigns a Branch on a ATM
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignBranch( aTMId, _branchId ): Observable<any> {

		// get the ATM from storage
		this.loadHelper( aTMId );

	// get the Branch from storage
	var tmp 	= new BranchService(this.http).getBranch(_branchId);

	// assign the Branch
	this.aTM.branch = tmp;

	// save the ATM
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Branch on a ATM
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignBranch( aTMId ): Observable<any> {

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
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/ATM/update/' + this.aTM;

	return  this.http.post(uri_, this.aTM );
}

	//********************************************************************
	// loadHelper - internal helper to load a ATM
	//********************************************************************	
	loadHelper( id ) {
		this.getATM(id)
			.subscribe((res : ATM) => {
				this.aTM = res;
			});
	}
}
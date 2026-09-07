import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {StandingInstruction} from '../models/StandingInstruction';
import {AccountService} from '../services/Account.service';
import {ExternalAccountService} from '../services/ExternalAccount.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class StandingInstructionService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	standingInstruction : StandingInstruction;

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
	// add a StandingInstruction
	// returns the results untouched as a JSON representation
	// delegates via URI
	//********************************************************************
	addStandingInstruction(instructionId, amount, nextExecutionDate, Account, Beneficiary, Frequency, Status) : Observable<any> {
		const uri_ = this.apiUrl + '/StandingInstruction/create';
		const obj = {
			      		instructionId: instructionId,
      		amount: amount,
      		nextExecutionDate: nextExecutionDate,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		Beneficiary: Beneficiary != null && Beneficiary.length > 0 ? Beneficiary : null,
      		Frequency: Frequency,
			Status: Status
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a StandingInstruction
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateStandingInstruction(instructionId, amount, nextExecutionDate, Account, Beneficiary, Frequency, Status, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/StandingInstruction/update/' + id;
		const obj = {
				      		instructionId: instructionId,
      		amount: amount,
      		nextExecutionDate: nextExecutionDate,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		Beneficiary: Beneficiary != null && Beneficiary.length > 0 ? Beneficiary : null,
      		Frequency: Frequency,
			Status: Status
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a StandingInstruction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteStandingInstruction(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/StandingInstruction/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a StandingInstruction
	// returns the results untouched as an Observable StandingInstruction
	// StandingInstruction model
	// delegates via URI
	//********************************************************************
	getStandingInstruction(id) : Observable<StandingInstruction> {
		const uri_ = this.apiUrl + '/StandingInstruction/load/' + id;

		return this.http.get<StandingInstruction>(uri_);
	}
	
	//********************************************************************
	// gets all StandingInstruction
	// returns the results untouched as JSON representation of an
	// Observable array of StandingInstruction models
	// delegates via URI
	//********************************************************************
	getStandingInstructions() : Observable<StandingInstruction[]> {
		const uri_ = this.apiUrl + '/StandingInstruction/';

		return this
			.http.get<StandingInstruction[]>(uri_);
	}
	
			//********************************************************************
	// assigns a Account on a StandingInstruction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignAccount( standingInstructionId, _accountId ): Observable<any> {

		// get the StandingInstruction from storage
		this.loadHelper( standingInstructionId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).getAccount(_accountId);

	// assign the Account
	this.standingInstruction.account = tmp;

	// save the StandingInstruction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Account on a StandingInstruction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignAccount( standingInstructionId ): Observable<any> {

		// get the StandingInstruction from storage
		this.loadHelper( standingInstructionId );

	// assign Account to null
	this.standingInstruction.account = null;

	// save the StandingInstruction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Beneficiary on a StandingInstruction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignBeneficiary( standingInstructionId, _beneficiaryId ): Observable<any> {

		// get the StandingInstruction from storage
		this.loadHelper( standingInstructionId );

	// get the ExternalAccount from storage
	var tmp 	= new ExternalAccountService(this.http).getExternalAccount(_beneficiaryId);

	// assign the Beneficiary
	this.standingInstruction.beneficiary = tmp;

	// save the StandingInstruction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Beneficiary on a StandingInstruction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignBeneficiary( standingInstructionId ): Observable<any> {

		// get the StandingInstruction from storage
		this.loadHelper( standingInstructionId );

	// assign Beneficiary to null
	this.standingInstruction.beneficiary = null;

	// save the StandingInstruction
	return this.saveHelper();
}

	
	
	//********************************************************************
	// saveHelper - internal helper to save a StandingInstruction
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/StandingInstruction/update/' + this.standingInstruction;

	return  this.http.post(uri_, this.standingInstruction );
}

	//********************************************************************
	// loadHelper - internal helper to load a StandingInstruction
	//********************************************************************	
	loadHelper( id ) {
		this.getStandingInstruction(id)
			.subscribe((res : StandingInstruction) => {
				this.standingInstruction = res;
			});
	}
}
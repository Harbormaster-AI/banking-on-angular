import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
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
	// delegates via URI to an ORM handler
	//********************************************************************
	addStandingInstruction(instructionId, amount, nextExecutionDate, Account, Beneficiary, Frequency, Status) : Observable<any> {
		const uri = this.apiUrl + '/StandingInstruction/add';
		const obj = {
			      		instructionId: instructionId,
      		amount: amount,
      		nextExecutionDate: nextExecutionDate,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		Beneficiary: Beneficiary != null && Beneficiary.length > 0 ? Beneficiary : null,
      		Frequency: Frequency,
			Status: Status
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all StandingInstruction
	// returns the results untouched as JSON representation of an
	// array of StandingInstruction models
	// delegates via URI to an ORM handler
	//********************************************************************
	getStandingInstructions() ): Observable<StandingInstruction[]> {
		const uri = this.apiUrl + '/StandingInstruction';

		return this
			.http.get<StandingInstruction[]>(uri);
	}

	//********************************************************************
	// edit a StandingInstruction
	// returns the results untouched as a JSON representation of a
	// StandingInstruction model
	// delegates via URI to an ORM handler
	//********************************************************************
	editStandingInstruction(id) : Observable<StandingInstruction> {
		const uri = this.apiUrl + '/StandingInstruction/edit/' + id;

		return this.http.get(Observable<StandingInstruction>)(uri);
	}

	//********************************************************************
	// update a StandingInstruction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
			updateStandingInstruction(instructionId, amount, nextExecutionDate, Account, Beneficiary, Frequency, Status, id)  : Promise<any>  {
			const uri = this.apiUrl + '/StandingInstruction/update/' + id;
	const obj = {
		      		instructionId: instructionId,
      		amount: amount,
      		nextExecutionDate: nextExecutionDate,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		Beneficiary: Beneficiary != null && Beneficiary.length > 0 ? Beneficiary : null,
      		Frequency: Frequency,
			Status: Status
};

	return firstValueFrom(this.http.post(uri, obj));
}

	//********************************************************************
	// delete a StandingInstruction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteStandingInstruction(id)  : Observable<any> {
		const uri = this.apiUrl + '/StandingInstruction/delete/' + id;

		return firstValueFrom(this.http.get(uri));
	}

			//********************************************************************
	// assigns a Account on a StandingInstruction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignAccount( standingInstructionId, _accountId ): Promise<any> {

		// get the StandingInstruction from storage
		this.loadHelper( standingInstructionId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).editAccount(_accountId);

	// assign the Account
	this.standingInstruction.account = tmp;

	// save the StandingInstruction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Account on a StandingInstruction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignAccount( standingInstructionId ): Promise<any> {

		// get the StandingInstruction from storage
		this.loadHelper( standingInstructionId );

	// assign Account to null
	this.standingInstruction.account = null;

	// save the StandingInstruction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Beneficiary on a StandingInstruction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBeneficiary( standingInstructionId, _beneficiaryId ): Promise<any> {

		// get the StandingInstruction from storage
		this.loadHelper( standingInstructionId );

	// get the ExternalAccount from storage
	var tmp 	= new ExternalAccountService(this.http).editExternalAccount(_beneficiaryId);

	// assign the Beneficiary
	this.standingInstruction.beneficiary = tmp;

	// save the StandingInstruction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Beneficiary on a StandingInstruction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignBeneficiary( standingInstructionId ): Promise<any> {

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
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/StandingInstruction/update/' + this.standingInstruction;

	return firstValueFrom( this
		.http
		.post(uri, this.standingInstruction)
);
}

	//********************************************************************
	// loadHelper - internal helper to load a StandingInstruction
	//********************************************************************	
	loadHelper( id ) {
		this.editStandingInstruction(id)
			.subscribe(res : StandingInstruction => {
				this.standingInstruction = res;
			});
	}
}
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {AccountStatement} from '../models/AccountStatement';
import {AccountService} from '../services/Account.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class AccountStatementService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	accountStatement : AccountStatement;

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
	// add a AccountStatement
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addAccountStatement(statementNumber, periodStart, periodEnd, openingBalance, closingBalance, Account, DeliveryMethod) : Observable<any> {
		const uri = this.apiUrl + '/AccountStatement/add';
		const obj = {
			      		statementNumber: statementNumber,
      		periodStart: periodStart,
      		periodEnd: periodEnd,
      		openingBalance: openingBalance,
      		closingBalance: closingBalance,
      		Account: Account != null && Account.length > 0 ? Account : null,
			DeliveryMethod: DeliveryMethod
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all AccountStatement
	// returns the results untouched as JSON representation of an
	// array of AccountStatement models
	// delegates via URI to an ORM handler
	//********************************************************************
	getAccountStatements() : Observable<AccountStatement[]> {
		const uri = this.apiUrl + '/AccountStatement';

		return this
			.http.get<AccountStatement[]>(uri);
	}

	//********************************************************************
	// edit a AccountStatement
	// returns the results untouched as a JSON representation of a
	// AccountStatement model
	// delegates via URI to an ORM handler
	//********************************************************************
	editAccountStatement(id) : Observable<AccountStatement> {
		const uri = this.apiUrl + '/AccountStatement/edit/' + id;

		return this.http.get<AccountStatement>(uri);
	}

	//********************************************************************
	// update a AccountStatement
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
		updateAccountStatement(statementNumber, periodStart, periodEnd, openingBalance, closingBalance, Account, DeliveryMethod, id)  :  Observable<any>  {
				const uri = this.apiUrl + '/AccountStatement/update/' + id;
			const obj = {
				      		statementNumber: statementNumber,
      		periodStart: periodStart,
      		periodEnd: periodEnd,
      		openingBalance: openingBalance,
      		closingBalance: closingBalance,
      		Account: Account != null && Account.length > 0 ? Account : null,
			DeliveryMethod: DeliveryMethod
			};
		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a AccountStatement
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteAccountStatement(id)  : Observable<any> {
		const uri = this.apiUrl + '/AccountStatement/delete/' + id;

		return this.http.get(uri);
	}

			//********************************************************************
	// assigns a Account on a AccountStatement
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignAccount( accountStatementId, _accountId ): Promise<any> {

		// get the AccountStatement from storage
		this.loadHelper( accountStatementId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).editAccount(_accountId);

	// assign the Account
	this.accountStatement.account = tmp;

	// save the AccountStatement
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Account on a AccountStatement
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignAccount( accountStatementId ): Promise<any> {

		// get the AccountStatement from storage
		this.loadHelper( accountStatementId );

	// assign Account to null
	this.accountStatement.account = null;

	// save the AccountStatement
	return this.saveHelper();
}

	
	
	//********************************************************************
	// saveHelper - internal helper to save a AccountStatement
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri = this.apiUrl + '/AccountStatement/update/' + this.accountStatement;

	return  this.http.post(uri, this.accountStatement );
}

	//********************************************************************
	// loadHelper - internal helper to load a AccountStatement
	//********************************************************************	
	loadHelper( id ) {
		this.editAccountStatement(id)
			.subscribe((res : AccountStatement) => {
				this.accountStatement = res;
			});
	}
}
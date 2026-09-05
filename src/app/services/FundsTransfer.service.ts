import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {FundsTransfer} from '../models/FundsTransfer';
import {AccountService} from '../services/Account.service';
import {ExternalAccountService} from '../services/ExternalAccount.service';
import {CustomerService} from '../services/Customer.service';
import {TransactionService} from '../services/Transaction.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class FundsTransferService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	fundsTransfer : FundsTransfer;

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
	// add a FundsTransfer
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addFundsTransfer(transferReference, amount, requestedDate, executionDate, purpose, feeAmount, SourceAccount, DestinationAccount, ExternalBeneficiary, InitiatedBy, Transactions, Method, Status) : Observable<any> {
		const uri = this.apiUrl + '/FundsTransfer/add';
		const obj = {
			      		transferReference: transferReference,
      		amount: amount,
      		requestedDate: requestedDate,
      		executionDate: executionDate,
      		purpose: purpose,
      		feeAmount: feeAmount,
      		SourceAccount: SourceAccount != null && SourceAccount.length > 0 ? SourceAccount : null,
      		DestinationAccount: DestinationAccount != null && DestinationAccount.length > 0 ? DestinationAccount : null,
      		ExternalBeneficiary: ExternalBeneficiary != null && ExternalBeneficiary.length > 0 ? ExternalBeneficiary : null,
      		InitiatedBy: InitiatedBy != null && InitiatedBy.length > 0 ? InitiatedBy : null,
      		Transactions: Transactions != null && Transactions.length > 0 ? Transactions : null,
      		Method: Method,
			Status: Status
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all FundsTransfer
	// returns the results untouched as JSON representation of an
	// array of FundsTransfer models
	// delegates via URI to an ORM handler
	//********************************************************************
	getFundsTransfers() ): Observable<FundsTransfer[]> {
		const uri = this.apiUrl + '/FundsTransfer';

		return this
			.http.get<FundsTransfer[]>(uri);
	}

	//********************************************************************
	// edit a FundsTransfer
	// returns the results untouched as a JSON representation of a
	// FundsTransfer model
	// delegates via URI to an ORM handler
	//********************************************************************
	editFundsTransfer(id) : Observable<FundsTransfer> {
		const uri = this.apiUrl + '/FundsTransfer/edit/' + id;

		return this.http.get(Observable<FundsTransfer>)(uri);
	}

	//********************************************************************
	// update a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
			updateFundsTransfer(transferReference, amount, requestedDate, executionDate, purpose, feeAmount, SourceAccount, DestinationAccount, ExternalBeneficiary, InitiatedBy, Transactions, Method, Status, id)  : Promise<any>  {
			const uri = this.apiUrl + '/FundsTransfer/update/' + id;
	const obj = {
		      		transferReference: transferReference,
      		amount: amount,
      		requestedDate: requestedDate,
      		executionDate: executionDate,
      		purpose: purpose,
      		feeAmount: feeAmount,
      		SourceAccount: SourceAccount != null && SourceAccount.length > 0 ? SourceAccount : null,
      		DestinationAccount: DestinationAccount != null && DestinationAccount.length > 0 ? DestinationAccount : null,
      		ExternalBeneficiary: ExternalBeneficiary != null && ExternalBeneficiary.length > 0 ? ExternalBeneficiary : null,
      		InitiatedBy: InitiatedBy != null && InitiatedBy.length > 0 ? InitiatedBy : null,
      		Transactions: Transactions != null && Transactions.length > 0 ? Transactions : null,
      		Method: Method,
			Status: Status
};

	return firstValueFrom(this.http.post(uri, obj));
}

	//********************************************************************
	// delete a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteFundsTransfer(id)  : Promise<any> {
		const uri = this.apiUrl + '/FundsTransfer/delete/' + id;

		return firstValueFrom(this.http.get(uri));
	}

			//********************************************************************
	// assigns a SourceAccount on a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignSourceAccount( fundsTransferId, _sourceAccountId ): Promise<any> {

		// get the FundsTransfer from storage
		this.loadHelper( fundsTransferId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).editAccount(_sourceAccountId);

	// assign the SourceAccount
	this.fundsTransfer.sourceAccount = tmp;

	// save the FundsTransfer
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a SourceAccount on a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignSourceAccount( fundsTransferId ): Promise<any> {

		// get the FundsTransfer from storage
		this.loadHelper( fundsTransferId );

	// assign SourceAccount to null
	this.fundsTransfer.sourceAccount = null;

	// save the FundsTransfer
	return this.saveHelper();
}

		//********************************************************************
	// assigns a DestinationAccount on a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignDestinationAccount( fundsTransferId, _destinationAccountId ): Promise<any> {

		// get the FundsTransfer from storage
		this.loadHelper( fundsTransferId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).editAccount(_destinationAccountId);

	// assign the DestinationAccount
	this.fundsTransfer.destinationAccount = tmp;

	// save the FundsTransfer
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a DestinationAccount on a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignDestinationAccount( fundsTransferId ): Promise<any> {

		// get the FundsTransfer from storage
		this.loadHelper( fundsTransferId );

	// assign DestinationAccount to null
	this.fundsTransfer.destinationAccount = null;

	// save the FundsTransfer
	return this.saveHelper();
}

		//********************************************************************
	// assigns a ExternalBeneficiary on a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignExternalBeneficiary( fundsTransferId, _externalBeneficiaryId ): Promise<any> {

		// get the FundsTransfer from storage
		this.loadHelper( fundsTransferId );

	// get the ExternalAccount from storage
	var tmp 	= new ExternalAccountService(this.http).editExternalAccount(_externalBeneficiaryId);

	// assign the ExternalBeneficiary
	this.fundsTransfer.externalBeneficiary = tmp;

	// save the FundsTransfer
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a ExternalBeneficiary on a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignExternalBeneficiary( fundsTransferId ): Promise<any> {

		// get the FundsTransfer from storage
		this.loadHelper( fundsTransferId );

	// assign ExternalBeneficiary to null
	this.fundsTransfer.externalBeneficiary = null;

	// save the FundsTransfer
	return this.saveHelper();
}

		//********************************************************************
	// assigns a InitiatedBy on a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignInitiatedBy( fundsTransferId, _initiatedById ): Promise<any> {

		// get the FundsTransfer from storage
		this.loadHelper( fundsTransferId );

	// get the Customer from storage
	var tmp 	= new CustomerService(this.http).editCustomer(_initiatedById);

	// assign the InitiatedBy
	this.fundsTransfer.initiatedBy = tmp;

	// save the FundsTransfer
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a InitiatedBy on a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignInitiatedBy( fundsTransferId ): Promise<any> {

		// get the FundsTransfer from storage
		this.loadHelper( fundsTransferId );

	// assign InitiatedBy to null
	this.fundsTransfer.initiatedBy = null;

	// save the FundsTransfer
	return this.saveHelper();
}

	
		//********************************************************************
	// adds one or more transactionsIds as a Transactions
	// to a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addTransactions( fundsTransferId, transactionsIds ): Promise<any> {

		// get the FundsTransfer
		this.loadHelper( fundsTransferId );

	// split on a comma with no spaces
	var idList = transactionsIds.split(',')

	// iterate over array of transactions ids
	idList.forEach(function (id) {
		// read the Transaction
		var transaction = new TransactionService(this.http).editTransaction(id);
		// add the Transaction if not already assigned
		if ( this.fundsTransfer.transactions.indexOf(transaction) == -1 )
		this.fundsTransfer.transactions.push(transaction);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more transactionsIds as a Transactions
	// from a FundsTransfer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeTransactions( fundsTransferId, transactionsIds ): Promise<any> {

		// get the FundsTransfer
		this.loadHelper( fundsTransferId );


	// split on a comma with no spaces
	var idList 					= transactionsIds.split(',');
	var transactions 	= this.fundsTransfer.transactions;

	if ( transactions != null && transactionsIds != null ) {

		// iterate over array of transactions ids
		transactions.forEach(function (obj) {
			if ( transactionsIds.indexOf(obj._id) > -1 ) {
				// remove the Transaction
				this.fundsTransfer.transactions.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

	
	//********************************************************************
	// saveHelper - internal helper to save a FundsTransfer
	//********************************************************************
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/FundsTransfer/update/' + this.fundsTransfer;

	return firstValueFrom( this
		.http
		.post(uri, this.fundsTransfer)
);
}

	//********************************************************************
	// loadHelper - internal helper to load a FundsTransfer
	//********************************************************************	
	loadHelper( id ) {
		this.editFundsTransfer(id)
			.subscribe(res : FundsTransfer => {
				this.fundsTransfer = res;
			});
	}
}
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Account} from '../models/Account';
import {BankService} from '../services/Bank.service';
import {BranchService} from '../services/Branch.service';
import {BankingProductService} from '../services/BankingProduct.service';
import {CustomerService} from '../services/Customer.service';
import {TransactionService} from '../services/Transaction.service';
import {AccountStatementService} from '../services/AccountStatement.service';
import {StandingInstructionService} from '../services/StandingInstruction.service';
import {FeeChargeService} from '../services/FeeCharge.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class AccountService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	account : Account;

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
	// add a Account
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addAccount(accountNumber, iban, accountName, currency, openedOn, closedOn, Bank, Branch, Product, Owners, Transactions, Statements, StandingInstructions, FeeCharges, AccountType, OwnershipType, Status) : Observable<any> {
		const uri = this.apiUrl + '/Account/add';
		const obj = {
			      		accountNumber: accountNumber,
      		iban: iban,
      		accountName: accountName,
      		currency: currency,
      		openedOn: openedOn,
      		closedOn: closedOn,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Branch: Branch != null && Branch.length > 0 ? Branch : null,
      		Product: Product != null && Product.length > 0 ? Product : null,
      		Owners: Owners != null && Owners.length > 0 ? Owners : null,
      		Transactions: Transactions != null && Transactions.length > 0 ? Transactions : null,
      		Statements: Statements != null && Statements.length > 0 ? Statements : null,
      		StandingInstructions: StandingInstructions != null && StandingInstructions.length > 0 ? StandingInstructions : null,
      		FeeCharges: FeeCharges != null && FeeCharges.length > 0 ? FeeCharges : null,
      		AccountType: AccountType,
      		OwnershipType: OwnershipType,
			Status: Status
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all Account
	// returns the results untouched as JSON representation of an
	// array of Account models
	// delegates via URI to an ORM handler
	//********************************************************************
	getAccounts() ): Observable<Account[]> {
		const uri = this.apiUrl + '/Account';

		return this
			.http.get<Account[]>(uri);
	}

	//********************************************************************
	// edit a Account
	// returns the results untouched as a JSON representation of a
	// Account model
	// delegates via URI to an ORM handler
	//********************************************************************
	editAccount(id) : Observable<Account> {
		const uri = this.apiUrl + '/Account/edit/' + id;

		return this.http.get(Observable<Account>)(uri);
	}

	//********************************************************************
	// update a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
			updateAccount(accountNumber, iban, accountName, currency, openedOn, closedOn, Bank, Branch, Product, Owners, Transactions, Statements, StandingInstructions, FeeCharges, AccountType, OwnershipType, Status, id)  : Promise<any>  {
			const uri = this.apiUrl + '/Account/update/' + id;
	const obj = {
		      		accountNumber: accountNumber,
      		iban: iban,
      		accountName: accountName,
      		currency: currency,
      		openedOn: openedOn,
      		closedOn: closedOn,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Branch: Branch != null && Branch.length > 0 ? Branch : null,
      		Product: Product != null && Product.length > 0 ? Product : null,
      		Owners: Owners != null && Owners.length > 0 ? Owners : null,
      		Transactions: Transactions != null && Transactions.length > 0 ? Transactions : null,
      		Statements: Statements != null && Statements.length > 0 ? Statements : null,
      		StandingInstructions: StandingInstructions != null && StandingInstructions.length > 0 ? StandingInstructions : null,
      		FeeCharges: FeeCharges != null && FeeCharges.length > 0 ? FeeCharges : null,
      		AccountType: AccountType,
      		OwnershipType: OwnershipType,
			Status: Status
};

	return firstValueFrom(this.http.post(uri, obj));
}

	//********************************************************************
	// delete a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteAccount(id)  : Promise<any> {
		const uri = this.apiUrl + '/Account/delete/' + id;

		return firstValueFrom(this.http.get(uri));
	}

			//********************************************************************
	// assigns a Bank on a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBank( accountId, _bankId ): Promise<any> {

		// get the Account from storage
		this.loadHelper( accountId );

	// get the Bank from storage
	var tmp 	= new BankService(this.http).editBank(_bankId);

	// assign the Bank
	this.account.bank = tmp;

	// save the Account
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Bank on a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignBank( accountId ): Promise<any> {

		// get the Account from storage
		this.loadHelper( accountId );

	// assign Bank to null
	this.account.bank = null;

	// save the Account
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Branch on a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBranch( accountId, _branchId ): Promise<any> {

		// get the Account from storage
		this.loadHelper( accountId );

	// get the Branch from storage
	var tmp 	= new BranchService(this.http).editBranch(_branchId);

	// assign the Branch
	this.account.branch = tmp;

	// save the Account
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Branch on a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignBranch( accountId ): Promise<any> {

		// get the Account from storage
		this.loadHelper( accountId );

	// assign Branch to null
	this.account.branch = null;

	// save the Account
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Product on a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignProduct( accountId, _productId ): Promise<any> {

		// get the Account from storage
		this.loadHelper( accountId );

	// get the BankingProduct from storage
	var tmp 	= new BankingProductService(this.http).editBankingProduct(_productId);

	// assign the Product
	this.account.product = tmp;

	// save the Account
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Product on a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignProduct( accountId ): Promise<any> {

		// get the Account from storage
		this.loadHelper( accountId );

	// assign Product to null
	this.account.product = null;

	// save the Account
	return this.saveHelper();
}

	
		//********************************************************************
	// adds one or more ownersIds as a Owners
	// to a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addOwners( accountId, ownersIds ): Promise<any> {

		// get the Account
		this.loadHelper( accountId );

	// split on a comma with no spaces
	var idList = ownersIds.split(',')

	// iterate over array of owners ids
	idList.forEach(function (id) {
		// read the Customer
		var customer = new CustomerService(this.http).editCustomer(id);
		// add the Customer if not already assigned
		if ( this.account.owners.indexOf(customer) == -1 )
		this.account.owners.push(customer);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more ownersIds as a Owners
	// from a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeOwners( accountId, ownersIds ): Promise<any> {

		// get the Account
		this.loadHelper( accountId );


	// split on a comma with no spaces
	var idList 					= ownersIds.split(',');
	var owners 	= this.account.owners;

	if ( owners != null && ownersIds != null ) {

		// iterate over array of owners ids
		owners.forEach(function (obj) {
			if ( ownersIds.indexOf(obj._id) > -1 ) {
				// remove the Customer
				this.account.owners.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more transactionsIds as a Transactions
	// to a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addTransactions( accountId, transactionsIds ): Promise<any> {

		// get the Account
		this.loadHelper( accountId );

	// split on a comma with no spaces
	var idList = transactionsIds.split(',')

	// iterate over array of transactions ids
	idList.forEach(function (id) {
		// read the Transaction
		var transaction = new TransactionService(this.http).editTransaction(id);
		// add the Transaction if not already assigned
		if ( this.account.transactions.indexOf(transaction) == -1 )
		this.account.transactions.push(transaction);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more transactionsIds as a Transactions
	// from a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeTransactions( accountId, transactionsIds ): Promise<any> {

		// get the Account
		this.loadHelper( accountId );


	// split on a comma with no spaces
	var idList 					= transactionsIds.split(',');
	var transactions 	= this.account.transactions;

	if ( transactions != null && transactionsIds != null ) {

		// iterate over array of transactions ids
		transactions.forEach(function (obj) {
			if ( transactionsIds.indexOf(obj._id) > -1 ) {
				// remove the Transaction
				this.account.transactions.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more statementsIds as a Statements
	// to a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addStatements( accountId, statementsIds ): Promise<any> {

		// get the Account
		this.loadHelper( accountId );

	// split on a comma with no spaces
	var idList = statementsIds.split(',')

	// iterate over array of statements ids
	idList.forEach(function (id) {
		// read the AccountStatement
		var accountStatement = new AccountStatementService(this.http).editAccountStatement(id);
		// add the AccountStatement if not already assigned
		if ( this.account.statements.indexOf(accountStatement) == -1 )
		this.account.statements.push(accountStatement);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more statementsIds as a Statements
	// from a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeStatements( accountId, statementsIds ): Promise<any> {

		// get the Account
		this.loadHelper( accountId );


	// split on a comma with no spaces
	var idList 					= statementsIds.split(',');
	var statements 	= this.account.statements;

	if ( statements != null && statementsIds != null ) {

		// iterate over array of statements ids
		statements.forEach(function (obj) {
			if ( statementsIds.indexOf(obj._id) > -1 ) {
				// remove the AccountStatement
				this.account.statements.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more standingInstructionsIds as a StandingInstructions
	// to a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addStandingInstructions( accountId, standingInstructionsIds ): Promise<any> {

		// get the Account
		this.loadHelper( accountId );

	// split on a comma with no spaces
	var idList = standingInstructionsIds.split(',')

	// iterate over array of standingInstructions ids
	idList.forEach(function (id) {
		// read the StandingInstruction
		var standingInstruction = new StandingInstructionService(this.http).editStandingInstruction(id);
		// add the StandingInstruction if not already assigned
		if ( this.account.standingInstructions.indexOf(standingInstruction) == -1 )
		this.account.standingInstructions.push(standingInstruction);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more standingInstructionsIds as a StandingInstructions
	// from a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeStandingInstructions( accountId, standingInstructionsIds ): Promise<any> {

		// get the Account
		this.loadHelper( accountId );


	// split on a comma with no spaces
	var idList 					= standingInstructionsIds.split(',');
	var standingInstructions 	= this.account.standingInstructions;

	if ( standingInstructions != null && standingInstructionsIds != null ) {

		// iterate over array of standingInstructions ids
		standingInstructions.forEach(function (obj) {
			if ( standingInstructionsIds.indexOf(obj._id) > -1 ) {
				// remove the StandingInstruction
				this.account.standingInstructions.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more feeChargesIds as a FeeCharges
	// to a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addFeeCharges( accountId, feeChargesIds ): Promise<any> {

		// get the Account
		this.loadHelper( accountId );

	// split on a comma with no spaces
	var idList = feeChargesIds.split(',')

	// iterate over array of feeCharges ids
	idList.forEach(function (id) {
		// read the FeeCharge
		var feeCharge = new FeeChargeService(this.http).editFeeCharge(id);
		// add the FeeCharge if not already assigned
		if ( this.account.feeCharges.indexOf(feeCharge) == -1 )
		this.account.feeCharges.push(feeCharge);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more feeChargesIds as a FeeCharges
	// from a Account
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeFeeCharges( accountId, feeChargesIds ): Promise<any> {

		// get the Account
		this.loadHelper( accountId );


	// split on a comma with no spaces
	var idList 					= feeChargesIds.split(',');
	var feeCharges 	= this.account.feeCharges;

	if ( feeCharges != null && feeChargesIds != null ) {

		// iterate over array of feeCharges ids
		feeCharges.forEach(function (obj) {
			if ( feeChargesIds.indexOf(obj._id) > -1 ) {
				// remove the FeeCharge
				this.account.feeCharges.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

	
	//********************************************************************
	// saveHelper - internal helper to save a Account
	//********************************************************************
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/Account/update/' + this.account;

	return firstValueFrom( this
		.http
		.post(uri, this.account)
);
}

	//********************************************************************
	// loadHelper - internal helper to load a Account
	//********************************************************************	
	loadHelper( id ) {
		this.editAccount(id)
			.subscribe(res : Account => {
				this.account = res;
			});
	}
}
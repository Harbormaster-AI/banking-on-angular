import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Branch} from '../models/Branch';
import {BankService} from '../services/Bank.service';
import {AccountService} from '../services/Account.service';
import {LoanAccountService} from '../services/LoanAccount.service';
import {ATMService} from '../services/ATM.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class BranchService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	branch : Branch;

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
	// add a Branch
	// returns the results untouched as a JSON representation
	// delegates via URI
	//********************************************************************
	addBranch(name, branchCode, address, phone, openingHours, Bank, Accounts, LoanAccounts, Atms) : Observable<any> {
		const uri_ = this.apiUrl + '/Branch/create';
		const obj = {
			      		name: name,
      		branchCode: branchCode,
      		address: address,
      		phone: phone,
      		openingHours: openingHours,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      		LoanAccounts: LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
			Atms: Atms != null && Atms.length > 0 ? Atms : null
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a Branch
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateBranch(name, branchCode, address, phone, openingHours, Bank, Accounts, LoanAccounts, Atms, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/Branch/update/' + id;
		const obj = {
				      		name: name,
      		branchCode: branchCode,
      		address: address,
      		phone: phone,
      		openingHours: openingHours,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      		LoanAccounts: LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
			Atms: Atms != null && Atms.length > 0 ? Atms : null
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a Branch
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteBranch(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/Branch/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a Branch
	// returns the results untouched as an Observable Branch
	// Branch model
	// delegates via URI
	//********************************************************************
	getBranch(id) : Observable<Branch> {
		const uri_ = this.apiUrl + '/Branch/load/' + id;

		return this.http.get<Branch>(uri_);
	}
	
	//********************************************************************
	// gets all Branch
	// returns the results untouched as JSON representation of an
	// Observable array of Branch models
	// delegates via URI
	//********************************************************************
	getBranchs() : Observable<Branch[]> {
		const uri_ = this.apiUrl + '/Branch/';

		return this
			.http.get<Branch[]>(uri_);
	}
	
			//********************************************************************
	// assigns a Bank on a Branch
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignBank( branchId, _bankId ): Observable<any> {

		// get the Branch from storage
		this.loadHelper( branchId );

	// get the Bank from storage
	var tmp 	= new BankService(this.http).getBank(_bankId);

	// assign the Bank
	this.branch.bank = tmp;

	// save the Branch
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Bank on a Branch
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignBank( branchId ): Observable<any> {

		// get the Branch from storage
		this.loadHelper( branchId );

	// assign Bank to null
	this.branch.bank = null;

	// save the Branch
	return this.saveHelper();
}

	
		//********************************************************************
	// adds one or more accountsIds as a Accounts
	// to a Branch
	// returns a Promise
	// delegates via URI
	//********************************************************************
	addAccounts( branchId, accountsIds ): Observable<any> {

		// get the Branch
		this.loadHelper( branchId );

	// split on a comma with no spaces
	var idList = accountsIds.split(',')

	// iterate over array of accounts ids
	idList.forEach(function (id) {
		// read the Account
		var account = new AccountService(this.http).getAccount(id);
		// add the Account if not already assigned
		if ( this.branch.accounts.indexOf(account) == -1 )
		this.branch.accounts.push(account);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more accountsIds as a Accounts
	// from a Branch
	// returns a Promise
	// delegates via URI
	//********************************************************************
	removeAccounts( branchId, accountsIds ): Observable<any> {

		// get the Branch
		this.loadHelper( branchId );


	// split on a comma with no spaces
	var idList 					= accountsIds.split(',');
	var accounts 	= this.branch.accounts;

	if ( accounts != null && accountsIds != null ) {

		// iterate over array of accounts ids
		accounts.forEach(function (obj) {
			if ( accountsIds.indexOf(obj._id) > -1 ) {
				// remove the Account
				this.branch.accounts.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more loanAccountsIds as a LoanAccounts
	// to a Branch
	// returns a Promise
	// delegates via URI
	//********************************************************************
	addLoanAccounts( branchId, loanAccountsIds ): Observable<any> {

		// get the Branch
		this.loadHelper( branchId );

	// split on a comma with no spaces
	var idList = loanAccountsIds.split(',')

	// iterate over array of loanAccounts ids
	idList.forEach(function (id) {
		// read the LoanAccount
		var loanAccount = new LoanAccountService(this.http).getLoanAccount(id);
		// add the LoanAccount if not already assigned
		if ( this.branch.loanAccounts.indexOf(loanAccount) == -1 )
		this.branch.loanAccounts.push(loanAccount);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more loanAccountsIds as a LoanAccounts
	// from a Branch
	// returns a Promise
	// delegates via URI
	//********************************************************************
	removeLoanAccounts( branchId, loanAccountsIds ): Observable<any> {

		// get the Branch
		this.loadHelper( branchId );


	// split on a comma with no spaces
	var idList 					= loanAccountsIds.split(',');
	var loanAccounts 	= this.branch.loanAccounts;

	if ( loanAccounts != null && loanAccountsIds != null ) {

		// iterate over array of loanAccounts ids
		loanAccounts.forEach(function (obj) {
			if ( loanAccountsIds.indexOf(obj._id) > -1 ) {
				// remove the LoanAccount
				this.branch.loanAccounts.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more atmsIds as a Atms
	// to a Branch
	// returns a Promise
	// delegates via URI
	//********************************************************************
	addAtms( branchId, atmsIds ): Observable<any> {

		// get the Branch
		this.loadHelper( branchId );

	// split on a comma with no spaces
	var idList = atmsIds.split(',')

	// iterate over array of atms ids
	idList.forEach(function (id) {
		// read the ATM
		var aTM = new ATMService(this.http).getATM(id);
		// add the ATM if not already assigned
		if ( this.branch.atms.indexOf(aTM) == -1 )
		this.branch.atms.push(aTM);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more atmsIds as a Atms
	// from a Branch
	// returns a Promise
	// delegates via URI
	//********************************************************************
	removeAtms( branchId, atmsIds ): Observable<any> {

		// get the Branch
		this.loadHelper( branchId );


	// split on a comma with no spaces
	var idList 					= atmsIds.split(',');
	var atms 	= this.branch.atms;

	if ( atms != null && atmsIds != null ) {

		// iterate over array of atms ids
		atms.forEach(function (obj) {
			if ( atmsIds.indexOf(obj._id) > -1 ) {
				// remove the ATM
				this.branch.atms.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

	
	//********************************************************************
	// saveHelper - internal helper to save a Branch
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/Branch/update/' + this.branch;

	return  this.http.post(uri_, this.branch );
}

	//********************************************************************
	// loadHelper - internal helper to load a Branch
	//********************************************************************	
	loadHelper( id ) {
		this.getBranch(id)
			.subscribe((res : Branch) => {
				this.branch = res;
			});
	}
}
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
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
	branch : any;
	
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
	// delegates via URI to an ORM handler
	//********************************************************************
  	addBranch(name, branchCode, address, phone, openingHours, Bank, Accounts, LoanAccounts, Atms) : Promise<any> {
    	const uri = this.ormUrl + '/Branch/add';
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// gets all Branch 
	// returns the results untouched as JSON representation of an
	// array of Branch models
	// delegates via URI to an ORM handler
	//********************************************************************
	getBranchs() {
    	const uri = this.ormUrl + '/Branch';
    	
    	return this
            	.http.get(uri).map(res => {
              						return res;
            					});
  	}

	//********************************************************************
	// edit a Branch 
	// returns the results untouched as a JSON representation of a
	// Branch model
	// delegates via URI to an ORM handler
	//********************************************************************
  	editBranch(id) {
    	const uri = this.ormUrl + '/Branch/edit/' + id;
    	
    	return this.http.get(uri).map(res => {
              							return res;
            						});
  	}

	//********************************************************************
	// update a Branch 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	updateBranch(name, branchCode, address, phone, openingHours, Bank, Accounts, LoanAccounts, Atms, id)  : Promise<any>  {
    	const uri = this.ormUrl + '/Branch/update/' + id;
    	const obj = {
#attributeStructDecl(${classObject})
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// delete a Branch 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteBranch(id)  : Promise<any> {
    	const uri = this.ormUrl + '/Branch/delete/' + id;

        return this.http.get(uri).toPromise();
  }
  
    		//********************************************************************
	// assigns a Bank on a Branch
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBank( branchId, _bankId ): Promise<any> {

		// get the Branch from storage
		this.loadHelper( branchId );
		
		// get the Bank from storage
		var tmp 	= new BankService(this.http).editBank(_bankId);
		
		// assign the Bank		
		this.branch.bank = tmp;
      		
		// save the Branch
		return this.saveHelper();		
	}

	//********************************************************************
	// unassigns a Bank on a Branch
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	unassignBank( branchId ): Promise<any> {

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
	// delegates via URI to an ORM handler
	//********************************************************************				
	addAccounts( branchId, accountsIds ): Promise<any> {

		// get the Branch
		this.loadHelper( branchId );
				
		// split on a comma with no spaces
		var idList = accountsIds.split(',')

		// iterate over array of accounts ids
		idList.forEach(function (id) {
			// read the Account		
			var account = new AccountService(this.http).editAccount(id);	
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
	// delegates via URI to an ORM handler
	//********************************************************************						
	removeAccounts( branchId, accountsIds ): Promise<any> {
		
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
	// delegates via URI to an ORM handler
	//********************************************************************				
	addLoanAccounts( branchId, loanAccountsIds ): Promise<any> {

		// get the Branch
		this.loadHelper( branchId );
				
		// split on a comma with no spaces
		var idList = loanAccountsIds.split(',')

		// iterate over array of loanAccounts ids
		idList.forEach(function (id) {
			// read the LoanAccount		
			var loanAccount = new LoanAccountService(this.http).editLoanAccount(id);	
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
	// delegates via URI to an ORM handler
	//********************************************************************						
	removeLoanAccounts( branchId, loanAccountsIds ): Promise<any> {
		
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
	// delegates via URI to an ORM handler
	//********************************************************************				
	addAtms( branchId, atmsIds ): Promise<any> {

		// get the Branch
		this.loadHelper( branchId );
				
		// split on a comma with no spaces
		var idList = atmsIds.split(',')

		// iterate over array of atms ids
		idList.forEach(function (id) {
			// read the ATM		
			var aTM = new ATMService(this.http).editATM(id);	
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
	// delegates via URI to an ORM handler
	//********************************************************************						
	removeAtms( branchId, atmsIds ): Promise<any> {
		
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
	saveHelper() : Promise<any> {
		
		const uri = this.ormUrl + '/Branch/update/' + this.branch._id;		
		
    	return this
      			.http
      			.post(uri, this.branch)
				.toPromise();			
	}

	//********************************************************************
	// loadHelper - internal helper to load a Branch
	//********************************************************************	
	loadHelper( id ) {
		this.editBranch(id)
        		.subscribe(res => {
        			this.branch = res;
      			});
	}
}
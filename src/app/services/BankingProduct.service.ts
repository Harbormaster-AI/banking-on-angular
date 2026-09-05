import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {BankingProduct} from '../models/BankingProduct';
import {BankService} from '../services/Bank.service';
import {AccountService} from '../services/Account.service';
import {LoanAccountService} from '../services/LoanAccount.service';
import {PaymentCardService} from '../services/PaymentCard.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
  })
    
export class BankingProductService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	bankingProduct : any;
	
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
	// add a BankingProduct 
	// returns the results untouched as a JSON representation 
	// delegates via URI to an ORM handler
	//********************************************************************
  	addBankingProduct(productCode, name, description, Bank, Accounts, LoanAccounts, PaymentCards, ProductCategory) : Promise<any> {
    	const uri = this.ormUrl + '/BankingProduct/add';
    	const obj = {
      		productCode: productCode,
      		name: name,
      		description: description,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      		LoanAccounts: LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
      		PaymentCards: PaymentCards != null && PaymentCards.length > 0 ? PaymentCards : null,
			ProductCategory: ProductCategory
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// gets all BankingProduct 
	// returns the results untouched as JSON representation of an
	// array of BankingProduct models
	// delegates via URI to an ORM handler
	//********************************************************************
	getBankingProducts() {
    	const uri = this.ormUrl + '/BankingProduct';
    	
    	return this
            	.http.get(uri).map(res => {
              						return res;
            					});
  	}

	//********************************************************************
	// edit a BankingProduct 
	// returns the results untouched as a JSON representation of a
	// BankingProduct model
	// delegates via URI to an ORM handler
	//********************************************************************
  	editBankingProduct(id) {
    	const uri = this.ormUrl + '/BankingProduct/edit/' + id;
    	
    	return this.http.get(uri).map(res => {
              							return res;
            						});
  	}

	//********************************************************************
	// update a BankingProduct 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	updateBankingProduct(productCode, name, description, Bank, Accounts, LoanAccounts, PaymentCards, ProductCategory, id)  : Promise<any>  {
    	const uri = this.ormUrl + '/BankingProduct/update/' + id;
    	const obj = {
      		productCode: productCode,
      		name: name,
      		description: description,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      		LoanAccounts: LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
      		PaymentCards: PaymentCards != null && PaymentCards.length > 0 ? PaymentCards : null,
			ProductCategory: ProductCategory
    	};
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// delete a BankingProduct 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteBankingProduct(id)  : Promise<any> {
    	const uri = this.ormUrl + '/BankingProduct/delete/' + id;

        return this.http.get(uri).toPromise();
  }
  
    		//********************************************************************
	// assigns a Bank on a BankingProduct
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBank( bankingProductId, _bankId ): Promise<any> {

		// get the BankingProduct from storage
		this.loadHelper( bankingProductId );
		
		// get the Bank from storage
		var tmp 	= new BankService(this.http).editBank(_bankId);
		
		// assign the Bank		
		this.bankingProduct.bank = tmp;
      		
		// save the BankingProduct
		return this.saveHelper();		
	}

	//********************************************************************
	// unassigns a Bank on a BankingProduct
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	unassignBank( bankingProductId ): Promise<any> {

		// get the BankingProduct from storage
        this.loadHelper( bankingProductId );
		
		// assign Bank to null		
		this.bankingProduct.bank = null;
      		
		// save the BankingProduct
		return this.saveHelper();
	}
	

	//********************************************************************
	// adds one or more accountsIds as a Accounts 
	// to a BankingProduct
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	addAccounts( bankingProductId, accountsIds ): Promise<any> {

		// get the BankingProduct
		this.loadHelper( bankingProductId );
				
		// split on a comma with no spaces
		var idList = accountsIds.split(',')

		// iterate over array of accounts ids
		idList.forEach(function (id) {
			// read the Account		
			var account = new AccountService(this.http).editAccount(id);	
			// add the Account if not already assigned
			if ( this.bankingProduct.accounts.indexOf(account) == -1 )
				this.bankingProduct.accounts.push(account);
		});
				
		// save it		
		return this.saveHelper();
	}			
	
	//********************************************************************
	// removes one or more accountsIds as a Accounts 
	// from a BankingProduct
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************						
	removeAccounts( bankingProductId, accountsIds ): Promise<any> {
		
		// get the BankingProduct
		this.loadHelper( bankingProductId );

				
		// split on a comma with no spaces
		var idList 					= accountsIds.split(',');
		var accounts 	= this.bankingProduct.accounts;
		
		if ( accounts != null && accountsIds != null ) {
		
			// iterate over array of accounts ids
			accounts.forEach(function (obj) {				
				if ( accountsIds.indexOf(obj._id) > -1 ) {
					 // remove the Account
					this.bankingProduct.accounts.pop(obj);
				}
			});
					
		    // save it		
			return this.saveHelper();
		}
	}
			
	//********************************************************************
	// adds one or more loanAccountsIds as a LoanAccounts 
	// to a BankingProduct
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	addLoanAccounts( bankingProductId, loanAccountsIds ): Promise<any> {

		// get the BankingProduct
		this.loadHelper( bankingProductId );
				
		// split on a comma with no spaces
		var idList = loanAccountsIds.split(',')

		// iterate over array of loanAccounts ids
		idList.forEach(function (id) {
			// read the LoanAccount		
			var loanAccount = new LoanAccountService(this.http).editLoanAccount(id);	
			// add the LoanAccount if not already assigned
			if ( this.bankingProduct.loanAccounts.indexOf(loanAccount) == -1 )
				this.bankingProduct.loanAccounts.push(loanAccount);
		});
				
		// save it		
		return this.saveHelper();
	}			
	
	//********************************************************************
	// removes one or more loanAccountsIds as a LoanAccounts 
	// from a BankingProduct
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************						
	removeLoanAccounts( bankingProductId, loanAccountsIds ): Promise<any> {
		
		// get the BankingProduct
		this.loadHelper( bankingProductId );

				
		// split on a comma with no spaces
		var idList 					= loanAccountsIds.split(',');
		var loanAccounts 	= this.bankingProduct.loanAccounts;
		
		if ( loanAccounts != null && loanAccountsIds != null ) {
		
			// iterate over array of loanAccounts ids
			loanAccounts.forEach(function (obj) {				
				if ( loanAccountsIds.indexOf(obj._id) > -1 ) {
					 // remove the LoanAccount
					this.bankingProduct.loanAccounts.pop(obj);
				}
			});
					
		    // save it		
			return this.saveHelper();
		}
	}
			
	//********************************************************************
	// adds one or more paymentCardsIds as a PaymentCards 
	// to a BankingProduct
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************				
	addPaymentCards( bankingProductId, paymentCardsIds ): Promise<any> {

		// get the BankingProduct
		this.loadHelper( bankingProductId );
				
		// split on a comma with no spaces
		var idList = paymentCardsIds.split(',')

		// iterate over array of paymentCards ids
		idList.forEach(function (id) {
			// read the PaymentCard		
			var paymentCard = new PaymentCardService(this.http).editPaymentCard(id);	
			// add the PaymentCard if not already assigned
			if ( this.bankingProduct.paymentCards.indexOf(paymentCard) == -1 )
				this.bankingProduct.paymentCards.push(paymentCard);
		});
				
		// save it		
		return this.saveHelper();
	}			
	
	//********************************************************************
	// removes one or more paymentCardsIds as a PaymentCards 
	// from a BankingProduct
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************						
	removePaymentCards( bankingProductId, paymentCardsIds ): Promise<any> {
		
		// get the BankingProduct
		this.loadHelper( bankingProductId );

				
		// split on a comma with no spaces
		var idList 					= paymentCardsIds.split(',');
		var paymentCards 	= this.bankingProduct.paymentCards;
		
		if ( paymentCards != null && paymentCardsIds != null ) {
		
			// iterate over array of paymentCards ids
			paymentCards.forEach(function (obj) {				
				if ( paymentCardsIds.indexOf(obj._id) > -1 ) {
					 // remove the PaymentCard
					this.bankingProduct.paymentCards.pop(obj);
				}
			});
					
		    // save it		
			return this.saveHelper();
		}
	}
			

	//********************************************************************
	// saveHelper - internal helper to save a BankingProduct
	//********************************************************************
	saveHelper() : Promise<any> {
		
		const uri = this.ormUrl + '/BankingProduct/update/' + this.bankingProduct._id;		
		
    	return this
      			.http
      			.post(uri, this.bankingProduct)
				.toPromise();			
	}

	//********************************************************************
	// loadHelper - internal helper to load a BankingProduct
	//********************************************************************	
	loadHelper( id ) {
		this.editBankingProduct(id)
        		.subscribe(res => {
        			this.bankingProduct = res;
      			});
	}
}
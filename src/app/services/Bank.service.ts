import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Bank} from '../models/Bank';
import {BranchService} from '../services/Branch.service';
import {BankingProductService} from '../services/BankingProduct.service';
import {CustomerService} from '../services/Customer.service';
import {AccountService} from '../services/Account.service';
import {PaymentCardService} from '../services/PaymentCard.service';
import {LoanAccountService} from '../services/LoanAccount.service';
import {ExchangeRateService} from '../services/ExchangeRate.service';
import {ConsentService} from '../services/Consent.service';
import {ThirdPartyProviderService} from '../services/ThirdPartyProvider.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class BankService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	bank : Bank;

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
	// add a Bank
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addBank(name, legalName, swiftBic, headquartersCountry, website, Branches, Products, Customers, Accounts, PaymentCards, LoanAccounts, ExchangeRates, Consents, ThirdPartyProviders) : Observable<any> {
		const uri = this.apiUrl + '/Bank/add';
		const obj = {
			      		name: name,
      		legalName: legalName,
      		swiftBic: swiftBic,
      		headquartersCountry: headquartersCountry,
      		website: website,
      		Branches: Branches != null && Branches.length > 0 ? Branches : null,
      		Products: Products != null && Products.length > 0 ? Products : null,
      		Customers: Customers != null && Customers.length > 0 ? Customers : null,
      		Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      		PaymentCards: PaymentCards != null && PaymentCards.length > 0 ? PaymentCards : null,
      		LoanAccounts: LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
      		ExchangeRates: ExchangeRates != null && ExchangeRates.length > 0 ? ExchangeRates : null,
      		Consents: Consents != null && Consents.length > 0 ? Consents : null,
			ThirdPartyProviders: ThirdPartyProviders != null && ThirdPartyProviders.length > 0 ? ThirdPartyProviders : null
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all Bank
	// returns the results untouched as JSON representation of an
	// array of Bank models
	// delegates via URI to an ORM handler
	//********************************************************************
	getBanks() : Observable<Bank[]> {
		const uri = this.apiUrl + '/Bank';

		return this
			.http.get<Bank[]>(uri);
	}

	//********************************************************************
	// edit a Bank
	// returns the results untouched as a JSON representation of a
	// Bank model
	// delegates via URI to an ORM handler
	//********************************************************************
	editBank(id) : Observable<Bank> {
		const uri = this.apiUrl + '/Bank/edit/' + id;

		return this.http.get<Bank>(uri);
	}

	//********************************************************************
	// update a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
		updateBank(name, legalName, swiftBic, headquartersCountry, website, Branches, Products, Customers, Accounts, PaymentCards, LoanAccounts, ExchangeRates, Consents, ThirdPartyProviders, id)  :  Observable<any>  {
				const uri = this.apiUrl + '/Bank/update/' + id;
			const obj = {
				      		name: name,
      		legalName: legalName,
      		swiftBic: swiftBic,
      		headquartersCountry: headquartersCountry,
      		website: website,
      		Branches: Branches != null && Branches.length > 0 ? Branches : null,
      		Products: Products != null && Products.length > 0 ? Products : null,
      		Customers: Customers != null && Customers.length > 0 ? Customers : null,
      		Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      		PaymentCards: PaymentCards != null && PaymentCards.length > 0 ? PaymentCards : null,
      		LoanAccounts: LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
      		ExchangeRates: ExchangeRates != null && ExchangeRates.length > 0 ? ExchangeRates : null,
      		Consents: Consents != null && Consents.length > 0 ? Consents : null,
			ThirdPartyProviders: ThirdPartyProviders != null && ThirdPartyProviders.length > 0 ? ThirdPartyProviders : null
			};
		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteBank(id)  : Observable<any> {
		const uri = this.apiUrl + '/Bank/delete/' + id;

		return this.http.get(uri);
	}

		
		//********************************************************************
	// adds one or more branchesIds as a Branches
	// to a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addBranches( bankId, branchesIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );

	// split on a comma with no spaces
	var idList = branchesIds.split(',')

	// iterate over array of branches ids
	idList.forEach(function (id) {
		// read the Branch
		var branch = new BranchService(this.http).editBranch(id);
		// add the Branch if not already assigned
		if ( this.bank.branches.indexOf(branch) == -1 )
		this.bank.branches.push(branch);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more branchesIds as a Branches
	// from a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeBranches( bankId, branchesIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );


	// split on a comma with no spaces
	var idList 					= branchesIds.split(',');
	var branches 	= this.bank.branches;

	if ( branches != null && branchesIds != null ) {

		// iterate over array of branches ids
		branches.forEach(function (obj) {
			if ( branchesIds.indexOf(obj._id) > -1 ) {
				// remove the Branch
				this.bank.branches.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more productsIds as a Products
	// to a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addProducts( bankId, productsIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );

	// split on a comma with no spaces
	var idList = productsIds.split(',')

	// iterate over array of products ids
	idList.forEach(function (id) {
		// read the BankingProduct
		var bankingProduct = new BankingProductService(this.http).editBankingProduct(id);
		// add the BankingProduct if not already assigned
		if ( this.bank.products.indexOf(bankingProduct) == -1 )
		this.bank.products.push(bankingProduct);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more productsIds as a Products
	// from a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeProducts( bankId, productsIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );


	// split on a comma with no spaces
	var idList 					= productsIds.split(',');
	var products 	= this.bank.products;

	if ( products != null && productsIds != null ) {

		// iterate over array of products ids
		products.forEach(function (obj) {
			if ( productsIds.indexOf(obj._id) > -1 ) {
				// remove the BankingProduct
				this.bank.products.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more customersIds as a Customers
	// to a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addCustomers( bankId, customersIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );

	// split on a comma with no spaces
	var idList = customersIds.split(',')

	// iterate over array of customers ids
	idList.forEach(function (id) {
		// read the Customer
		var customer = new CustomerService(this.http).editCustomer(id);
		// add the Customer if not already assigned
		if ( this.bank.customers.indexOf(customer) == -1 )
		this.bank.customers.push(customer);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more customersIds as a Customers
	// from a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeCustomers( bankId, customersIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );


	// split on a comma with no spaces
	var idList 					= customersIds.split(',');
	var customers 	= this.bank.customers;

	if ( customers != null && customersIds != null ) {

		// iterate over array of customers ids
		customers.forEach(function (obj) {
			if ( customersIds.indexOf(obj._id) > -1 ) {
				// remove the Customer
				this.bank.customers.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more accountsIds as a Accounts
	// to a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addAccounts( bankId, accountsIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );

	// split on a comma with no spaces
	var idList = accountsIds.split(',')

	// iterate over array of accounts ids
	idList.forEach(function (id) {
		// read the Account
		var account = new AccountService(this.http).editAccount(id);
		// add the Account if not already assigned
		if ( this.bank.accounts.indexOf(account) == -1 )
		this.bank.accounts.push(account);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more accountsIds as a Accounts
	// from a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeAccounts( bankId, accountsIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );


	// split on a comma with no spaces
	var idList 					= accountsIds.split(',');
	var accounts 	= this.bank.accounts;

	if ( accounts != null && accountsIds != null ) {

		// iterate over array of accounts ids
		accounts.forEach(function (obj) {
			if ( accountsIds.indexOf(obj._id) > -1 ) {
				// remove the Account
				this.bank.accounts.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more paymentCardsIds as a PaymentCards
	// to a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addPaymentCards( bankId, paymentCardsIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );

	// split on a comma with no spaces
	var idList = paymentCardsIds.split(',')

	// iterate over array of paymentCards ids
	idList.forEach(function (id) {
		// read the PaymentCard
		var paymentCard = new PaymentCardService(this.http).editPaymentCard(id);
		// add the PaymentCard if not already assigned
		if ( this.bank.paymentCards.indexOf(paymentCard) == -1 )
		this.bank.paymentCards.push(paymentCard);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more paymentCardsIds as a PaymentCards
	// from a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removePaymentCards( bankId, paymentCardsIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );


	// split on a comma with no spaces
	var idList 					= paymentCardsIds.split(',');
	var paymentCards 	= this.bank.paymentCards;

	if ( paymentCards != null && paymentCardsIds != null ) {

		// iterate over array of paymentCards ids
		paymentCards.forEach(function (obj) {
			if ( paymentCardsIds.indexOf(obj._id) > -1 ) {
				// remove the PaymentCard
				this.bank.paymentCards.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more loanAccountsIds as a LoanAccounts
	// to a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addLoanAccounts( bankId, loanAccountsIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );

	// split on a comma with no spaces
	var idList = loanAccountsIds.split(',')

	// iterate over array of loanAccounts ids
	idList.forEach(function (id) {
		// read the LoanAccount
		var loanAccount = new LoanAccountService(this.http).editLoanAccount(id);
		// add the LoanAccount if not already assigned
		if ( this.bank.loanAccounts.indexOf(loanAccount) == -1 )
		this.bank.loanAccounts.push(loanAccount);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more loanAccountsIds as a LoanAccounts
	// from a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeLoanAccounts( bankId, loanAccountsIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );


	// split on a comma with no spaces
	var idList 					= loanAccountsIds.split(',');
	var loanAccounts 	= this.bank.loanAccounts;

	if ( loanAccounts != null && loanAccountsIds != null ) {

		// iterate over array of loanAccounts ids
		loanAccounts.forEach(function (obj) {
			if ( loanAccountsIds.indexOf(obj._id) > -1 ) {
				// remove the LoanAccount
				this.bank.loanAccounts.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more exchangeRatesIds as a ExchangeRates
	// to a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addExchangeRates( bankId, exchangeRatesIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );

	// split on a comma with no spaces
	var idList = exchangeRatesIds.split(',')

	// iterate over array of exchangeRates ids
	idList.forEach(function (id) {
		// read the ExchangeRate
		var exchangeRate = new ExchangeRateService(this.http).editExchangeRate(id);
		// add the ExchangeRate if not already assigned
		if ( this.bank.exchangeRates.indexOf(exchangeRate) == -1 )
		this.bank.exchangeRates.push(exchangeRate);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more exchangeRatesIds as a ExchangeRates
	// from a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeExchangeRates( bankId, exchangeRatesIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );


	// split on a comma with no spaces
	var idList 					= exchangeRatesIds.split(',');
	var exchangeRates 	= this.bank.exchangeRates;

	if ( exchangeRates != null && exchangeRatesIds != null ) {

		// iterate over array of exchangeRates ids
		exchangeRates.forEach(function (obj) {
			if ( exchangeRatesIds.indexOf(obj._id) > -1 ) {
				// remove the ExchangeRate
				this.bank.exchangeRates.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more consentsIds as a Consents
	// to a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addConsents( bankId, consentsIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );

	// split on a comma with no spaces
	var idList = consentsIds.split(',')

	// iterate over array of consents ids
	idList.forEach(function (id) {
		// read the Consent
		var consent = new ConsentService(this.http).editConsent(id);
		// add the Consent if not already assigned
		if ( this.bank.consents.indexOf(consent) == -1 )
		this.bank.consents.push(consent);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more consentsIds as a Consents
	// from a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeConsents( bankId, consentsIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );


	// split on a comma with no spaces
	var idList 					= consentsIds.split(',');
	var consents 	= this.bank.consents;

	if ( consents != null && consentsIds != null ) {

		// iterate over array of consents ids
		consents.forEach(function (obj) {
			if ( consentsIds.indexOf(obj._id) > -1 ) {
				// remove the Consent
				this.bank.consents.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more thirdPartyProvidersIds as a ThirdPartyProviders
	// to a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addThirdPartyProviders( bankId, thirdPartyProvidersIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );

	// split on a comma with no spaces
	var idList = thirdPartyProvidersIds.split(',')

	// iterate over array of thirdPartyProviders ids
	idList.forEach(function (id) {
		// read the ThirdPartyProvider
		var thirdPartyProvider = new ThirdPartyProviderService(this.http).editThirdPartyProvider(id);
		// add the ThirdPartyProvider if not already assigned
		if ( this.bank.thirdPartyProviders.indexOf(thirdPartyProvider) == -1 )
		this.bank.thirdPartyProviders.push(thirdPartyProvider);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more thirdPartyProvidersIds as a ThirdPartyProviders
	// from a Bank
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeThirdPartyProviders( bankId, thirdPartyProvidersIds ): Observable<any> {

		// get the Bank
		this.loadHelper( bankId );


	// split on a comma with no spaces
	var idList 					= thirdPartyProvidersIds.split(',');
	var thirdPartyProviders 	= this.bank.thirdPartyProviders;

	if ( thirdPartyProviders != null && thirdPartyProvidersIds != null ) {

		// iterate over array of thirdPartyProviders ids
		thirdPartyProviders.forEach(function (obj) {
			if ( thirdPartyProvidersIds.indexOf(obj._id) > -1 ) {
				// remove the ThirdPartyProvider
				this.bank.thirdPartyProviders.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

	
	//********************************************************************
	// saveHelper - internal helper to save a Bank
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri = this.apiUrl + '/Bank/update/' + this.bank;

	return  this.http.post(uri, this.bank );
}

	//********************************************************************
	// loadHelper - internal helper to load a Bank
	//********************************************************************	
	loadHelper( id ) {
		this.editBank(id)
			.subscribe((res : Bank) => {
				this.bank = res;
			});
	}
}
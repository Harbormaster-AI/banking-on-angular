import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Customer} from '../models/Customer';
import {BankService} from '../services/Bank.service';
import {AccountService} from '../services/Account.service';
import {LoanAccountService} from '../services/LoanAccount.service';
import {PaymentCardService} from '../services/PaymentCard.service';
import {ExternalAccountService} from '../services/ExternalAccount.service';
import {FundsTransferService} from '../services/FundsTransfer.service';
import {DisputeService} from '../services/Dispute.service';
import {KycProfileService} from '../services/KycProfile.service';
import {ConsentService} from '../services/Consent.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class CustomerService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	customer : Customer;

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
	// add a Customer
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addCustomer(firstName, lastName, legalName, dateOfBirth, taxId, email, phone, address, Bank, Accounts, LoanAccounts, PaymentCards, ExternalAccounts, FundsTransfers, Disputes, KycProfiles, Consents, CustomerType, RiskRating, KycStatus) : Observable<any> {
		const uri = this.apiUrl + '/Customer/add';
		const obj = {
			      		firstName: firstName,
      		lastName: lastName,
      		legalName: legalName,
      		dateOfBirth: dateOfBirth,
      		taxId: taxId,
      		email: email,
      		phone: phone,
      		address: address,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      		LoanAccounts: LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
      		PaymentCards: PaymentCards != null && PaymentCards.length > 0 ? PaymentCards : null,
      		ExternalAccounts: ExternalAccounts != null && ExternalAccounts.length > 0 ? ExternalAccounts : null,
      		FundsTransfers: FundsTransfers != null && FundsTransfers.length > 0 ? FundsTransfers : null,
      		Disputes: Disputes != null && Disputes.length > 0 ? Disputes : null,
      		KycProfiles: KycProfiles != null && KycProfiles.length > 0 ? KycProfiles : null,
      		Consents: Consents != null && Consents.length > 0 ? Consents : null,
      		CustomerType: CustomerType,
      		RiskRating: RiskRating,
			KycStatus: KycStatus
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all Customer
	// returns the results untouched as JSON representation of an
	// array of Customer models
	// delegates via URI to an ORM handler
	//********************************************************************
	getCustomers() : Observable<Customer[]> {
		const uri = this.apiUrl + '/Customer';

		return this
			.http.get<Customer[]>(uri);
	}

	//********************************************************************
	// edit a Customer
	// returns the results untouched as a JSON representation of a
	// Customer model
	// delegates via URI to an ORM handler
	//********************************************************************
	editCustomer(id) : Observable<Customer> {
		const uri = this.apiUrl + '/Customer/edit/' + id;

		return this.http.get(<Customer>)(uri);
	}

	//********************************************************************
	// update a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
		updateCustomer(firstName, lastName, legalName, dateOfBirth, taxId, email, phone, address, Bank, Accounts, LoanAccounts, PaymentCards, ExternalAccounts, FundsTransfers, Disputes, KycProfiles, Consents, CustomerType, RiskRating, KycStatus, id)  :  Observable<any>  {
				const uri = this.apiUrl + '/Customer/update/' + id;
			const obj = {
				      		firstName: firstName,
      		lastName: lastName,
      		legalName: legalName,
      		dateOfBirth: dateOfBirth,
      		taxId: taxId,
      		email: email,
      		phone: phone,
      		address: address,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      		LoanAccounts: LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
      		PaymentCards: PaymentCards != null && PaymentCards.length > 0 ? PaymentCards : null,
      		ExternalAccounts: ExternalAccounts != null && ExternalAccounts.length > 0 ? ExternalAccounts : null,
      		FundsTransfers: FundsTransfers != null && FundsTransfers.length > 0 ? FundsTransfers : null,
      		Disputes: Disputes != null && Disputes.length > 0 ? Disputes : null,
      		KycProfiles: KycProfiles != null && KycProfiles.length > 0 ? KycProfiles : null,
      		Consents: Consents != null && Consents.length > 0 ? Consents : null,
      		CustomerType: CustomerType,
      		RiskRating: RiskRating,
			KycStatus: KycStatus
			};
		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteCustomer(id)  : Observable<any> {
		const uri = this.apiUrl + '/Customer/delete/' + id;

		return this.http.get(uri);
	}

			//********************************************************************
	// assigns a Bank on a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBank( customerId, _bankId ): Promise<any> {

		// get the Customer from storage
		this.loadHelper( customerId );

	// get the Bank from storage
	var tmp 	= new BankService(this.http).editBank(_bankId);

	// assign the Bank
	this.customer.bank = tmp;

	// save the Customer
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Bank on a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignBank( customerId ): Promise<any> {

		// get the Customer from storage
		this.loadHelper( customerId );

	// assign Bank to null
	this.customer.bank = null;

	// save the Customer
	return this.saveHelper();
}

	
		//********************************************************************
	// adds one or more accountsIds as a Accounts
	// to a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addAccounts( customerId, accountsIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );

	// split on a comma with no spaces
	var idList = accountsIds.split(',')

	// iterate over array of accounts ids
	idList.forEach(function (id) {
		// read the Account
		var account = new AccountService(this.http).editAccount(id);
		// add the Account if not already assigned
		if ( this.customer.accounts.indexOf(account) == -1 )
		this.customer.accounts.push(account);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more accountsIds as a Accounts
	// from a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeAccounts( customerId, accountsIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );


	// split on a comma with no spaces
	var idList 					= accountsIds.split(',');
	var accounts 	= this.customer.accounts;

	if ( accounts != null && accountsIds != null ) {

		// iterate over array of accounts ids
		accounts.forEach(function (obj) {
			if ( accountsIds.indexOf(obj._id) > -1 ) {
				// remove the Account
				this.customer.accounts.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more loanAccountsIds as a LoanAccounts
	// to a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addLoanAccounts( customerId, loanAccountsIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );

	// split on a comma with no spaces
	var idList = loanAccountsIds.split(',')

	// iterate over array of loanAccounts ids
	idList.forEach(function (id) {
		// read the LoanAccount
		var loanAccount = new LoanAccountService(this.http).editLoanAccount(id);
		// add the LoanAccount if not already assigned
		if ( this.customer.loanAccounts.indexOf(loanAccount) == -1 )
		this.customer.loanAccounts.push(loanAccount);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more loanAccountsIds as a LoanAccounts
	// from a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeLoanAccounts( customerId, loanAccountsIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );


	// split on a comma with no spaces
	var idList 					= loanAccountsIds.split(',');
	var loanAccounts 	= this.customer.loanAccounts;

	if ( loanAccounts != null && loanAccountsIds != null ) {

		// iterate over array of loanAccounts ids
		loanAccounts.forEach(function (obj) {
			if ( loanAccountsIds.indexOf(obj._id) > -1 ) {
				// remove the LoanAccount
				this.customer.loanAccounts.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more paymentCardsIds as a PaymentCards
	// to a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addPaymentCards( customerId, paymentCardsIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );

	// split on a comma with no spaces
	var idList = paymentCardsIds.split(',')

	// iterate over array of paymentCards ids
	idList.forEach(function (id) {
		// read the PaymentCard
		var paymentCard = new PaymentCardService(this.http).editPaymentCard(id);
		// add the PaymentCard if not already assigned
		if ( this.customer.paymentCards.indexOf(paymentCard) == -1 )
		this.customer.paymentCards.push(paymentCard);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more paymentCardsIds as a PaymentCards
	// from a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removePaymentCards( customerId, paymentCardsIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );


	// split on a comma with no spaces
	var idList 					= paymentCardsIds.split(',');
	var paymentCards 	= this.customer.paymentCards;

	if ( paymentCards != null && paymentCardsIds != null ) {

		// iterate over array of paymentCards ids
		paymentCards.forEach(function (obj) {
			if ( paymentCardsIds.indexOf(obj._id) > -1 ) {
				// remove the PaymentCard
				this.customer.paymentCards.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more externalAccountsIds as a ExternalAccounts
	// to a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addExternalAccounts( customerId, externalAccountsIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );

	// split on a comma with no spaces
	var idList = externalAccountsIds.split(',')

	// iterate over array of externalAccounts ids
	idList.forEach(function (id) {
		// read the ExternalAccount
		var externalAccount = new ExternalAccountService(this.http).editExternalAccount(id);
		// add the ExternalAccount if not already assigned
		if ( this.customer.externalAccounts.indexOf(externalAccount) == -1 )
		this.customer.externalAccounts.push(externalAccount);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more externalAccountsIds as a ExternalAccounts
	// from a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeExternalAccounts( customerId, externalAccountsIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );


	// split on a comma with no spaces
	var idList 					= externalAccountsIds.split(',');
	var externalAccounts 	= this.customer.externalAccounts;

	if ( externalAccounts != null && externalAccountsIds != null ) {

		// iterate over array of externalAccounts ids
		externalAccounts.forEach(function (obj) {
			if ( externalAccountsIds.indexOf(obj._id) > -1 ) {
				// remove the ExternalAccount
				this.customer.externalAccounts.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more fundsTransfersIds as a FundsTransfers
	// to a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addFundsTransfers( customerId, fundsTransfersIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );

	// split on a comma with no spaces
	var idList = fundsTransfersIds.split(',')

	// iterate over array of fundsTransfers ids
	idList.forEach(function (id) {
		// read the FundsTransfer
		var fundsTransfer = new FundsTransferService(this.http).editFundsTransfer(id);
		// add the FundsTransfer if not already assigned
		if ( this.customer.fundsTransfers.indexOf(fundsTransfer) == -1 )
		this.customer.fundsTransfers.push(fundsTransfer);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more fundsTransfersIds as a FundsTransfers
	// from a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeFundsTransfers( customerId, fundsTransfersIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );


	// split on a comma with no spaces
	var idList 					= fundsTransfersIds.split(',');
	var fundsTransfers 	= this.customer.fundsTransfers;

	if ( fundsTransfers != null && fundsTransfersIds != null ) {

		// iterate over array of fundsTransfers ids
		fundsTransfers.forEach(function (obj) {
			if ( fundsTransfersIds.indexOf(obj._id) > -1 ) {
				// remove the FundsTransfer
				this.customer.fundsTransfers.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more disputesIds as a Disputes
	// to a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addDisputes( customerId, disputesIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );

	// split on a comma with no spaces
	var idList = disputesIds.split(',')

	// iterate over array of disputes ids
	idList.forEach(function (id) {
		// read the Dispute
		var dispute = new DisputeService(this.http).editDispute(id);
		// add the Dispute if not already assigned
		if ( this.customer.disputes.indexOf(dispute) == -1 )
		this.customer.disputes.push(dispute);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more disputesIds as a Disputes
	// from a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeDisputes( customerId, disputesIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );


	// split on a comma with no spaces
	var idList 					= disputesIds.split(',');
	var disputes 	= this.customer.disputes;

	if ( disputes != null && disputesIds != null ) {

		// iterate over array of disputes ids
		disputes.forEach(function (obj) {
			if ( disputesIds.indexOf(obj._id) > -1 ) {
				// remove the Dispute
				this.customer.disputes.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more kycProfilesIds as a KycProfiles
	// to a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addKycProfiles( customerId, kycProfilesIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );

	// split on a comma with no spaces
	var idList = kycProfilesIds.split(',')

	// iterate over array of kycProfiles ids
	idList.forEach(function (id) {
		// read the KycProfile
		var kycProfile = new KycProfileService(this.http).editKycProfile(id);
		// add the KycProfile if not already assigned
		if ( this.customer.kycProfiles.indexOf(kycProfile) == -1 )
		this.customer.kycProfiles.push(kycProfile);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more kycProfilesIds as a KycProfiles
	// from a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeKycProfiles( customerId, kycProfilesIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );


	// split on a comma with no spaces
	var idList 					= kycProfilesIds.split(',');
	var kycProfiles 	= this.customer.kycProfiles;

	if ( kycProfiles != null && kycProfilesIds != null ) {

		// iterate over array of kycProfiles ids
		kycProfiles.forEach(function (obj) {
			if ( kycProfilesIds.indexOf(obj._id) > -1 ) {
				// remove the KycProfile
				this.customer.kycProfiles.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more consentsIds as a Consents
	// to a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addConsents( customerId, consentsIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );

	// split on a comma with no spaces
	var idList = consentsIds.split(',')

	// iterate over array of consents ids
	idList.forEach(function (id) {
		// read the Consent
		var consent = new ConsentService(this.http).editConsent(id);
		// add the Consent if not already assigned
		if ( this.customer.consents.indexOf(consent) == -1 )
		this.customer.consents.push(consent);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more consentsIds as a Consents
	// from a Customer
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeConsents( customerId, consentsIds ): Promise<any> {

		// get the Customer
		this.loadHelper( customerId );


	// split on a comma with no spaces
	var idList 					= consentsIds.split(',');
	var consents 	= this.customer.consents;

	if ( consents != null && consentsIds != null ) {

		// iterate over array of consents ids
		consents.forEach(function (obj) {
			if ( consentsIds.indexOf(obj._id) > -1 ) {
				// remove the Consent
				this.customer.consents.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

	
	//********************************************************************
	// saveHelper - internal helper to save a Customer
	//********************************************************************
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/Customer/update/' + this.customer;

	return  this.http.post(uri, this.customer );
}

	//********************************************************************
	// loadHelper - internal helper to load a Customer
	//********************************************************************	
	loadHelper( id ) {
		this.editCustomer(id)
			.subscribe(res : Customer => {
				this.customer = res;
			});
	}
}
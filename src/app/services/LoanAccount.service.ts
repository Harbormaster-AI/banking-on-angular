import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {LoanAccount} from '../models/LoanAccount';
import {BankService} from '../services/Bank.service';
import {BranchService} from '../services/Branch.service';
import {BankingProductService} from '../services/BankingProduct.service';
import {CustomerService} from '../services/Customer.service';
import {RepaymentScheduleService} from '../services/RepaymentSchedule.service';
import {LoanPaymentService} from '../services/LoanPayment.service';
import {CollateralService} from '../services/Collateral.service';
import {FeeChargeService} from '../services/FeeCharge.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class LoanAccountService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	loanAccount : LoanAccount;

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
	// add a LoanAccount
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addLoanAccount(loanNumber, principalAmount, outstandingPrincipal, interestRate, originationDate, maturityDate, paymentDayOfMonth, currency, Bank, Branch, Product, Borrowers, RepaymentSchedule, Payments, Collateral, FeeCharges, LoanType, RateType, Compounding, Status) : Observable<any> {
		const uri = this.apiUrl + '/LoanAccount/add';
		const obj = {
			      		loanNumber: loanNumber,
      		principalAmount: principalAmount,
      		outstandingPrincipal: outstandingPrincipal,
      		interestRate: interestRate,
      		originationDate: originationDate,
      		maturityDate: maturityDate,
      		paymentDayOfMonth: paymentDayOfMonth,
      		currency: currency,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Branch: Branch != null && Branch.length > 0 ? Branch : null,
      		Product: Product != null && Product.length > 0 ? Product : null,
      		Borrowers: Borrowers != null && Borrowers.length > 0 ? Borrowers : null,
      		RepaymentSchedule: RepaymentSchedule != null && RepaymentSchedule.length > 0 ? RepaymentSchedule : null,
      		Payments: Payments != null && Payments.length > 0 ? Payments : null,
      		Collateral: Collateral != null && Collateral.length > 0 ? Collateral : null,
      		FeeCharges: FeeCharges != null && FeeCharges.length > 0 ? FeeCharges : null,
      		LoanType: LoanType,
      		RateType: RateType,
      		Compounding: Compounding,
			Status: Status
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all LoanAccount
	// returns the results untouched as JSON representation of an
	// array of LoanAccount models
	// delegates via URI to an ORM handler
	//********************************************************************
	getLoanAccounts() : Observable<LoanAccount[]> {
		const uri = this.apiUrl + '/LoanAccount';

		return this
			.http.get<LoanAccount[]>(uri);
	}

	//********************************************************************
	// edit a LoanAccount
	// returns the results untouched as a JSON representation of a
	// LoanAccount model
	// delegates via URI to an ORM handler
	//********************************************************************
	editLoanAccount(id) : Observable<LoanAccount> {
		const uri = this.apiUrl + '/LoanAccount/edit/' + id;

		return this.http.get<LoanAccount>(uri);
	}

	//********************************************************************
	// update a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
		updateLoanAccount(loanNumber, principalAmount, outstandingPrincipal, interestRate, originationDate, maturityDate, paymentDayOfMonth, currency, Bank, Branch, Product, Borrowers, RepaymentSchedule, Payments, Collateral, FeeCharges, LoanType, RateType, Compounding, Status, id)  :  Observable<any>  {
				const uri = this.apiUrl + '/LoanAccount/update/' + id;
			const obj = {
				      		loanNumber: loanNumber,
      		principalAmount: principalAmount,
      		outstandingPrincipal: outstandingPrincipal,
      		interestRate: interestRate,
      		originationDate: originationDate,
      		maturityDate: maturityDate,
      		paymentDayOfMonth: paymentDayOfMonth,
      		currency: currency,
      		Bank: Bank != null && Bank.length > 0 ? Bank : null,
      		Branch: Branch != null && Branch.length > 0 ? Branch : null,
      		Product: Product != null && Product.length > 0 ? Product : null,
      		Borrowers: Borrowers != null && Borrowers.length > 0 ? Borrowers : null,
      		RepaymentSchedule: RepaymentSchedule != null && RepaymentSchedule.length > 0 ? RepaymentSchedule : null,
      		Payments: Payments != null && Payments.length > 0 ? Payments : null,
      		Collateral: Collateral != null && Collateral.length > 0 ? Collateral : null,
      		FeeCharges: FeeCharges != null && FeeCharges.length > 0 ? FeeCharges : null,
      		LoanType: LoanType,
      		RateType: RateType,
      		Compounding: Compounding,
			Status: Status
			};
		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteLoanAccount(id)  : Observable<any> {
		const uri = this.apiUrl + '/LoanAccount/delete/' + id;

		return this.http.get(uri);
	}

			//********************************************************************
	// assigns a Bank on a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBank( loanAccountId, _bankId ): Promise<any> {

		// get the LoanAccount from storage
		this.loadHelper( loanAccountId );

	// get the Bank from storage
	var tmp 	= new BankService(this.http).editBank(_bankId);

	// assign the Bank
	this.loanAccount.bank = tmp;

	// save the LoanAccount
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Bank on a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignBank( loanAccountId ): Promise<any> {

		// get the LoanAccount from storage
		this.loadHelper( loanAccountId );

	// assign Bank to null
	this.loanAccount.bank = null;

	// save the LoanAccount
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Branch on a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignBranch( loanAccountId, _branchId ): Promise<any> {

		// get the LoanAccount from storage
		this.loadHelper( loanAccountId );

	// get the Branch from storage
	var tmp 	= new BranchService(this.http).editBranch(_branchId);

	// assign the Branch
	this.loanAccount.branch = tmp;

	// save the LoanAccount
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Branch on a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignBranch( loanAccountId ): Promise<any> {

		// get the LoanAccount from storage
		this.loadHelper( loanAccountId );

	// assign Branch to null
	this.loanAccount.branch = null;

	// save the LoanAccount
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Product on a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignProduct( loanAccountId, _productId ): Promise<any> {

		// get the LoanAccount from storage
		this.loadHelper( loanAccountId );

	// get the BankingProduct from storage
	var tmp 	= new BankingProductService(this.http).editBankingProduct(_productId);

	// assign the Product
	this.loanAccount.product = tmp;

	// save the LoanAccount
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Product on a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignProduct( loanAccountId ): Promise<any> {

		// get the LoanAccount from storage
		this.loadHelper( loanAccountId );

	// assign Product to null
	this.loanAccount.product = null;

	// save the LoanAccount
	return this.saveHelper();
}

	
		//********************************************************************
	// adds one or more borrowersIds as a Borrowers
	// to a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addBorrowers( loanAccountId, borrowersIds ): Promise<any> {

		// get the LoanAccount
		this.loadHelper( loanAccountId );

	// split on a comma with no spaces
	var idList = borrowersIds.split(',')

	// iterate over array of borrowers ids
	idList.forEach(function (id) {
		// read the Customer
		var customer = new CustomerService(this.http).editCustomer(id);
		// add the Customer if not already assigned
		if ( this.loanAccount.borrowers.indexOf(customer) == -1 )
		this.loanAccount.borrowers.push(customer);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more borrowersIds as a Borrowers
	// from a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeBorrowers( loanAccountId, borrowersIds ): Promise<any> {

		// get the LoanAccount
		this.loadHelper( loanAccountId );


	// split on a comma with no spaces
	var idList 					= borrowersIds.split(',');
	var borrowers 	= this.loanAccount.borrowers;

	if ( borrowers != null && borrowersIds != null ) {

		// iterate over array of borrowers ids
		borrowers.forEach(function (obj) {
			if ( borrowersIds.indexOf(obj._id) > -1 ) {
				// remove the Customer
				this.loanAccount.borrowers.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more repaymentScheduleIds as a RepaymentSchedule
	// to a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addRepaymentSchedule( loanAccountId, repaymentScheduleIds ): Promise<any> {

		// get the LoanAccount
		this.loadHelper( loanAccountId );

	// split on a comma with no spaces
	var idList = repaymentScheduleIds.split(',')

	// iterate over array of repaymentSchedule ids
	idList.forEach(function (id) {
		// read the RepaymentSchedule
		var repaymentSchedule = new RepaymentScheduleService(this.http).editRepaymentSchedule(id);
		// add the RepaymentSchedule if not already assigned
		if ( this.loanAccount.repaymentSchedule.indexOf(repaymentSchedule) == -1 )
		this.loanAccount.repaymentSchedule.push(repaymentSchedule);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more repaymentScheduleIds as a RepaymentSchedule
	// from a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeRepaymentSchedule( loanAccountId, repaymentScheduleIds ): Promise<any> {

		// get the LoanAccount
		this.loadHelper( loanAccountId );


	// split on a comma with no spaces
	var idList 					= repaymentScheduleIds.split(',');
	var repaymentSchedule 	= this.loanAccount.repaymentSchedule;

	if ( repaymentSchedule != null && repaymentScheduleIds != null ) {

		// iterate over array of repaymentSchedule ids
		repaymentSchedule.forEach(function (obj) {
			if ( repaymentScheduleIds.indexOf(obj._id) > -1 ) {
				// remove the RepaymentSchedule
				this.loanAccount.repaymentSchedule.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more paymentsIds as a Payments
	// to a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addPayments( loanAccountId, paymentsIds ): Promise<any> {

		// get the LoanAccount
		this.loadHelper( loanAccountId );

	// split on a comma with no spaces
	var idList = paymentsIds.split(',')

	// iterate over array of payments ids
	idList.forEach(function (id) {
		// read the LoanPayment
		var loanPayment = new LoanPaymentService(this.http).editLoanPayment(id);
		// add the LoanPayment if not already assigned
		if ( this.loanAccount.payments.indexOf(loanPayment) == -1 )
		this.loanAccount.payments.push(loanPayment);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more paymentsIds as a Payments
	// from a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removePayments( loanAccountId, paymentsIds ): Promise<any> {

		// get the LoanAccount
		this.loadHelper( loanAccountId );


	// split on a comma with no spaces
	var idList 					= paymentsIds.split(',');
	var payments 	= this.loanAccount.payments;

	if ( payments != null && paymentsIds != null ) {

		// iterate over array of payments ids
		payments.forEach(function (obj) {
			if ( paymentsIds.indexOf(obj._id) > -1 ) {
				// remove the LoanPayment
				this.loanAccount.payments.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more collateralIds as a Collateral
	// to a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addCollateral( loanAccountId, collateralIds ): Promise<any> {

		// get the LoanAccount
		this.loadHelper( loanAccountId );

	// split on a comma with no spaces
	var idList = collateralIds.split(',')

	// iterate over array of collateral ids
	idList.forEach(function (id) {
		// read the Collateral
		var collateral = new CollateralService(this.http).editCollateral(id);
		// add the Collateral if not already assigned
		if ( this.loanAccount.collateral.indexOf(collateral) == -1 )
		this.loanAccount.collateral.push(collateral);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more collateralIds as a Collateral
	// from a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeCollateral( loanAccountId, collateralIds ): Promise<any> {

		// get the LoanAccount
		this.loadHelper( loanAccountId );


	// split on a comma with no spaces
	var idList 					= collateralIds.split(',');
	var collateral 	= this.loanAccount.collateral;

	if ( collateral != null && collateralIds != null ) {

		// iterate over array of collateral ids
		collateral.forEach(function (obj) {
			if ( collateralIds.indexOf(obj._id) > -1 ) {
				// remove the Collateral
				this.loanAccount.collateral.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

		//********************************************************************
	// adds one or more feeChargesIds as a FeeCharges
	// to a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	addFeeCharges( loanAccountId, feeChargesIds ): Promise<any> {

		// get the LoanAccount
		this.loadHelper( loanAccountId );

	// split on a comma with no spaces
	var idList = feeChargesIds.split(',')

	// iterate over array of feeCharges ids
	idList.forEach(function (id) {
		// read the FeeCharge
		var feeCharge = new FeeChargeService(this.http).editFeeCharge(id);
		// add the FeeCharge if not already assigned
		if ( this.loanAccount.feeCharges.indexOf(feeCharge) == -1 )
		this.loanAccount.feeCharges.push(feeCharge);
	});

	// save it
	return this.saveHelper();
}

	//********************************************************************
	// removes one or more feeChargesIds as a FeeCharges
	// from a LoanAccount
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	removeFeeCharges( loanAccountId, feeChargesIds ): Promise<any> {

		// get the LoanAccount
		this.loadHelper( loanAccountId );


	// split on a comma with no spaces
	var idList 					= feeChargesIds.split(',');
	var feeCharges 	= this.loanAccount.feeCharges;

	if ( feeCharges != null && feeChargesIds != null ) {

		// iterate over array of feeCharges ids
		feeCharges.forEach(function (obj) {
			if ( feeChargesIds.indexOf(obj._id) > -1 ) {
				// remove the FeeCharge
				this.loanAccount.feeCharges.pop(obj);
			}
		});

		// save it
		return this.saveHelper();
	}
}

	
	//********************************************************************
	// saveHelper - internal helper to save a LoanAccount
	//********************************************************************
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/LoanAccount/update/' + this.loanAccount;

	return  this.http.post(uri, this.loanAccount );
}

	//********************************************************************
	// loadHelper - internal helper to load a LoanAccount
	//********************************************************************	
	loadHelper( id ) {
		this.editLoanAccount(id)
			.subscribe(res : LoanAccount => {
				this.loanAccount = res;
			});
	}
}
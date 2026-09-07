import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Transaction} from '../models/Transaction';
import {AccountService} from '../services/Account.service';
import {ExternalAccountService} from '../services/ExternalAccount.service';
import {PaymentCardService} from '../services/PaymentCard.service';
import {FundsTransferService} from '../services/FundsTransfer.service';
import {FXTradeService} from '../services/FXTrade.service';
import {DisputeService} from '../services/Dispute.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class TransactionService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	transaction : Transaction;

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
	// add a Transaction
	// returns the results untouched as a JSON representation
	// delegates via URI
	//********************************************************************
	addTransaction(bookingDate, valueDate, amount, description, Account, ExternalCounterparty, PaymentCard, FundsTransfer, FxTrade, Dispute, Direction, TransactionType, Status, Channel) : Observable<any> {
		const uri_ = this.apiUrl + '/Transaction/create';
		const obj = {
			      		bookingDate: bookingDate,
      		valueDate: valueDate,
      		amount: amount,
      		description: description,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		ExternalCounterparty: ExternalCounterparty != null && ExternalCounterparty.length > 0 ? ExternalCounterparty : null,
      		PaymentCard: PaymentCard != null && PaymentCard.length > 0 ? PaymentCard : null,
      		FundsTransfer: FundsTransfer != null && FundsTransfer.length > 0 ? FundsTransfer : null,
      		FxTrade: FxTrade != null && FxTrade.length > 0 ? FxTrade : null,
      		Dispute: Dispute != null && Dispute.length > 0 ? Dispute : null,
      		Direction: Direction,
      		TransactionType: TransactionType,
      		Status: Status,
			Channel: Channel
		};

		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// update a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateTransaction(bookingDate, valueDate, amount, description, Account, ExternalCounterparty, PaymentCard, FundsTransfer, FxTrade, Dispute, Direction, TransactionType, Status, Channel, id)  :  Observable<any>  {
			const uri_ = this.apiUrl + '/Transaction/update/' + id;
		const obj = {
				      		bookingDate: bookingDate,
      		valueDate: valueDate,
      		amount: amount,
      		description: description,
      		Account: Account != null && Account.length > 0 ? Account : null,
      		ExternalCounterparty: ExternalCounterparty != null && ExternalCounterparty.length > 0 ? ExternalCounterparty : null,
      		PaymentCard: PaymentCard != null && PaymentCard.length > 0 ? PaymentCard : null,
      		FundsTransfer: FundsTransfer != null && FundsTransfer.length > 0 ? FundsTransfer : null,
      		FxTrade: FxTrade != null && FxTrade.length > 0 ? FxTrade : null,
      		Dispute: Dispute != null && Dispute.length > 0 ? Dispute : null,
      		Direction: Direction,
      		TransactionType: TransactionType,
      		Status: Status,
			Channel: Channel
		};
		return this.http.post(uri_, obj);
	}

	//********************************************************************
	// delete a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteTransaction(id)  : Observable<any> {
		const uri_ = this.apiUrl + '/Transaction/delete/' + id;

		return this.http.get(uri_);
	}
	
	//********************************************************************
	// loads a Transaction
	// returns the results untouched as an Observable Transaction
	// Transaction model
	// delegates via URI
	//********************************************************************
	getTransaction(id) : Observable<Transaction> {
		const uri_ = this.apiUrl + '/Transaction/load/' + id;

		return this.http.get<Transaction>(uri_);
	}
	
	//********************************************************************
	// gets all Transaction
	// returns the results untouched as JSON representation of an
	// Observable array of Transaction models
	// delegates via URI
	//********************************************************************
	getTransactions() : Observable<Transaction[]> {
		const uri_ = this.apiUrl + '/Transaction/';

		return this
			.http.get<Transaction[]>(uri_);
	}
	
			//********************************************************************
	// assigns a Account on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignAccount( transactionId, _accountId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).getAccount(_accountId);

	// assign the Account
	this.transaction.account = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Account on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignAccount( transactionId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// assign Account to null
	this.transaction.account = null;

	// save the Transaction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a ExternalCounterparty on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignExternalCounterparty( transactionId, _externalCounterpartyId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the ExternalAccount from storage
	var tmp 	= new ExternalAccountService(this.http).getExternalAccount(_externalCounterpartyId);

	// assign the ExternalCounterparty
	this.transaction.externalCounterparty = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a ExternalCounterparty on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignExternalCounterparty( transactionId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// assign ExternalCounterparty to null
	this.transaction.externalCounterparty = null;

	// save the Transaction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a PaymentCard on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignPaymentCard( transactionId, _paymentCardId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the PaymentCard from storage
	var tmp 	= new PaymentCardService(this.http).getPaymentCard(_paymentCardId);

	// assign the PaymentCard
	this.transaction.paymentCard = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a PaymentCard on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignPaymentCard( transactionId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// assign PaymentCard to null
	this.transaction.paymentCard = null;

	// save the Transaction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a FundsTransfer on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignFundsTransfer( transactionId, _fundsTransferId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the FundsTransfer from storage
	var tmp 	= new FundsTransferService(this.http).getFundsTransfer(_fundsTransferId);

	// assign the FundsTransfer
	this.transaction.fundsTransfer = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a FundsTransfer on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignFundsTransfer( transactionId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// assign FundsTransfer to null
	this.transaction.fundsTransfer = null;

	// save the Transaction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a FxTrade on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignFxTrade( transactionId, _fxTradeId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the FXTrade from storage
	var tmp 	= new FXTradeService(this.http).getFXTrade(_fxTradeId);

	// assign the FxTrade
	this.transaction.fxTrade = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a FxTrade on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignFxTrade( transactionId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// assign FxTrade to null
	this.transaction.fxTrade = null;

	// save the Transaction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Dispute on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignDispute( transactionId, _disputeId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the Dispute from storage
	var tmp 	= new DisputeService(this.http).getDispute(_disputeId);

	// assign the Dispute
	this.transaction.dispute = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Dispute on a Transaction
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignDispute( transactionId ): Observable<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// assign Dispute to null
	this.transaction.dispute = null;

	// save the Transaction
	return this.saveHelper();
}

	
	
	//********************************************************************
	// saveHelper - internal helper to save a Transaction
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri_ = this.apiUrl + '/Transaction/update/' + this.transaction;

	return  this.http.post(uri_, this.transaction );
}

	//********************************************************************
	// loadHelper - internal helper to load a Transaction
	//********************************************************************	
	loadHelper( id ) {
		this.getTransaction(id)
			.subscribe((res : Transaction) => {
				this.transaction = res;
			});
	}
}
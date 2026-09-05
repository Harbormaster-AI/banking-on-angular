import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
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
	// delegates via URI to an ORM handler
	//********************************************************************
	addTransaction(bookingDate, valueDate, amount, description, Account, ExternalCounterparty, PaymentCard, FundsTransfer, FxTrade, Dispute, Direction, TransactionType, Status, Channel) : Observable<any> {
		const uri = this.apiUrl + '/Transaction/add';
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

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all Transaction
	// returns the results untouched as JSON representation of an
	// array of Transaction models
	// delegates via URI to an ORM handler
	//********************************************************************
	getTransactions() ): Observable<Transaction[]> {
		const uri = this.apiUrl + '/Transaction';

		return this
			.http.get<Transaction[]>(uri);
	}

	//********************************************************************
	// edit a Transaction
	// returns the results untouched as a JSON representation of a
	// Transaction model
	// delegates via URI to an ORM handler
	//********************************************************************
	editTransaction(id) : Observable<Transaction> {
		const uri = this.apiUrl + '/Transaction/edit/' + id;

		return this.http.get(<Transaction>)(uri);
	}

	//********************************************************************
	// update a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
			updateTransaction(bookingDate, valueDate, amount, description, Account, ExternalCounterparty, PaymentCard, FundsTransfer, FxTrade, Dispute, Direction, TransactionType, Status, Channel, id)  :  Observable<any>  {
					const uri = this.apiUrl + '/Transaction/update/' + id;
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
		}
		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteTransaction(id)  : Observable<any> {
		const uri = this.apiUrl + '/Transaction/delete/' + id;

		return this.http.get(uri);
	}

			//********************************************************************
	// assigns a Account on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignAccount( transactionId, _accountId ): Promise<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the Account from storage
	var tmp 	= new AccountService(this.http).editAccount(_accountId);

	// assign the Account
	this.transaction.account = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Account on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignAccount( transactionId ): Promise<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// assign Account to null
	this.transaction.account = null;

	// save the Transaction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a ExternalCounterparty on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignExternalCounterparty( transactionId, _externalCounterpartyId ): Promise<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the ExternalAccount from storage
	var tmp 	= new ExternalAccountService(this.http).editExternalAccount(_externalCounterpartyId);

	// assign the ExternalCounterparty
	this.transaction.externalCounterparty = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a ExternalCounterparty on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignExternalCounterparty( transactionId ): Promise<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// assign ExternalCounterparty to null
	this.transaction.externalCounterparty = null;

	// save the Transaction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a PaymentCard on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignPaymentCard( transactionId, _paymentCardId ): Promise<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the PaymentCard from storage
	var tmp 	= new PaymentCardService(this.http).editPaymentCard(_paymentCardId);

	// assign the PaymentCard
	this.transaction.paymentCard = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a PaymentCard on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignPaymentCard( transactionId ): Promise<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// assign PaymentCard to null
	this.transaction.paymentCard = null;

	// save the Transaction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a FundsTransfer on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignFundsTransfer( transactionId, _fundsTransferId ): Promise<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the FundsTransfer from storage
	var tmp 	= new FundsTransferService(this.http).editFundsTransfer(_fundsTransferId);

	// assign the FundsTransfer
	this.transaction.fundsTransfer = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a FundsTransfer on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignFundsTransfer( transactionId ): Promise<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// assign FundsTransfer to null
	this.transaction.fundsTransfer = null;

	// save the Transaction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a FxTrade on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignFxTrade( transactionId, _fxTradeId ): Promise<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the FXTrade from storage
	var tmp 	= new FXTradeService(this.http).editFXTrade(_fxTradeId);

	// assign the FxTrade
	this.transaction.fxTrade = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a FxTrade on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignFxTrade( transactionId ): Promise<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// assign FxTrade to null
	this.transaction.fxTrade = null;

	// save the Transaction
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Dispute on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignDispute( transactionId, _disputeId ): Promise<any> {

		// get the Transaction from storage
		this.loadHelper( transactionId );

	// get the Dispute from storage
	var tmp 	= new DisputeService(this.http).editDispute(_disputeId);

	// assign the Dispute
	this.transaction.dispute = tmp;

	// save the Transaction
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Dispute on a Transaction
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignDispute( transactionId ): Promise<any> {

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
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/Transaction/update/' + this.transaction;

	return  this.http.post(uri, this.transaction );
}

	//********************************************************************
	// loadHelper - internal helper to load a Transaction
	//********************************************************************	
	loadHelper( id ) {
		this.editTransaction(id)
			.subscribe(res : Transaction => {
				this.transaction = res;
			});
	}
}
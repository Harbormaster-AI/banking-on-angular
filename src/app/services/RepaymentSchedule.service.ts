import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {RepaymentSchedule} from '../models/RepaymentSchedule';
import {LoanAccountService} from '../services/LoanAccount.service';
import {LoanPaymentService} from '../services/LoanPayment.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class RepaymentScheduleService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	repaymentSchedule : RepaymentSchedule;

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
	// add a RepaymentSchedule
	// returns the results untouched as a JSON representation
	// delegates via URI to an ORM handler
	//********************************************************************
	addRepaymentSchedule(installmentNumber, dueDate, principalDue, interestDue, totalDue, LoanAccount, Payment, Status) : Observable<any> {
		const uri = this.apiUrl + '/RepaymentSchedule/add';
		const obj = {
			      		installmentNumber: installmentNumber,
      		dueDate: dueDate,
      		principalDue: principalDue,
      		interestDue: interestDue,
      		totalDue: totalDue,
      		LoanAccount: LoanAccount != null && LoanAccount.length > 0 ? LoanAccount : null,
      		Payment: Payment != null && Payment.length > 0 ? Payment : null,
			Status: Status
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// gets all RepaymentSchedule
	// returns the results untouched as JSON representation of an
	// array of RepaymentSchedule models
	// delegates via URI to an ORM handler
	//********************************************************************
	getRepaymentSchedules() : Observable<RepaymentSchedule[]> {
		const uri = this.apiUrl + '/RepaymentSchedule';

		return this
			.http.get<RepaymentSchedule[]>(uri);
	}

	//********************************************************************
	// edit a RepaymentSchedule
	// returns the results untouched as a JSON representation of a
	// RepaymentSchedule model
	// delegates via URI to an ORM handler
	//********************************************************************
	editRepaymentSchedule(id) : Observable<RepaymentSchedule> {
		const uri = this.apiUrl + '/RepaymentSchedule/edit/' + id;

		return this.http.get<RepaymentSchedule>(uri);
	}

	//********************************************************************
	// update a RepaymentSchedule
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
		updateRepaymentSchedule(installmentNumber, dueDate, principalDue, interestDue, totalDue, LoanAccount, Payment, Status, id)  :  Observable<any>  {
				const uri = this.apiUrl + '/RepaymentSchedule/update/' + id;
			const obj = {
				      		installmentNumber: installmentNumber,
      		dueDate: dueDate,
      		principalDue: principalDue,
      		interestDue: interestDue,
      		totalDue: totalDue,
      		LoanAccount: LoanAccount != null && LoanAccount.length > 0 ? LoanAccount : null,
      		Payment: Payment != null && Payment.length > 0 ? Payment : null,
			Status: Status
			};
		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a RepaymentSchedule
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteRepaymentSchedule(id)  : Observable<any> {
		const uri = this.apiUrl + '/RepaymentSchedule/delete/' + id;

		return this.http.get(uri);
	}

			//********************************************************************
	// assigns a LoanAccount on a RepaymentSchedule
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignLoanAccount( repaymentScheduleId, _loanAccountId ): Promise<any> {

		// get the RepaymentSchedule from storage
		this.loadHelper( repaymentScheduleId );

	// get the LoanAccount from storage
	var tmp 	= new LoanAccountService(this.http).editLoanAccount(_loanAccountId);

	// assign the LoanAccount
	this.repaymentSchedule.loanAccount = tmp;

	// save the RepaymentSchedule
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a LoanAccount on a RepaymentSchedule
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignLoanAccount( repaymentScheduleId ): Promise<any> {

		// get the RepaymentSchedule from storage
		this.loadHelper( repaymentScheduleId );

	// assign LoanAccount to null
	this.repaymentSchedule.loanAccount = null;

	// save the RepaymentSchedule
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Payment on a RepaymentSchedule
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	assignPayment( repaymentScheduleId, _paymentId ): Promise<any> {

		// get the RepaymentSchedule from storage
		this.loadHelper( repaymentScheduleId );

	// get the LoanPayment from storage
	var tmp 	= new LoanPaymentService(this.http).editLoanPayment(_paymentId);

	// assign the Payment
	this.repaymentSchedule.payment = tmp;

	// save the RepaymentSchedule
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Payment on a RepaymentSchedule
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	unassignPayment( repaymentScheduleId ): Promise<any> {

		// get the RepaymentSchedule from storage
		this.loadHelper( repaymentScheduleId );

	// assign Payment to null
	this.repaymentSchedule.payment = null;

	// save the RepaymentSchedule
	return this.saveHelper();
}

	
	
	//********************************************************************
	// saveHelper - internal helper to save a RepaymentSchedule
	//********************************************************************
	saveHelper() : Promise<any> {

		const uri = this.apiUrl + '/RepaymentSchedule/update/' + this.repaymentSchedule;

	return  this.http.post(uri, this.repaymentSchedule );
}

	//********************************************************************
	// loadHelper - internal helper to load a RepaymentSchedule
	//********************************************************************	
	loadHelper( id ) {
		this.editRepaymentSchedule(id)
			.subscribe((res : RepaymentSchedule) => {
				this.repaymentSchedule = res;
			});
	}
}
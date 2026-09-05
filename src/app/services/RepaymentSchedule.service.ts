import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
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
	repaymentSchedule : any;
	
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
  	addRepaymentSchedule(installmentNumber, dueDate, principalDue, interestDue, totalDue, LoanAccount, Payment, Status) : Promise<any> {
    	const uri = this.ormUrl + '/RepaymentSchedule/add';
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
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// gets all RepaymentSchedule 
	// returns the results untouched as JSON representation of an
	// array of RepaymentSchedule models
	// delegates via URI to an ORM handler
	//********************************************************************
	getRepaymentSchedules() {
    	const uri = this.ormUrl + '/RepaymentSchedule';
    	
    	return this
            	.http.get(uri).map(res => {
              						return res;
            					});
  	}

	//********************************************************************
	// edit a RepaymentSchedule 
	// returns the results untouched as a JSON representation of a
	// RepaymentSchedule model
	// delegates via URI to an ORM handler
	//********************************************************************
  	editRepaymentSchedule(id) {
    	const uri = this.ormUrl + '/RepaymentSchedule/edit/' + id;
    	
    	return this.http.get(uri).map(res => {
              							return res;
            						});
  	}

	//********************************************************************
	// update a RepaymentSchedule 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	updateRepaymentSchedule(installmentNumber, dueDate, principalDue, interestDue, totalDue, LoanAccount, Payment, Status, id)  : Promise<any>  {
    	const uri = this.ormUrl + '/RepaymentSchedule/update/' + id;
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
    	
    	return this.http.post(uri, obj).toPromise();
  	}

	//********************************************************************
	// delete a RepaymentSchedule 
	// returns a Promise
	// delegates via URI to an ORM handler
	//********************************************************************
	deleteRepaymentSchedule(id)  : Promise<any> {
    	const uri = this.ormUrl + '/RepaymentSchedule/delete/' + id;

        return this.http.get(uri).toPromise();
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
		
		const uri = this.ormUrl + '/RepaymentSchedule/update/' + this.repaymentSchedule._id;		
		
    	return this
      			.http
      			.post(uri, this.repaymentSchedule)
				.toPromise();			
	}

	//********************************************************************
	// loadHelper - internal helper to load a RepaymentSchedule
	//********************************************************************	
	loadHelper( id ) {
		this.editRepaymentSchedule(id)
        		.subscribe(res => {
        			this.repaymentSchedule = res;
      			});
	}
}
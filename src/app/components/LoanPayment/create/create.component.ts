import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanPaymentService } from '../../../services/LoanPayment.service';
import { LoanPayment } from '../../../models/LoanPayment';
import { SubBaseComponent } from '../../LoanPayment/sub.base.component';

@Component({
    selector: 'app-create-loanPayment',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateLoanPaymentComponent extends SubBaseComponent implements OnInit {

    title = 'Add LoanPayment';

    loanPaymentForm: FormGroup;
    loanPayment: LoanPayment;

    constructor(
        private loanPaymentService: LoanPaymentService,
        private fb: FormBuilder,
        private router: Router
) {
        this.loanPaymentForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  paymentReference: ['', Validators.required],
      amount: ['', Validators.required],
      paymentDate: ['', Validators.required],
      LoanAccount: ['', ],
      Transaction: ['', ],
      Method: ['', ],
      Status: ['', ]
        });
    }

    
    addLoanPayment(paymentReference, amount, paymentDate, LoanAccount, Transaction, Method, Status): void {
        this.loanPaymentService
        .addLoanPayment(paymentReference, amount, paymentDate, LoanAccount, Transaction, Method, Status)
.then(() => {
        this.router.navigate(['/indexLoanPayment']);
    });
}

    ngOnInit(): void {
    }
}
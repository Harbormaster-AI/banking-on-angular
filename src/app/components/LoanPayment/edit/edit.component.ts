
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoanPaymentService } from '../../../services/LoanPayment.service';
import { SubBaseComponent } from '../../LoanPayment/sub.base.component';


@Component({
    selector: 'app-edit-loanPayment',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditLoanPaymentComponent extends SubBaseComponent implements OnInit {

    title = 'Edit LoanPayment';

    loanPaymentForm: FormGroup;
    loanPayment: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: LoanPaymentService,
        private fb: FormBuilder
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

    
    updateLoanPayment(paymentReference, amount, paymentDate, LoanAccount, Transaction, Method, Status): void {
        this.route.params.subscribe(params => {
                        this.service.updateLoanPayment(paymentReference, amount, paymentDate, LoanAccount, Transaction, Method, Status, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexLoanPayment']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editLoanPayment(params['id']).subscribe(res => {
                this.loanPayment = res;
            });
        });
    }
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoanAccountService } from '../../../services/LoanAccount.service';
import { SubBaseComponent } from '../../LoanAccount/sub.base.component';


@Component({
    selector: 'app-edit-loanAccount',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditLoanAccountComponent extends SubBaseComponent implements OnInit {

    title = 'Edit LoanAccount';

    loanAccountForm: FormGroup;
    loanAccount: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: LoanAccountService,
        private fb: FormBuilder
) {
        super(http);
        this.loanAccountForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  loanNumber: ['', Validators.required],
      principalAmount: ['', Validators.required],
      outstandingPrincipal: ['', Validators.required],
      interestRate: ['', Validators.required],
      originationDate: ['', Validators.required],
      maturityDate: ['', Validators.required],
      paymentDayOfMonth: ['', Validators.required],
      currency: ['', Validators.required],
      Bank: ['', ],
      Branch: ['', ],
      Product: ['', ],
      Borrowers: ['', ],
      RepaymentSchedule: ['', ],
      Payments: ['', ],
      Collateral: ['', ],
      FeeCharges: ['', ],
      LoanType: ['', ],
      RateType: ['', ],
      Compounding: ['', ],
      Status: ['', ]
        });
    }

    
    updateLoanAccount(loanNumber, principalAmount, outstandingPrincipal, interestRate, originationDate, maturityDate, paymentDayOfMonth, currency, Bank, Branch, Product, Borrowers, RepaymentSchedule, Payments, Collateral, FeeCharges, LoanType, RateType, Compounding, Status): void {
        this.route.params.subscribe(params => {
                        this.service.updateLoanAccount(loanNumber, principalAmount, outstandingPrincipal, interestRate, originationDate, maturityDate, paymentDayOfMonth, currency, Bank, Branch, Product, Borrowers, RepaymentSchedule, Payments, Collateral, FeeCharges, LoanType, RateType, Compounding, Status, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexLoanAccount']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editLoanAccount(params['id']).subscribe(res => {
                this.loanAccount = res;
            });
        });
    }
}
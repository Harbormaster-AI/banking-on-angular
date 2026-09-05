
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanAccountService } from '../../../services/LoanAccount.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-loanAccount',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditLoanAccountComponent implements OnInit {

    title = 'Edit LoanAccount';

    loanAccountForm: FormGroup;
    loanAccount: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: LoanAccountService,
        private fb: FormBuilder
) {
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
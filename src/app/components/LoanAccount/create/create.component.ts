import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanAccountService } from '../../../services/LoanAccount.service';
import { LoanAccount } from '../../../models/loanAccount';

@Component({
    selector: 'app-create-loanAccount',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateLoanAccountComponent implements OnInit {

    title = 'Add LoanAccount';

    loanAccountForm: FormGroup;
    loanAccount: LoanAccount;

    constructor(
        private loanAccountService: LoanAccountService,
        private fb: FormBuilder,
        private router: Router
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

    
    addLoanAccount(loanNumber, principalAmount, outstandingPrincipal, interestRate, originationDate, maturityDate, paymentDayOfMonth, currency, Bank, Branch, Product, Borrowers, RepaymentSchedule, Payments, Collateral, FeeCharges, LoanType, RateType, Compounding, Status): void {
        this.loanAccountService
        .addLoanAccount(loanNumber, principalAmount, outstandingPrincipal, interestRate, originationDate, maturityDate, paymentDayOfMonth, currency, Bank, Branch, Product, Borrowers, RepaymentSchedule, Payments, Collateral, FeeCharges, LoanType, RateType, Compounding, Status)
.then(() => {
        this.router.navigate(['/indexLoanAccount']);
    });
}

    ngOnInit(): void {
    }
}
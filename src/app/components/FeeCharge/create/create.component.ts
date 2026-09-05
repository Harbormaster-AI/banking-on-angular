import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeeChargeService } from '../../../services/FeeCharge.service';
import { FeeCharge } from '../../../models/FeeCharge';

@Component({
    selector: 'app-create-feeCharge',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateFeeChargeComponent implements OnInit {

    title = 'Add FeeCharge';

    feeChargeForm: FormGroup;
    feeCharge: FeeCharge;

    constructor(
        private feeChargeService: FeeChargeService,
        private fb: FormBuilder,
        private router: Router
) {
        this.feeChargeForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  feeCode: ['', Validators.required],
      amount: ['', Validators.required],
      appliedOn: ['', Validators.required],
      Account: ['', ],
      LoanAccount: ['', ],
      FeeType: ['', ]
        });
    }

    
    addFeeCharge(feeCode, amount, appliedOn, Account, LoanAccount, FeeType): void {
        this.feeChargeService
        .addFeeCharge(feeCode, amount, appliedOn, Account, LoanAccount, FeeType)
.then(() => {
        this.router.navigate(['/indexFeeCharge']);
    });
}

    ngOnInit(): void {
    }
}
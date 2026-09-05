import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeeChargeService } from '../../../services/FeeCharge.service';
import { FeeCharge } from '../../../models/FeeCharge';
import { SubBaseComponent } from '../../FeeCharge/sub.base.component';

@Component({
    selector: 'app-create-feeCharge',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateFeeChargeComponent extends SubBaseComponent implements OnInit {

    title = 'Add FeeCharge';

    feeChargeForm: FormGroup;
    feeCharge: FeeCharge;

    constructor( http: HttpClient,
        private feeChargeService: FeeChargeService,
        private fb: FormBuilder,
        private router: Router
) {
        super(http);
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
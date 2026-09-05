import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FeeChargeService } from '../../../services/FeeCharge.service';
import { SubBaseComponent } from '../../FeeCharge/sub.base.component';


@Component({
    selector: 'app-edit-feeCharge',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditFeeChargeComponent extends SubBaseComponent implements OnInit {

    title = 'Edit FeeCharge';

    feeChargeForm: FormGroup;
    feeCharge: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: FeeChargeService,
        private fb: FormBuilder
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

    
    updateFeeCharge(feeCode, amount, appliedOn, Account, LoanAccount, FeeType): void {
        this.route.params.subscribe(params => {
                        this.service.updateFeeCharge(feeCode, amount, appliedOn, Account, LoanAccount, FeeType, params['id'])
                            .subscribe(() => {
                    this.router.navigate(['/indexFeeCharge']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editFeeCharge(params['id']).subscribe(res => {
                this.feeCharge = res;
            });
        });
    }
}
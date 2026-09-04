
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeeChargeService } from '../../../services/FeeCharge.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-feeCharge',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditFeeChargeComponent implements OnInit {

    title = 'Edit FeeCharge';

    feeChargeForm: FormGroup;
    feeCharge: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: FeeChargeService,
        private fb: FormBuilder
) {
        this.feeChargeForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    updateFeeCharge(feeCode, amount, appliedOn, Account, LoanAccount, FeeType): void {
        this.route.params.subscribe(params => {
                        this.service.updateFeeCharge(feeCode, amount, appliedOn, Account, LoanAccount, FeeType, params['id'])
                            .then(() => {
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
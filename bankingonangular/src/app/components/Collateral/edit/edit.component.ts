
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollateralService } from '../../../services/Collateral.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-collateral',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditCollateralComponent implements OnInit {

    title = 'Edit Collateral';

    collateralForm: FormGroup;
    collateral: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CollateralService,
        private fb: FormBuilder
) {
        this.collateralForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    updateCollateral(appraisedValue, description, location, LoanAccount, CollateralType): void {
        this.route.params.subscribe(params => {
                        this.service.updateCollateral(appraisedValue, description, location, LoanAccount, CollateralType, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexCollateral']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editCollateral(params['id']).subscribe(res => {
                this.collateral = res;
            });
        });
    }
}
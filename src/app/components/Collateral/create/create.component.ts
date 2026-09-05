import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollateralService } from '../../../services/Collateral.service';
import { Collateral } from '../../../models/collateral';

@Component({
    selector: 'app-create-collateral',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateCollateralComponent implements OnInit {

    title = 'Add Collateral';

    collateralForm: FormGroup;
    collateral: Collateral;

    constructor(
        private collateralService: CollateralService,
        private fb: FormBuilder,
        private router: Router
) {
        this.collateralForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  appraisedValue: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      LoanAccount: ['', ],
      CollateralType: ['', ]
        });
    }

    
    addCollateral(appraisedValue, description, location, LoanAccount, CollateralType): void {
        this.collateralService
        .addCollateral(appraisedValue, description, location, LoanAccount, CollateralType)
.then(() => {
        this.router.navigate(['/indexCollateral']);
    });
}

    ngOnInit(): void {
    }
}
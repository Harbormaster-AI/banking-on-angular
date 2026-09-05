import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CollateralService } from '../../../services/Collateral.service';
import { SubBaseComponent } from '../../Collateral/sub.base.component';


@Component({
    selector: 'app-edit-collateral',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditCollateralComponent extends SubBaseComponent implements OnInit {

    title = 'Edit Collateral';

    collateralForm: FormGroup;
    collateral: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: CollateralService,
        private fb: FormBuilder
) {
        super(http);
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
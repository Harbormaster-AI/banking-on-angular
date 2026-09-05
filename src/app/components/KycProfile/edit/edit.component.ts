import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { KycProfileService } from '../../../services/KycProfile.service';
import { SubBaseComponent } from '../../KycProfile/sub.base.component';


@Component({
    selector: 'app-edit-kycProfile',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditKycProfileComponent extends SubBaseComponent implements OnInit {

    title = 'Edit KycProfile';

    kycProfileForm: FormGroup;
    kycProfile: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: KycProfileService,
        private fb: FormBuilder
) {
        super(http);
        this.kycProfileForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  profileId: ['', Validators.required],
      lastReviewedOn: ['', Validators.required],
      Customer: ['', ],
      IdentityDocuments: ['', ],
      RiskAssessments: ['', ],
      Screenings: ['', ],
      Status: ['', ]
        });
    }

    
    updateKycProfile(profileId, lastReviewedOn, Customer, IdentityDocuments, RiskAssessments, Screenings, Status): void {
        this.route.params.subscribe(params => {
                        this.service.updateKycProfile(profileId, lastReviewedOn, Customer, IdentityDocuments, RiskAssessments, Screenings, Status, params['id'])
                            .subscribe(() => {
                    this.router.navigate(['/indexKycProfile']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editKycProfile(params['id']).subscribe(res => {
                this.kycProfile = res;
            });
        });
    }
}
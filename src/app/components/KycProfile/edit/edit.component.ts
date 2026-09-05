
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycProfileService } from '../../../services/KycProfile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-kycProfile',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditKycProfileComponent implements OnInit {

    title = 'Edit KycProfile';

    kycProfileForm: FormGroup;
    kycProfile: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: KycProfileService,
        private fb: FormBuilder
) {
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
                            .then(() => {
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
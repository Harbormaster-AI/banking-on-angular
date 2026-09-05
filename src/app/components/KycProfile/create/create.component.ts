import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KycProfileService } from '../../../services/KycProfile.service';
import { KycProfile } from '../../../models/kycProfile';

@Component({
    selector: 'app-create-kycProfile',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateKycProfileComponent implements OnInit {

    title = 'Add KycProfile';

    kycProfileForm: FormGroup;
    kycProfile: KycProfile;

    constructor(
        private kycProfileService: KycProfileService,
        private fb: FormBuilder,
        private router: Router
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

    
    addKycProfile(profileId, lastReviewedOn, Customer, IdentityDocuments, RiskAssessments, Screenings, Status): void {
        this.kycProfileService
        .addKycProfile(profileId, lastReviewedOn, Customer, IdentityDocuments, RiskAssessments, Screenings, Status)
.then(() => {
        this.router.navigate(['/indexKycProfile']);
    });
}

    ngOnInit(): void {
    }
}
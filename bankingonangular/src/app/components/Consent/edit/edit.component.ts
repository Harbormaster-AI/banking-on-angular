
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsentService } from '../../../services/Consent.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-consent',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditConsentComponent implements OnInit {

    title = 'Edit Consent';

    consentForm: FormGroup;
    consent: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ConsentService,
        private fb: FormBuilder
) {
        this.consentForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    updateConsent(grantedOn, expiresOn, Customer, Bank, AuthorizedAccounts, ThirdPartyProvider, ConsentType, Status): void {
        this.route.params.subscribe(params => {
                        this.service.updateConsent(grantedOn, expiresOn, Customer, Bank, AuthorizedAccounts, ThirdPartyProvider, ConsentType, Status, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexConsent']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editConsent(params['id']).subscribe(res => {
                this.consent = res;
            });
        });
    }
}
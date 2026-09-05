import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsentService } from '../../../services/Consent.service';
import { Consent } from '../../../models/Consent';
import { SubBaseComponent } from '../../Consent/sub.base.component';

@Component({
    selector: 'app-create-consent',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateConsentComponent extends SubBaseComponent implements OnInit {

    title = 'Add Consent';

    consentForm: FormGroup;
    consent: Consent;

    constructor( http: HttpClient,
        private consentService: ConsentService,
        private fb: FormBuilder,
        private router: Router
) {
        super(http);
        this.consentForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  grantedOn: ['', Validators.required],
      expiresOn: ['', Validators.required],
      Customer: ['', ],
      Bank: ['', ],
      AuthorizedAccounts: ['', ],
      ThirdPartyProvider: ['', ],
      ConsentType: ['', ],
      Status: ['', ]
        });
    }

    
    addConsent(grantedOn, expiresOn, Customer, Bank, AuthorizedAccounts, ThirdPartyProvider, ConsentType, Status): void {
        this.consentService
        .addConsent(grantedOn, expiresOn, Customer, Bank, AuthorizedAccounts, ThirdPartyProvider, ConsentType, Status)
.then(() => {
        this.router.navigate(['/indexConsent']);
    });
}

    ngOnInit(): void {
    }
}
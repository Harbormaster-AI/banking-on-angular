import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConsentService } from '../../../services/Consent.service';
import { SubBaseComponent } from '../../Consent/sub.base.component';


@Component({
    selector: 'app-edit-consent',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditConsentComponent extends SubBaseComponent implements OnInit {

    title = 'Edit Consent';

    consentForm: FormGroup;
    consent: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: ConsentService,
        private fb: FormBuilder
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

    
    updateConsent(grantedOn, expiresOn, Customer, Bank, AuthorizedAccounts, ThirdPartyProvider, ConsentType, Status): void {
        this.route.params.subscribe((params) => {

                        this.service.updateConsent(grantedOn, expiresOn, Customer, Bank, AuthorizedAccounts, ThirdPartyProvider, ConsentType, Status, params['id'])
                            .subscribe(() => {
                    this.router.navigate(['/indexConsent']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.service.editConsent(params['id']).subscribe(res => {
                this.consent = res;
            });
        });
    }
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IdentityDocumentService } from '../../../services/IdentityDocument.service';
import { SubBaseComponent } from '../../IdentityDocument/sub.base.component';


@Component({
    selector: 'app-edit-identityDocument',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditIdentityDocumentComponent extends SubBaseComponent implements OnInit {

    title = 'Edit IdentityDocument';

    identityDocumentForm: FormGroup;
    identityDocument: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: IdentityDocumentService,
        private fb: FormBuilder
) {
        super(http);
        this.identityDocumentForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  documentNumber: ['', Validators.required],
      issuingCountry: ['', Validators.required],
      expirationDate: ['', Validators.required],
      KycProfile: ['', ],
      DocumentType: ['', ]
        });
    }

    
    updateIdentityDocument(documentNumber, issuingCountry, expirationDate, KycProfile, DocumentType): void {
        this.route.params.subscribe(params => {
                        this.service.updateIdentityDocument(documentNumber, issuingCountry, expirationDate, KycProfile, DocumentType, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexIdentityDocument']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editIdentityDocument(params['id']).subscribe(res => {
                this.identityDocument = res;
            });
        });
    }
}
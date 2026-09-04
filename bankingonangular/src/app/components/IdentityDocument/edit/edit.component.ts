
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdentityDocumentService } from '../../../services/IdentityDocument.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-identityDocument',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditIdentityDocumentComponent implements OnInit {

    title = 'Edit IdentityDocument';

    identityDocumentForm: FormGroup;
    identityDocument: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: IdentityDocumentService,
        private fb: FormBuilder
) {
        this.identityDocumentForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
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
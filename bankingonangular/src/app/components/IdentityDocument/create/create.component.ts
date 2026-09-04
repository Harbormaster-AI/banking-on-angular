import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentityDocumentService } from '../../../services/IdentityDocument.service';
import { IdentityDocument } from '../../../models/identityDocument';

@Component({
    selector: 'app-create-identityDocument',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateIdentityDocumentComponent implements OnInit {

    title = 'Add IdentityDocument';

    identityDocumentForm: FormGroup;
    identityDocument: IdentityDocument;

    constructor(
        private identityDocumentService: IdentityDocumentService,
        private fb: FormBuilder,
        private router: Router
) {
        this.identityDocumentForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    addIdentityDocument(documentNumber, issuingCountry, expirationDate, KycProfile, DocumentType): void {
        this.identityDocumentService
        .addIdentityDocument(documentNumber, issuingCountry, expirationDate, KycProfile, DocumentType)
.then(() => {
        this.router.navigate(['/indexIdentityDocument']);
    });
}

    ngOnInit(): void {
    }
}
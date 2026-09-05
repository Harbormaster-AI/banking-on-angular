import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentityDocumentService } from '../../../services/IdentityDocument.service';
import { IdentityDocument } from '../../../models/IdentityDocument';
import { SubBaseComponent } from '../../IdentityDocument/sub.base.component';

@Component({
    selector: 'app-create-identityDocument',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateIdentityDocumentComponent extends SubBaseComponent implements OnInit {

    title = 'Add IdentityDocument';

    identityDocumentForm: FormGroup;
    identityDocument: IdentityDocument;

    constructor( http: HttpClient,
        private identityDocumentService: IdentityDocumentService,
        private fb: FormBuilder,
        private router: Router
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

    
    addIdentityDocument(documentNumber, issuingCountry, expirationDate, KycProfile, DocumentType): void {
        this.identityDocumentService
        .addIdentityDocument(documentNumber, issuingCountry, expirationDate, KycProfile, DocumentType)
            .subscribe(() => {
                this.router.navigate(['/indexIdentityDocument']);
            });
    }

    ngOnInit(): void {
    }
}
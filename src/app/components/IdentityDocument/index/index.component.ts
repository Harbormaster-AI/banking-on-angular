
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityDocumentService } from '../../../services/IdentityDocument.service';
import { IdentityDocument } from '../../../models/IdentityDocument';

@Component({
    selector: 'app-index-identityDocument',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexIdentityDocumentComponent implements OnInit {

    identityDocuments: IdentityDocument[] = [];

    constructor(
        private router: Router,
        private service: IdentityDocumentService
) {}

    ngOnInit(): void {
        this.getIdentityDocuments();
}

    getIdentityDocuments(): void {
        this.service.getIdentityDocuments().subscribe(res : IdentityDocument[] => {
        this.identityDocuments = res;
    });
}

    deleteIdentityDocument(id: any): void {
        this.service.deleteIdentityDocument(id)
            .then(() => {
                this.getIdentityDocuments();
            });
    }
}
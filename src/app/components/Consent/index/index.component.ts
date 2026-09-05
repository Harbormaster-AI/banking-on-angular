
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsentService } from '../../../services/Consent.service';
import { Consent } from '../../../models/Consent';

@Component({
    selector: 'app-index-consent',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexConsentComponent implements OnInit {

    consents: Consent[] = [];

    constructor(
        private router: Router,
        private service: ConsentService
) {}

    ngOnInit(): void {
        this.getConsents();
}

    getConsents(): void {
        this.service.getConsents().subscribe(res : Consent[] => {
        this.consents = res;
    });
}

    deleteConsent(id: any): void {
        this.service.deleteConsent(id)
            .then(() => {
                this.getConsents();
            });
    }
}
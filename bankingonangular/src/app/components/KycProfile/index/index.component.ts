
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KycProfileService } from '../../../services/KycProfile.service';
import { KycProfile } from '../../../models/KycProfile';

@Component({
    selector: 'app-index-kycProfile',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexKycProfileComponent implements OnInit {

    kycProfiles: KycProfile[] = [];

    constructor(
        private router: Router,
        private service: KycProfileService
) {}

    ngOnInit(): void {
        this.getKycProfiles();
}

    getKycProfiles(): void {
        this.service.getKycProfiles().subscribe(res => {
        this.kycProfiles = res;
    });
}

    deleteKycProfile(id: any): void {
        this.service.deleteKycProfile(id)
            .then(() => {
                this.getKycProfiles();
            });
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KycProfileService } from '../../../services/KycProfile.service';
import { KycProfile } from '../../../models/KycProfile';

@Component({
    selector: 'app-index-kycProfile',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexKycProfileComponent extemds BaseComponent {

    kycProfiles: KycProfile[] = [];

    constructor(
        private router: Router,
        private service: KycProfileService
) {}

    ngOnInit(): void {
        this.getKycProfiles();
}

    getKycProfiles(): void {
        this.service.getKycProfiles().subscribe(res : KycProfile[] => {
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
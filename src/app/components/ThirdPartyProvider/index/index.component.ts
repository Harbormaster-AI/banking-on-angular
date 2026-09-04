
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThirdPartyProviderService } from '../../../services/ThirdPartyProvider.service';
import { ThirdPartyProvider } from '../../../models/ThirdPartyProvider';

@Component({
    selector: 'app-index-thirdPartyProvider',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexThirdPartyProviderComponent implements OnInit {

    thirdPartyProviders: ThirdPartyProvider[] = [];

    constructor(
        private router: Router,
        private service: ThirdPartyProviderService
) {}

    ngOnInit(): void {
        this.getThirdPartyProviders();
}

    getThirdPartyProviders(): void {
        this.service.getThirdPartyProviders().subscribe(res => {
        this.thirdPartyProviders = res;
    });
}

    deleteThirdPartyProvider(id: any): void {
        this.service.deleteThirdPartyProvider(id)
            .then(() => {
                this.getThirdPartyProviders();
            });
    }
}
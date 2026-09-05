
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalAccountService } from '../../../services/ExternalAccount.service';
import { ExternalAccount } from '../../../models/ExternalAccount';

@Component({
    selector: 'app-index-externalAccount',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexExternalAccountComponent implements OnInit {

    externalAccounts: ExternalAccount[] = [];

    constructor(
        private router: Router,
        private service: ExternalAccountService
) {}

    ngOnInit(): void {
        this.getExternalAccounts();
}

    getExternalAccounts(): void {
        this.service.getExternalAccounts().subscribe((res) => {
        this.externalAccounts = res;
    });
}

    deleteExternalAccount(id: any): void {
        this.service.deleteExternalAccount(id)
            .subscribe(() => {
                this.getExternalAccounts();
            });
    }
}
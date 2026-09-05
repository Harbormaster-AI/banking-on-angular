
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/Account.service';
import { Account } from '../../../models/Account';

@Component({
    selector: 'app-index-account',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexAccountComponent implements OnInit {

    accounts: Account[] = [];

    constructor(
        private router: Router,
        private service: AccountService
) {}

    ngOnInit(): void {
        this.getAccounts();
}

    getAccounts(): void {
        this.service.getAccounts().subscribe(res => {
        this.accounts = res;
    });
}

    deleteAccount(id: any): void {
        this.service.deleteAccount(id)
            .subscribe(() => {
                this.getAccounts();
            });
    }
}
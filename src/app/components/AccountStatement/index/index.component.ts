
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountStatementService } from '../../../services/AccountStatement.service';
import { AccountStatement } from '../../../models/AccountStatement';

@Component({
    selector: 'app-index-accountStatement',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexAccountStatementComponent implements OnInit {

    accountStatements: AccountStatement[] = [];

    constructor(
        private router: Router,
        private service: AccountStatementService
) {}

    ngOnInit(): void {
        this.getAccountStatements();
}

    getAccountStatements(): void {
        this.service.getAccountStatements().subscribe((res) => {
        this.accountStatements = res;
    });
}

    deleteAccountStatement(id: any): void {
        this.service.deleteAccountStatement(id)
            .subscribe(() => {
                this.getAccountStatements();
            });
    }
}
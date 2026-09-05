
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanAccountService } from '../../../services/LoanAccount.service';
import { LoanAccount } from '../../../models/LoanAccount';

@Component({
    selector: 'app-index-loanAccount',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexLoanAccountComponent implements OnInit {

    loanAccounts: LoanAccount[] = [];

    constructor(
        private router: Router,
        private service: LoanAccountService
) {}

    ngOnInit(): void {
        this.getLoanAccounts();
}

    getLoanAccounts(): void {
        this.service.getLoanAccounts().subscribe(res : LoanAccount[] => {
        this.loanAccounts = res;
    });
}

    deleteLoanAccount(id: any): void {
        this.service.deleteLoanAccount(id)
            .then(() => {
                this.getLoanAccounts();
            });
    }
}
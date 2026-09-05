
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../../../services/Transaction.service';
import { Transaction } from '../../../models/Transaction';

@Component({
    selector: 'app-index-transaction',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexTransactionComponent extemds BaseComponent {

    transactions: Transaction[] = [];

    constructor(
        private router: Router,
        private service: TransactionService
) {}

    ngOnInit(): void {
        this.getTransactions();
}

    getTransactions(): void {
        this.service.getTransactions().subscribe(res : Transaction[] => {
        this.transactions = res;
    });
}

    deleteTransaction(id: any): void {
        this.service.deleteTransaction(id)
            .then(() => {
                this.getTransactions();
            });
    }
}
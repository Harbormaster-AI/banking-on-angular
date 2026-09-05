
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../../../services/Bank.service';
import { Bank } from '../../../models/Bank';

@Component({
    selector: 'app-index-bank',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexBankComponent implements OnInit {

    banks: Bank[] = [];

    constructor(
        private router: Router,
        private service: BankService
) {}

    ngOnInit(): void {
        this.getBanks();
}

    getBanks(): void {
        this.service.getBanks().subscribe(res => {
        this.banks = res;
    });
}

    deleteBank(id: any): void {
        this.service.deleteBank(id)
            .subscribe(() => {
                this.getBanks();
            });
    }
}
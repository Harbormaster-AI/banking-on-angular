
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanPaymentService } from '../../../services/LoanPayment.service';
import { LoanPayment } from '../../../models/LoanPayment';

@Component({
    selector: 'app-index-loanPayment',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexLoanPaymentComponent implements OnInit {

    loanPayments: LoanPayment[] = [];

    constructor(
        private router: Router,
        private service: LoanPaymentService
) {}

    ngOnInit(): void {
        this.getLoanPayments();
}

    getLoanPayments(): void {
        this.service.getLoanPayments().subscribe(res => {
        this.loanPayments = res;
    });
}

    deleteLoanPayment(id: any): void {
        this.service.deleteLoanPayment(id)
            .then(() => {
                this.getLoanPayments();
            });
    }
}
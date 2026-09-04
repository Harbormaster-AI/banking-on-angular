
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentCardService } from '../../../services/PaymentCard.service';
import { PaymentCard } from '../../../models/PaymentCard';

@Component({
    selector: 'app-index-paymentCard',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexPaymentCardComponent implements OnInit {

    paymentCards: PaymentCard[] = [];

    constructor(
        private router: Router,
        private service: PaymentCardService
) {}

    ngOnInit(): void {
        this.getPaymentCards();
}

    getPaymentCards(): void {
        this.service.getPaymentCards().subscribe(res => {
        this.paymentCards = res;
    });
}

    deletePaymentCard(id: any): void {
        this.service.deletePaymentCard(id)
            .then(() => {
                this.getPaymentCards();
            });
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExchangeRateService } from '../../../services/ExchangeRate.service';
import { ExchangeRate } from '../../../models/ExchangeRate';

@Component({
    selector: 'app-index-exchangeRate',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexExchangeRateComponent extemds BaseComponent {

    exchangeRates: ExchangeRate[] = [];

    constructor(
        private router: Router,
        private service: ExchangeRateService
) {}

    ngOnInit(): void {
        this.getExchangeRates();
}

    getExchangeRates(): void {
        this.service.getExchangeRates().subscribe(res : ExchangeRate[] => {
        this.exchangeRates = res;
    });
}

    deleteExchangeRate(id: any): void {
        this.service.deleteExchangeRate(id)
            .then(() => {
                this.getExchangeRates();
            });
    }
}
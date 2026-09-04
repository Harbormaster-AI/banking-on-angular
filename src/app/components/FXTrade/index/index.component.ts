
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FXTradeService } from '../../../services/FXTrade.service';
import { FXTrade } from '../../../models/FXTrade';

@Component({
    selector: 'app-index-fXTrade',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexFXTradeComponent implements OnInit {

    fXTrades: FXTrade[] = [];

    constructor(
        private router: Router,
        private service: FXTradeService
) {}

    ngOnInit(): void {
        this.getFXTrades();
}

    getFXTrades(): void {
        this.service.getFXTrades().subscribe(res => {
        this.fXTrades = res;
    });
}

    deleteFXTrade(id: any): void {
        this.service.deleteFXTrade(id)
            .then(() => {
                this.getFXTrades();
            });
    }
}
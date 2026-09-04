import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FXTradeService } from '../../../services/FXTrade.service';
import { FXTrade } from '../../../models/fXTrade';

@Component({
    selector: 'app-create-fXTrade',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateFXTradeComponent implements OnInit {

    title = 'Add FXTrade';

    fXTradeForm: FormGroup;
    fXTrade: FXTrade;

    constructor(
        private fXTradeService: FXTradeService,
        private fb: FormBuilder,
        private router: Router
) {
        this.fXTradeForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    addFXTrade(tradeReference, tradeDate, settlementDate, amountSold, amountBought, rate, Customer, Bank, ExchangeRate, SourceAccount, DestinationAccount, Transaction, Status): void {
        this.fXTradeService
        .addFXTrade(tradeReference, tradeDate, settlementDate, amountSold, amountBought, rate, Customer, Bank, ExchangeRate, SourceAccount, DestinationAccount, Transaction, Status)
.then(() => {
        this.router.navigate(['/indexFXTrade']);
    });
}

    ngOnInit(): void {
    }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FXTradeService } from '../../../services/FXTrade.service';
import { FXTrade } from '../../../models/FXTrade';
import { SubBaseComponent } from '../../FXTrade/sub.base.component';

@Component({
    selector: 'app-create-fXTrade',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateFXTradeComponent extends SubBaseComponent implements OnInit {

    title = 'Add FXTrade';

    fXTradeForm: FormGroup;
    fXTrade: FXTrade;

    constructor( http: HttpClient,
        private fXTradeService: FXTradeService,
        private fb: FormBuilder,
        private router: Router
) {
        super(http);
        this.fXTradeForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  tradeReference: ['', Validators.required],
      tradeDate: ['', Validators.required],
      settlementDate: ['', Validators.required],
      amountSold: ['', Validators.required],
      amountBought: ['', Validators.required],
      rate: ['', Validators.required],
      Customer: ['', ],
      Bank: ['', ],
      ExchangeRate: ['', ],
      SourceAccount: ['', ],
      DestinationAccount: ['', ],
      Transaction: ['', ],
      Status: ['', ]
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
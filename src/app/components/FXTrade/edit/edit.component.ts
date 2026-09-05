import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FXTradeService } from '../../../services/FXTrade.service';
import { SubBaseComponent } from '../../FXTrade/sub.base.component';


@Component({
    selector: 'app-edit-fXTrade',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditFXTradeComponent extends SubBaseComponent implements OnInit {

    title = 'Edit FXTrade';

    fXTradeForm: FormGroup;
    fXTrade: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: FXTradeService,
        private fb: FormBuilder
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

    
    updateFXTrade(tradeReference, tradeDate, settlementDate, amountSold, amountBought, rate, Customer, Bank, ExchangeRate, SourceAccount, DestinationAccount, Transaction, Status): void {
        this.route.params.subscribe((params) => {

                        this.service.updateFXTrade(tradeReference, tradeDate, settlementDate, amountSold, amountBought, rate, Customer, Bank, ExchangeRate, SourceAccount, DestinationAccount, Transaction, Status, params['id'])
                            .subscribe(() => {
                    this.router.navigate(['/indexFXTrade']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.service.editFXTrade(params['id']).subscribe(res => {
                this.fXTrade = res;
            });
        });
    }
}
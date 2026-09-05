
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FXTradeService } from '../../../services/FXTrade.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-fXTrade',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditFXTradeComponent implements OnInit {

    title = 'Edit FXTrade';

    fXTradeForm: FormGroup;
    fXTrade: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: FXTradeService,
        private fb: FormBuilder
) {
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
        this.route.params.subscribe(params => {
                        this.service.updateFXTrade(tradeReference, tradeDate, settlementDate, amountSold, amountBought, rate, Customer, Bank, ExchangeRate, SourceAccount, DestinationAccount, Transaction, Status, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexFXTrade']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editFXTrade(params['id']).subscribe(res => {
                this.fXTrade = res;
            });
        });
    }
}
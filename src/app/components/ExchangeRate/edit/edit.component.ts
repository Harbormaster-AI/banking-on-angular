import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ExchangeRateService } from '../../../services/ExchangeRate.service';
import { SubBaseComponent } from '../../ExchangeRate/sub.base.component';


@Component({
    selector: 'app-edit-exchangeRate',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditExchangeRateComponent extends SubBaseComponent implements OnInit {

    title = 'Edit ExchangeRate';

    exchangeRateForm: FormGroup;
    exchangeRate: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: ExchangeRateService,
        private fb: FormBuilder
) {
        super(http);
        this.exchangeRateForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  baseCurrency: ['', Validators.required],
      counterCurrency: ['', Validators.required],
      rate: ['', Validators.required],
      asOf: ['', Validators.required],
      source: ['', Validators.required],
      Bank: ['', ],
      FxTrades: ['', ]
        });
    }

    
    updateExchangeRate(baseCurrency, counterCurrency, rate, asOf, source, Bank, FxTrades): void {
        this.route.params.subscribe(params => {
                        this.service.updateExchangeRate(baseCurrency, counterCurrency, rate, asOf, source, Bank, FxTrades, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexExchangeRate']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editExchangeRate(params['id']).subscribe(res => {
                this.exchangeRate = res;
            });
        });
    }
}
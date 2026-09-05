import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExchangeRateService } from '../../../services/ExchangeRate.service';
import { ExchangeRate } from '../../../models/ExchangeRate';

@Component({
    selector: 'app-create-exchangeRate',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateExchangeRateComponent implements OnInit {

    title = 'Add ExchangeRate';

    exchangeRateForm: FormGroup;
    exchangeRate: ExchangeRate;

    constructor(
        private exchangeRateService: ExchangeRateService,
        private fb: FormBuilder,
        private router: Router
) {
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

    
    addExchangeRate(baseCurrency, counterCurrency, rate, asOf, source, Bank, FxTrades): void {
        this.exchangeRateService
        .addExchangeRate(baseCurrency, counterCurrency, rate, asOf, source, Bank, FxTrades)
.then(() => {
        this.router.navigate(['/indexExchangeRate']);
    });
}

    ngOnInit(): void {
    }
}
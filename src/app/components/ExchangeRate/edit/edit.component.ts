
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeRateService } from '../../../services/ExchangeRate.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-exchangeRate',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditExchangeRateComponent implements OnInit {

    title = 'Edit ExchangeRate';

    exchangeRateForm: FormGroup;
    exchangeRate: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ExchangeRateService,
        private fb: FormBuilder
) {
        this.exchangeRateForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
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
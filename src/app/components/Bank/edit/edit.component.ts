import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BankService } from '../../../services/Bank.service';
import { SubBaseComponent } from '../../Bank/sub.base.component';


@Component({
    selector: 'app-edit-bank',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditBankComponent extends SubBaseComponent implements OnInit {

    title = 'Edit Bank';

    bankForm: FormGroup;
    bank: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: BankService,
        private fb: FormBuilder
) {
        super(http);
        this.bankForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  name: ['', Validators.required],
      legalName: ['', Validators.required],
      swiftBic: ['', Validators.required],
      headquartersCountry: ['', Validators.required],
      website: ['', Validators.required],
      Branches: ['', ],
      Products: ['', ],
      Customers: ['', ],
      Accounts: ['', ],
      PaymentCards: ['', ],
      LoanAccounts: ['', ],
      ExchangeRates: ['', ],
      Consents: ['', ],
      ThirdPartyProviders: ['', ]
        });
    }

    
    updateBank(name, legalName, swiftBic, headquartersCountry, website, Branches, Products, Customers, Accounts, PaymentCards, LoanAccounts, ExchangeRates, Consents, ThirdPartyProviders): void {
        this.route.params.subscribe(params => {
                        this.service.updateBank(name, legalName, swiftBic, headquartersCountry, website, Branches, Products, Customers, Accounts, PaymentCards, LoanAccounts, ExchangeRates, Consents, ThirdPartyProviders, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexBank']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editBank(params['id']).subscribe(res => {
                this.bank = res;
            });
        });
    }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../../services/Bank.service';
import { Bank } from '../../../models/Bank';
import { SubBaseComponent } from '../../Bank/sub.base.component';

@Component({
    selector: 'app-create-bank',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateBankComponent extends SubBaseComponent implements OnInit {

    title = 'Add Bank';

    bankForm: FormGroup;
    bank: Bank;

    constructor( http: HttpClient,
        private bankService: BankService,
        private fb: FormBuilder,
        private router: Router
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

    
    addBank(name, legalName, swiftBic, headquartersCountry, website, Branches, Products, Customers, Accounts, PaymentCards, LoanAccounts, ExchangeRates, Consents, ThirdPartyProviders): void {
        this.bankService
        .addBank(name, legalName, swiftBic, headquartersCountry, website, Branches, Products, Customers, Accounts, PaymentCards, LoanAccounts, ExchangeRates, Consents, ThirdPartyProviders)
            .subscribe(() => {
                this.router.navigate(['/indexBank']);
            });
    }

    ngOnInit(): void {
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../../../services/Bank.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-bank',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditBankComponent implements OnInit {

    title = 'Edit Bank';

    bankForm: FormGroup;
    bank: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: BankService,
        private fb: FormBuilder
) {
        this.bankForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
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
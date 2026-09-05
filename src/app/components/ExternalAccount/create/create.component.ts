import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExternalAccountService } from '../../../services/ExternalAccount.service';
import { ExternalAccount } from '../../../models/ExternalAccount';
import { SubBaseComponent } from '../../ExternalAccount/sub.base.component';

@Component({
    selector: 'app-create-externalAccount',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateExternalAccountComponent extends SubBaseComponent implements OnInit {

    title = 'Add ExternalAccount';

    externalAccountForm: FormGroup;
    externalAccount: ExternalAccount;

    constructor( http: HttpClient,
        private externalAccountService: ExternalAccountService,
        private fb: FormBuilder,
        private router: Router
) {
        super(http);
        this.externalAccountForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  name: ['', Validators.required],
      iban: ['', Validators.required],
      accountNumber: ['', Validators.required],
      bic: ['', Validators.required],
      bankName: ['', Validators.required],
      country: ['', Validators.required],
      Customer: ['', ],
      Transactions: ['', ]
        });
    }

    
    addExternalAccount(name, iban, accountNumber, bic, bankName, country, Customer, Transactions): void {
        this.externalAccountService
        .addExternalAccount(name, iban, accountNumber, bic, bankName, country, Customer, Transactions)
.then(() => {
        this.router.navigate(['/indexExternalAccount']);
    });
}

    ngOnInit(): void {
    }
}
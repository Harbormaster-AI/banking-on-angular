import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../services/Account.service';
import { Account } from '../../../models/account';

@Component({
    selector: 'app-create-account',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateAccountComponent implements OnInit {

    title = 'Add Account';

    accountForm: FormGroup;
    account: Account;

    constructor(
        private accountService: AccountService,
        private fb: FormBuilder,
        private router: Router
) {
        this.accountForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    addAccount(accountNumber, iban, accountName, currency, openedOn, closedOn, Bank, Branch, Product, Owners, Transactions, Statements, StandingInstructions, FeeCharges, AccountType, OwnershipType, Status): void {
        this.accountService
        .addAccount(accountNumber, iban, accountName, currency, openedOn, closedOn, Bank, Branch, Product, Owners, Transactions, Statements, StandingInstructions, FeeCharges, AccountType, OwnershipType, Status)
.then(() => {
        this.router.navigate(['/indexAccount']);
    });
}

    ngOnInit(): void {
    }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../services/Account.service';
import { Account } from '../../../models/Account';
import { SubBaseComponent } from '../../Account/sub.base.component';

@Component({
    selector: 'app-create-account',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateAccountComponent extends SubBaseComponent implements OnInit {

    title = 'Add Account';

    accountForm: FormGroup;
    account: Account;

    constructor(
        private accountService: AccountService,
        private fb: FormBuilder,
        private router: Router
) {
        super(http);
        this.accountForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  accountNumber: ['', Validators.required],
      iban: ['', Validators.required],
      accountName: ['', Validators.required],
      currency: ['', Validators.required],
      openedOn: ['', Validators.required],
      closedOn: ['', Validators.required],
      Bank: ['', ],
      Branch: ['', ],
      Product: ['', ],
      Owners: ['', ],
      Transactions: ['', ],
      Statements: ['', ],
      StandingInstructions: ['', ],
      FeeCharges: ['', ],
      AccountType: ['', ],
      OwnershipType: ['', ],
      Status: ['', ]
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
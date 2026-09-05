import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountStatementService } from '../../../services/AccountStatement.service';
import { AccountStatement } from '../../../models/accountStatement';

@Component({
    selector: 'app-create-accountStatement',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateAccountStatementComponent implements OnInit {

    title = 'Add AccountStatement';

    accountStatementForm: FormGroup;
    accountStatement: AccountStatement;

    constructor(
        private accountStatementService: AccountStatementService,
        private fb: FormBuilder,
        private router: Router
) {
        this.accountStatementForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  statementNumber: ['', Validators.required],
      periodStart: ['', Validators.required],
      periodEnd: ['', Validators.required],
      openingBalance: ['', Validators.required],
      closingBalance: ['', Validators.required],
      Account: ['', ],
      DeliveryMethod: ['', ]
        });
    }

    
    addAccountStatement(statementNumber, periodStart, periodEnd, openingBalance, closingBalance, Account, DeliveryMethod): void {
        this.accountStatementService
        .addAccountStatement(statementNumber, periodStart, periodEnd, openingBalance, closingBalance, Account, DeliveryMethod)
.then(() => {
        this.router.navigate(['/indexAccountStatement']);
    });
}

    ngOnInit(): void {
    }
}
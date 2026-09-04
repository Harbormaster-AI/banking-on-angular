
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountStatementService } from '../../../services/AccountStatement.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-accountStatement',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditAccountStatementComponent implements OnInit {

    title = 'Edit AccountStatement';

    accountStatementForm: FormGroup;
    accountStatement: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: AccountStatementService,
        private fb: FormBuilder
) {
        this.accountStatementForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    updateAccountStatement(statementNumber, periodStart, periodEnd, openingBalance, closingBalance, Account, DeliveryMethod): void {
        this.route.params.subscribe(params => {
                        this.service.updateAccountStatement(statementNumber, periodStart, periodEnd, openingBalance, closingBalance, Account, DeliveryMethod, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexAccountStatement']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editAccountStatement(params['id']).subscribe(res => {
                this.accountStatement = res;
            });
        });
    }
}
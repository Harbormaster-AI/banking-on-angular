import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AccountStatementService } from '../../../services/AccountStatement.service';
import { SubBaseComponent } from '../../AccountStatement/sub.base.component';


@Component({
    selector: 'app-edit-accountStatement',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditAccountStatementComponent extends SubBaseComponent implements OnInit {

    title = 'Edit AccountStatement';

    accountStatementForm: FormGroup;
    accountStatement: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: AccountStatementService,
        private fb: FormBuilder
) {
        super(http);
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

    
    updateAccountStatement(statementNumber, periodStart, periodEnd, openingBalance, closingBalance, Account, DeliveryMethod): void {
        this.route.params.subscribe(params => {
                        this.service.updateAccountStatement(statementNumber, periodStart, periodEnd, openingBalance, closingBalance, Account, DeliveryMethod, params['id'])
                            .subscribe(() => {
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
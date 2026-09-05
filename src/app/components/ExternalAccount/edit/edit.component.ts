import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ExternalAccountService } from '../../../services/ExternalAccount.service';
import { SubBaseComponent } from '../../ExternalAccount/sub.base.component';


@Component({
    selector: 'app-edit-externalAccount',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditExternalAccountComponent extends SubBaseComponent implements OnInit {

    title = 'Edit ExternalAccount';

    externalAccountForm: FormGroup;
    externalAccount: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: ExternalAccountService,
        private fb: FormBuilder
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

    
    updateExternalAccount(name, iban, accountNumber, bic, bankName, country, Customer, Transactions): void {
        this.route.params.subscribe(params => {
                        this.service.updateExternalAccount(name, iban, accountNumber, bic, bankName, country, Customer, Transactions, params['id'])
                            .subscribe(() => {
                    this.router.navigate(['/indexExternalAccount']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editExternalAccount(params['id']).subscribe(res => {
                this.externalAccount = res;
            });
        });
    }
}
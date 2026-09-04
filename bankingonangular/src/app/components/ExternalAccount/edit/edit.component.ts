
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalAccountService } from '../../../services/ExternalAccount.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-externalAccount',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditExternalAccountComponent implements OnInit {

    title = 'Edit ExternalAccount';

    externalAccountForm: FormGroup;
    externalAccount: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ExternalAccountService,
        private fb: FormBuilder
) {
        this.externalAccountForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    updateExternalAccount(name, iban, accountNumber, bic, bankName, country, Customer, Transactions): void {
        this.route.params.subscribe(params => {
                        this.service.updateExternalAccount(name, iban, accountNumber, bic, bankName, country, Customer, Transactions, params['id'])
                            .then(() => {
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
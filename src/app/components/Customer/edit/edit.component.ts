
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../services/Customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-customer',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditCustomerComponent implements OnInit {

    title = 'Edit Customer';

    customerForm: FormGroup;
    customer: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CustomerService,
        private fb: FormBuilder
) {
        this.customerForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    updateCustomer(firstName, lastName, legalName, dateOfBirth, taxId, email, phone, address, Bank, Accounts, LoanAccounts, PaymentCards, ExternalAccounts, FundsTransfers, Disputes, KycProfiles, Consents, CustomerType, RiskRating, KycStatus): void {
        this.route.params.subscribe(params => {
                        this.service.updateCustomer(firstName, lastName, legalName, dateOfBirth, taxId, email, phone, address, Bank, Accounts, LoanAccounts, PaymentCards, ExternalAccounts, FundsTransfers, Disputes, KycProfiles, Consents, CustomerType, RiskRating, KycStatus, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexCustomer']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editCustomer(params['id']).subscribe(res => {
                this.customer = res;
            });
        });
    }
}
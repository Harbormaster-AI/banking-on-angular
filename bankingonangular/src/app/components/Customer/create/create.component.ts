import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/Customer.service';
import { Customer } from '../../../models/customer';

@Component({
    selector: 'app-create-customer',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateCustomerComponent implements OnInit {

    title = 'Add Customer';

    customerForm: FormGroup;
    customer: Customer;

    constructor(
        private customerService: CustomerService,
        private fb: FormBuilder,
        private router: Router
) {
        this.customerForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    addCustomer(firstName, lastName, legalName, dateOfBirth, taxId, email, phone, address, Bank, Accounts, LoanAccounts, PaymentCards, ExternalAccounts, FundsTransfers, Disputes, KycProfiles, Consents, CustomerType, RiskRating, KycStatus): void {
        this.customerService
        .addCustomer(firstName, lastName, legalName, dateOfBirth, taxId, email, phone, address, Bank, Accounts, LoanAccounts, PaymentCards, ExternalAccounts, FundsTransfers, Disputes, KycProfiles, Consents, CustomerType, RiskRating, KycStatus)
.then(() => {
        this.router.navigate(['/indexCustomer']);
    });
}

    ngOnInit(): void {
    }
}
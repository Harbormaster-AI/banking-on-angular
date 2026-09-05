import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/Customer.service';
import { Customer } from '../../../models/Customer';
import { SubBaseComponent } from '../../Customer/sub.base.component';

@Component({
    selector: 'app-create-customer',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateCustomerComponent extends SubBaseComponent implements OnInit {

    title = 'Add Customer';

    customerForm: FormGroup;
    customer: Customer;

    constructor( http: HttpClient,
        private customerService: CustomerService,
        private fb: FormBuilder,
        private router: Router
) {
        super(http);
        this.customerForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      legalName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      taxId: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      Bank: ['', ],
      Accounts: ['', ],
      LoanAccounts: ['', ],
      PaymentCards: ['', ],
      ExternalAccounts: ['', ],
      FundsTransfers: ['', ],
      Disputes: ['', ],
      KycProfiles: ['', ],
      Consents: ['', ],
      CustomerType: ['', ],
      RiskRating: ['', ],
      KycStatus: ['', ]
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/Customer.service';
import { Customer } from '../../../models/Customer';

@Component({
    selector: 'app-index-customer',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexCustomerComponent implements OnInit {

    customers: Customer[] = [];

    constructor(
        private router: Router,
        private service: CustomerService
) {}

    ngOnInit(): void {
        this.getCustomers();
}

    getCustomers(): void {
        this.service.getCustomers().subscribe(res => {
        this.customers = res;
    });
}

    deleteCustomer(id: any): void {
        this.service.deleteCustomer(id)
            .then(() => {
                this.getCustomers();
            });
    }
}
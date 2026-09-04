import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankingProductService } from '../../../services/BankingProduct.service';
import { BankingProduct } from '../../../models/bankingProduct';

@Component({
    selector: 'app-create-bankingProduct',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateBankingProductComponent implements OnInit {

    title = 'Add BankingProduct';

    bankingProductForm: FormGroup;
    bankingProduct: BankingProduct;

    constructor(
        private bankingProductService: BankingProductService,
        private fb: FormBuilder,
        private router: Router
) {
        this.bankingProductForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    addBankingProduct(productCode, name, description, Bank, Accounts, LoanAccounts, PaymentCards, ProductCategory): void {
        this.bankingProductService
        .addBankingProduct(productCode, name, description, Bank, Accounts, LoanAccounts, PaymentCards, ProductCategory)
.then(() => {
        this.router.navigate(['/indexBankingProduct']);
    });
}

    ngOnInit(): void {
    }
}
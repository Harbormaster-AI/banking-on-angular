import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankingProductService } from '../../../services/BankingProduct.service';
import { BankingProduct } from '../../../models/BankingProduct';
import { SubBaseComponent } from '../../BankingProduct/sub.base.component';

@Component({
    selector: 'app-create-bankingProduct',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateBankingProductComponent extends SubBaseComponent implements OnInit {

    title = 'Add BankingProduct';

    bankingProductForm: FormGroup;
    bankingProduct: BankingProduct;

    constructor( http: HttpClient,
        private bankingProductService: BankingProductService,
        private fb: FormBuilder,
        private router: Router
) {
        super(http);
        this.bankingProductForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  productCode: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      Bank: ['', ],
      Accounts: ['', ],
      LoanAccounts: ['', ],
      PaymentCards: ['', ],
      ProductCategory: ['', ]
        });
    }

    
    addBankingProduct(productCode, name, description, Bank, Accounts, LoanAccounts, PaymentCards, ProductCategory): void {
        this.bankingProductService
        .addBankingProduct(productCode, name, description, Bank, Accounts, LoanAccounts, PaymentCards, ProductCategory)
            .subscribe(() => {
                this.router.navigate(['/indexBankingProduct']);
            });
    }

    ngOnInit(): void {
    }
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BankingProductService } from '../../../services/BankingProduct.service';
import { SubBaseComponent } from '../../BankingProduct/sub.base.component';


@Component({
    selector: 'app-edit-bankingProduct',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditBankingProductComponent extends SubBaseComponent implements OnInit {

    title = 'Edit BankingProduct';

    bankingProductForm: FormGroup;
    bankingProduct: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: BankingProductService,
        private fb: FormBuilder
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

    
    updateBankingProduct(productCode, name, description, Bank, Accounts, LoanAccounts, PaymentCards, ProductCategory): void {
        this.route.params.subscribe((params) => {

                        this.service.updateBankingProduct(productCode, name, description, Bank, Accounts, LoanAccounts, PaymentCards, ProductCategory, params['id'])
                            .subscribe(() => {
                    this.router.navigate(['/indexBankingProduct']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.service.editBankingProduct(params['id']).subscribe(res => {
                this.bankingProduct = res;
            });
        });
    }
}
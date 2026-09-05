
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankingProductService } from '../../../services/BankingProduct.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-bankingProduct',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditBankingProductComponent implements OnInit {

    title = 'Edit BankingProduct';

    bankingProductForm: FormGroup;
    bankingProduct: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: BankingProductService,
        private fb: FormBuilder
) {
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
        this.route.params.subscribe(params => {
                        this.service.updateBankingProduct(productCode, name, description, Bank, Accounts, LoanAccounts, PaymentCards, ProductCategory, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexBankingProduct']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editBankingProduct(params['id']).subscribe(res => {
                this.bankingProduct = res;
            });
        });
    }
}
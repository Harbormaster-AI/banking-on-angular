
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingProductService } from '../../../services/BankingProduct.service';
import { BankingProduct } from '../../../models/BankingProduct';

@Component({
    selector: 'app-index-bankingProduct',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexBankingProductComponent implements OnInit {

    bankingProducts: BankingProduct[] = [];

    constructor(
        private router: Router,
        private service: BankingProductService
) {}

    ngOnInit(): void {
        this.getBankingProducts();
}

    getBankingProducts(): void {
        this.service.getBankingProducts().subscribe(res => {
        this.bankingProducts = res;
    });
}

    deleteBankingProduct(id: any): void {
        this.service.deleteBankingProduct(id)
            .subscribe(() => {
                this.getBankingProducts();
            });
    }
}
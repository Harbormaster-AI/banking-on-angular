
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeeChargeService } from '../../../services/FeeCharge.service';
import { FeeCharge } from '../../../models/FeeCharge';

@Component({
    selector: 'app-index-feeCharge',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexFeeChargeComponent implements OnInit {

    feeCharges: FeeCharge[] = [];

    constructor(
        private router: Router,
        private service: FeeChargeService
) {}

    ngOnInit(): void {
        this.getFeeCharges();
}

    getFeeCharges(): void {
        this.service.getFeeCharges().subscribe(res => {
        this.feeCharges = res;
    });
}

    deleteFeeCharge(id: any): void {
        this.service.deleteFeeCharge(id)
            .subscribe(() => {
                this.getFeeCharges();
            });
    }
}
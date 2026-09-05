
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollateralService } from '../../../services/Collateral.service';
import { Collateral } from '../../../models/Collateral';

@Component({
    selector: 'app-index-collateral',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexCollateralComponent extemds BaseComponent {

    collaterals: Collateral[] = [];

    constructor(
        private router: Router,
        private service: CollateralService
) {}

    ngOnInit(): void {
        this.getCollaterals();
}

    getCollaterals(): void {
        this.service.getCollaterals().subscribe(res : Collateral[] => {
        this.collaterals = res;
    });
}

    deleteCollateral(id: any): void {
        this.service.deleteCollateral(id)
            .then(() => {
                this.getCollaterals();
            });
    }
}
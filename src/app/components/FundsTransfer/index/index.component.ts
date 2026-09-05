
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FundsTransferService } from '../../../services/FundsTransfer.service';
import { FundsTransfer } from '../../../models/FundsTransfer';

@Component({
    selector: 'app-index-fundsTransfer',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexFundsTransferComponent implements OnInit {

    fundsTransfers: FundsTransfer[] = [];

    constructor(
        private router: Router,
        private service: FundsTransferService
) {}

    ngOnInit(): void {
        this.getFundsTransfers();
}

    getFundsTransfers(): void {
        this.service.getFundsTransfers().subscribe((res) => {
        this.fundsTransfers = res;
    });
}

    deleteFundsTransfer(id: any): void {
        this.service.deleteFundsTransfer(id)
            .subscribe(() => {
                this.getFundsTransfers();
            });
    }
}
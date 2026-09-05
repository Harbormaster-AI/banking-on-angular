
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisputeService } from '../../../services/Dispute.service';
import { Dispute } from '../../../models/Dispute';

@Component({
    selector: 'app-index-dispute',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexDisputeComponent implements OnInit {

    disputes: Dispute[] = [];

    constructor(
        private router: Router,
        private service: DisputeService
) {}

    ngOnInit(): void {
        this.getDisputes();
}

    getDisputes(): void {
        this.service.getDisputes().subscribe(res => {
        this.disputes = res;
    });
}

    deleteDispute(id: any): void {
        this.service.deleteDispute(id)
            .then(() => {
                this.getDisputes();
            });
    }
}
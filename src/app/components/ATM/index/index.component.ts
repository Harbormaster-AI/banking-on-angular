
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ATMService } from '../../../services/ATM.service';
import { ATM } from '../../../models/ATM';

@Component({
    selector: 'app-index-aTM',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexATMComponent implements OnInit {

    aTMs: ATM[] = [];

    constructor(
        private router: Router,
        private service: ATMService
) {}

    ngOnInit(): void {
        this.getATMs();
}

    getATMs(): void {
        this.service.getATMs().subscribe((res) => {
        this.aTMs = res;
    });
}

    deleteATM(id: any): void {
        this.service.deleteATM(id)
            .subscribe(() => {
                this.getATMs();
            });
    }
}
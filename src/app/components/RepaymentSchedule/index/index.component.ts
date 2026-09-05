
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepaymentScheduleService } from '../../../services/RepaymentSchedule.service';
import { RepaymentSchedule } from '../../../models/RepaymentSchedule';

@Component({
    selector: 'app-index-repaymentSchedule',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexRepaymentScheduleComponent implements OnInit {

    repaymentSchedules: RepaymentSchedule[] = [];

    constructor(
        private router: Router,
        private service: RepaymentScheduleService
) {}

    ngOnInit(): void {
        this.getRepaymentSchedules();
}

    getRepaymentSchedules(): void {
        this.service.getRepaymentSchedules().subscribe(res => {
        this.repaymentSchedules = res;
    });
}

    deleteRepaymentSchedule(id: any): void {
        this.service.deleteRepaymentSchedule(id)
            .then(() => {
                this.getRepaymentSchedules();
            });
    }
}
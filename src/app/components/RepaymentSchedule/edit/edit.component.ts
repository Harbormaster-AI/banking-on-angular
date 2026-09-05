import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RepaymentScheduleService } from '../../../services/RepaymentSchedule.service';
import { SubBaseComponent } from '../../RepaymentSchedule/sub.base.component';


@Component({
    selector: 'app-edit-repaymentSchedule',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditRepaymentScheduleComponent extends SubBaseComponent implements OnInit {

    title = 'Edit RepaymentSchedule';

    repaymentScheduleForm: FormGroup;
    repaymentSchedule: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: RepaymentScheduleService,
        private fb: FormBuilder
) {
        super(http);
        this.repaymentScheduleForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  installmentNumber: ['', Validators.required],
      dueDate: ['', Validators.required],
      principalDue: ['', Validators.required],
      interestDue: ['', Validators.required],
      totalDue: ['', Validators.required],
      LoanAccount: ['', ],
      Payment: ['', ],
      Status: ['', ]
        });
    }

    
    updateRepaymentSchedule(installmentNumber, dueDate, principalDue, interestDue, totalDue, LoanAccount, Payment, Status): void {
        this.route.params.subscribe((params) => {

                        this.service.updateRepaymentSchedule(installmentNumber, dueDate, principalDue, interestDue, totalDue, LoanAccount, Payment, Status, params['id'])
                            .subscribe(() => {
                    this.router.navigate(['/indexRepaymentSchedule']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.service.editRepaymentSchedule(params['id']).subscribe(res => {
                this.repaymentSchedule = res;
            });
        });
    }
}
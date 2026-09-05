
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepaymentScheduleService } from '../../../services/RepaymentSchedule.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-repaymentSchedule',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditRepaymentScheduleComponent implements OnInit {

    title = 'Edit RepaymentSchedule';

    repaymentScheduleForm: FormGroup;
    repaymentSchedule: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: RepaymentScheduleService,
        private fb: FormBuilder
) {
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
        this.route.params.subscribe(params => {
                        this.service.updateRepaymentSchedule(installmentNumber, dueDate, principalDue, interestDue, totalDue, LoanAccount, Payment, Status, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexRepaymentSchedule']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editRepaymentSchedule(params['id']).subscribe(res => {
                this.repaymentSchedule = res;
            });
        });
    }
}
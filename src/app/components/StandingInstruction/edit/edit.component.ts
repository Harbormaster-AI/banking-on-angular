import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StandingInstructionService } from '../../../services/StandingInstruction.service';
import { SubBaseComponent } from '../../StandingInstruction/sub.base.component';


@Component({
    selector: 'app-edit-standingInstruction',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditStandingInstructionComponent extends SubBaseComponent implements OnInit {

    title = 'Edit StandingInstruction';

    standingInstructionForm: FormGroup;
    standingInstruction: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: StandingInstructionService,
        private fb: FormBuilder
) {
        super(http);
        this.standingInstructionForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  instructionId: ['', Validators.required],
      amount: ['', Validators.required],
      nextExecutionDate: ['', Validators.required],
      Account: ['', ],
      Beneficiary: ['', ],
      Frequency: ['', ],
      Status: ['', ]
        });
    }

    
    updateStandingInstruction(instructionId, amount, nextExecutionDate, Account, Beneficiary, Frequency, Status): void {
        this.route.params.subscribe((params) => {

                        this.service.updateStandingInstruction(instructionId, amount, nextExecutionDate, Account, Beneficiary, Frequency, Status, params['id'])
                            .subscribe(() => {
                    this.router.navigate(['/indexStandingInstruction']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.service.editStandingInstruction(params['id']).subscribe(res => {
                this.standingInstruction = res;
            });
        });
    }
}
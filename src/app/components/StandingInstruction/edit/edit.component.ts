
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StandingInstructionService } from '../../../services/StandingInstruction.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-standingInstruction',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditStandingInstructionComponent implements OnInit {

    title = 'Edit StandingInstruction';

    standingInstructionForm: FormGroup;
    standingInstruction: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: StandingInstructionService,
        private fb: FormBuilder
) {
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
        this.route.params.subscribe(params => {
                        this.service.updateStandingInstruction(instructionId, amount, nextExecutionDate, Account, Beneficiary, Frequency, Status, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexStandingInstruction']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editStandingInstruction(params['id']).subscribe(res => {
                this.standingInstruction = res;
            });
        });
    }
}
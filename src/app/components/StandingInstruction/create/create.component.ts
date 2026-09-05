import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StandingInstructionService } from '../../../services/StandingInstruction.service';
import { StandingInstruction } from '../../../models/standingInstruction';

@Component({
    selector: 'app-create-standingInstruction',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateStandingInstructionComponent implements OnInit {

    title = 'Add StandingInstruction';

    standingInstructionForm: FormGroup;
    standingInstruction: StandingInstruction;

    constructor(
        private standingInstructionService: StandingInstructionService,
        private fb: FormBuilder,
        private router: Router
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

    
    addStandingInstruction(instructionId, amount, nextExecutionDate, Account, Beneficiary, Frequency, Status): void {
        this.standingInstructionService
        .addStandingInstruction(instructionId, amount, nextExecutionDate, Account, Beneficiary, Frequency, Status)
.then(() => {
        this.router.navigate(['/indexStandingInstruction']);
    });
}

    ngOnInit(): void {
    }
}
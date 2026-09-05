import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RiskAssessmentService } from '../../../services/RiskAssessment.service';
import { RiskAssessment } from '../../../models/riskAssessment';

@Component({
    selector: 'app-create-riskAssessment',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateRiskAssessmentComponent implements OnInit {

    title = 'Add RiskAssessment';

    riskAssessmentForm: FormGroup;
    riskAssessment: RiskAssessment;

    constructor(
        private riskAssessmentService: RiskAssessmentService,
        private fb: FormBuilder,
        private router: Router
) {
        this.riskAssessmentForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  score: ['', Validators.required],
      assessedOn: ['', Validators.required],
      KycProfile: ['', ],
      Rating: ['', ]
        });
    }

    
    addRiskAssessment(score, assessedOn, KycProfile, Rating): void {
        this.riskAssessmentService
        .addRiskAssessment(score, assessedOn, KycProfile, Rating)
.then(() => {
        this.router.navigate(['/indexRiskAssessment']);
    });
}

    ngOnInit(): void {
    }
}
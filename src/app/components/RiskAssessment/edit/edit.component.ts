import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RiskAssessmentService } from '../../../services/RiskAssessment.service';
import { SubBaseComponent } from '../../RiskAssessment/sub.base.component';


@Component({
    selector: 'app-edit-riskAssessment',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditRiskAssessmentComponent extends SubBaseComponent implements OnInit {

    title = 'Edit RiskAssessment';

    riskAssessmentForm: FormGroup;
    riskAssessment: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: RiskAssessmentService,
        private fb: FormBuilder
) {
        super(http);
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

    
    updateRiskAssessment(score, assessedOn, KycProfile, Rating): void {
        this.route.params.subscribe((params) => {

                        this.service.updateRiskAssessment(score, assessedOn, KycProfile, Rating, params['id'])
                            .subscribe(() => {
                    this.router.navigate(['/indexRiskAssessment']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.service.editRiskAssessment(params['id']).subscribe(res => {
                this.riskAssessment = res;
            });
        });
    }
}
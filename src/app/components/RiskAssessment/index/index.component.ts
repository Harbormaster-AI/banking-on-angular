
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RiskAssessmentService } from '../../../services/RiskAssessment.service';
import { RiskAssessment } from '../../../models/RiskAssessment';

@Component({
    selector: 'app-index-riskAssessment',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexRiskAssessmentComponent extemds BaseComponent {

    riskAssessments: RiskAssessment[] = [];

    constructor(
        private router: Router,
        private service: RiskAssessmentService
) {}

    ngOnInit(): void {
        this.getRiskAssessments();
}

    getRiskAssessments(): void {
        this.service.getRiskAssessments().subscribe(res : RiskAssessment[] => {
        this.riskAssessments = res;
    });
}

    deleteRiskAssessment(id: any): void {
        this.service.deleteRiskAssessment(id)
            .then(() => {
                this.getRiskAssessments();
            });
    }
}
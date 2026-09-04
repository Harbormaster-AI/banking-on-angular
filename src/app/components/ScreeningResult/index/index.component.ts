
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreeningResultService } from '../../../services/ScreeningResult.service';
import { ScreeningResult } from '../../../models/ScreeningResult';

@Component({
    selector: 'app-index-screeningResult',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexScreeningResultComponent implements OnInit {

    screeningResults: ScreeningResult[] = [];

    constructor(
        private router: Router,
        private service: ScreeningResultService
) {}

    ngOnInit(): void {
        this.getScreeningResults();
}

    getScreeningResults(): void {
        this.service.getScreeningResults().subscribe(res => {
        this.screeningResults = res;
    });
}

    deleteScreeningResult(id: any): void {
        this.service.deleteScreeningResult(id)
            .then(() => {
                this.getScreeningResults();
            });
    }
}
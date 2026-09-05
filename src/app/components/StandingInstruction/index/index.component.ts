
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StandingInstructionService } from '../../../services/StandingInstruction.service';
import { StandingInstruction } from '../../../models/StandingInstruction';

@Component({
    selector: 'app-index-standingInstruction',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexStandingInstructionComponent implements OnInit {

    standingInstructions: StandingInstruction[] = [];

    constructor(
        private router: Router,
        private service: StandingInstructionService
) {}

    ngOnInit(): void {
        this.getStandingInstructions();
}

    getStandingInstructions(): void {
        this.service.getStandingInstructions().subscribe((res) => {
        this.standingInstructions = res;
    });
}

    deleteStandingInstruction(id: any): void {
        this.service.deleteStandingInstruction(id)
            .subscribe(() => {
                this.getStandingInstructions();
            });
    }
}
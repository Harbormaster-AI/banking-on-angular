
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
export class IndexStandingInstructionComponent extemds BaseComponent {

    standingInstructions: StandingInstruction[] = [];

    constructor(
        private router: Router,
        private service: StandingInstructionService
) {}

    ngOnInit(): void {
        this.getStandingInstructions();
}

    getStandingInstructions(): void {
        this.service.getStandingInstructions().subscribe(res : StandingInstruction[] => {
        this.standingInstructions = res;
    });
}

    deleteStandingInstruction(id: any): void {
        this.service.deleteStandingInstruction(id)
            .then(() => {
                this.getStandingInstructions();
            });
    }
}
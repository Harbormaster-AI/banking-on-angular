
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchService } from '../../../services/Branch.service';
import { Branch } from '../../../models/Branch';

@Component({
    selector: 'app-index-branch',
    standalone: false,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexBranchComponent extemds BaseComponent {

    branchs: Branch[] = [];

    constructor(
        private router: Router,
        private service: BranchService
) {}

    ngOnInit(): void {
        this.getBranchs();
}

    getBranchs(): void {
        this.service.getBranchs().subscribe(res : Branch[] => {
        this.branchs = res;
    });
}

    deleteBranch(id: any): void {
        this.service.deleteBranch(id)
            .then(() => {
                this.getBranchs();
            });
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../../../services/Branch.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-branch',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditBranchComponent implements OnInit {

    title = 'Edit Branch';

    branchForm: FormGroup;
    branch: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: BranchService,
        private fb: FormBuilder
) {
        this.branchForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    updateBranch(name, branchCode, address, phone, openingHours, Bank, Accounts, LoanAccounts, Atms): void {
        this.route.params.subscribe(params => {
                        this.service.updateBranch(name, branchCode, address, phone, openingHours, Bank, Accounts, LoanAccounts, Atms, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexBranch']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editBranch(params['id']).subscribe(res => {
                this.branch = res;
            });
        });
    }
}
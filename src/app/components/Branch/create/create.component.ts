import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from '../../../services/Branch.service';
import { Branch } from '../../../models/Branch';

@Component({
    selector: 'app-create-branch',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateBranchComponent implements OnInit {

    title = 'Add Branch';

    branchForm: FormGroup;
    branch: Branch;

    constructor(
        private branchService: BranchService,
        private fb: FormBuilder,
        private router: Router
) {
        this.branchForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  name: ['', Validators.required],
      branchCode: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      openingHours: ['', Validators.required],
      Bank: ['', ],
      Accounts: ['', ],
      LoanAccounts: ['', ],
      Atms: ['', ]
        });
    }

    
    addBranch(name, branchCode, address, phone, openingHours, Bank, Accounts, LoanAccounts, Atms): void {
        this.branchService
        .addBranch(name, branchCode, address, phone, openingHours, Bank, Accounts, LoanAccounts, Atms)
.then(() => {
        this.router.navigate(['/indexBranch']);
    });
}

    ngOnInit(): void {
    }
}
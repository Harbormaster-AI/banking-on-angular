import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FundsTransferService } from '../../../services/FundsTransfer.service';
import { FundsTransfer } from '../../../models/FundsTransfer';
import { SubBaseComponent } from '../../FundsTransfer/sub.base.component';

@Component({
    selector: 'app-create-fundsTransfer',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateFundsTransferComponent extends SubBaseComponent implements OnInit {

    title = 'Add FundsTransfer';

    fundsTransferForm: FormGroup;
    fundsTransfer: FundsTransfer;

    constructor(
        private fundsTransferService: FundsTransferService,
        private fb: FormBuilder,
        private router: Router
) {
        this.fundsTransferForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  transferReference: ['', Validators.required],
      amount: ['', Validators.required],
      requestedDate: ['', Validators.required],
      executionDate: ['', Validators.required],
      purpose: ['', Validators.required],
      feeAmount: ['', Validators.required],
      SourceAccount: ['', ],
      DestinationAccount: ['', ],
      ExternalBeneficiary: ['', ],
      InitiatedBy: ['', ],
      Transactions: ['', ],
      Method: ['', ],
      Status: ['', ]
        });
    }

    
    addFundsTransfer(transferReference, amount, requestedDate, executionDate, purpose, feeAmount, SourceAccount, DestinationAccount, ExternalBeneficiary, InitiatedBy, Transactions, Method, Status): void {
        this.fundsTransferService
        .addFundsTransfer(transferReference, amount, requestedDate, executionDate, purpose, feeAmount, SourceAccount, DestinationAccount, ExternalBeneficiary, InitiatedBy, Transactions, Method, Status)
.then(() => {
        this.router.navigate(['/indexFundsTransfer']);
    });
}

    ngOnInit(): void {
    }
}
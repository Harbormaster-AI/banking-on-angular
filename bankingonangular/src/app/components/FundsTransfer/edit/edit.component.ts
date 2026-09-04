
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundsTransferService } from '../../../services/FundsTransfer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-fundsTransfer',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditFundsTransferComponent implements OnInit {

    title = 'Edit FundsTransfer';

    fundsTransferForm: FormGroup;
    fundsTransfer: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: FundsTransferService,
        private fb: FormBuilder
) {
        this.fundsTransferForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
        });
    }

    
    updateFundsTransfer(transferReference, amount, requestedDate, executionDate, purpose, feeAmount, SourceAccount, DestinationAccount, ExternalBeneficiary, InitiatedBy, Transactions, Method, Status): void {
        this.route.params.subscribe(params => {
                        this.service.updateFundsTransfer(transferReference, amount, requestedDate, executionDate, purpose, feeAmount, SourceAccount, DestinationAccount, ExternalBeneficiary, InitiatedBy, Transactions, Method, Status, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexFundsTransfer']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editFundsTransfer(params['id']).subscribe(res => {
                this.fundsTransfer = res;
            });
        });
    }
}
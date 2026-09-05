import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisputeService } from '../../../services/Dispute.service';
import { Dispute } from '../../../models/Dispute';
import { SubBaseComponent } from '../../Dispute/sub.base.component';

@Component({
    selector: 'app-create-dispute',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateDisputeComponent extends SubBaseComponent implements OnInit {

    title = 'Add Dispute';

    disputeForm: FormGroup;
    dispute: Dispute;

    constructor(
        private disputeService: DisputeService,
        private fb: FormBuilder,
        private router: Router
) {
        super(http);
        this.disputeForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  disputeReference: ['', Validators.required],
      raisedOn: ['', Validators.required],
      reason: ['', Validators.required],
      Transaction: ['', ],
      Customer: ['', ],
      Account: ['', ],
      PaymentCard: ['', ],
      Status: ['', ]
        });
    }

    
    addDispute(disputeReference, raisedOn, reason, Transaction, Customer, Account, PaymentCard, Status): void {
        this.disputeService
        .addDispute(disputeReference, raisedOn, reason, Transaction, Customer, Account, PaymentCard, Status)
.then(() => {
        this.router.navigate(['/indexDispute']);
    });
}

    ngOnInit(): void {
    }
}
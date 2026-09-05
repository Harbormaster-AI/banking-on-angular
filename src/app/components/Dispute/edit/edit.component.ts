
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisputeService } from '../../../services/Dispute.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-dispute',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditDisputeComponent implements OnInit {

    title = 'Edit Dispute';

    disputeForm: FormGroup;
    dispute: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: DisputeService,
        private fb: FormBuilder
) {
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

    
    updateDispute(disputeReference, raisedOn, reason, Transaction, Customer, Account, PaymentCard, Status): void {
        this.route.params.subscribe(params => {
                        this.service.updateDispute(disputeReference, raisedOn, reason, Transaction, Customer, Account, PaymentCard, Status, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexDispute']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editDispute(params['id']).subscribe(res => {
                this.dispute = res;
            });
        });
    }
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DisputeService } from '../../../services/Dispute.service';
import { SubBaseComponent } from '../../Dispute/sub.base.component';


@Component({
    selector: 'app-edit-dispute',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditDisputeComponent extends SubBaseComponent implements OnInit {

    title = 'Edit Dispute';

    disputeForm: FormGroup;
    dispute: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: DisputeService,
        private fb: FormBuilder
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
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TransactionService } from '../../../services/Transaction.service';
import { SubBaseComponent } from '../../Transaction/sub.base.component';


@Component({
    selector: 'app-edit-transaction',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditTransactionComponent extends SubBaseComponent implements OnInit {

    title = 'Edit Transaction';

    transactionForm: FormGroup;
    transaction: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: TransactionService,
        private fb: FormBuilder
) {
        super(http);
        this.transactionForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  bookingDate: ['', Validators.required],
      valueDate: ['', Validators.required],
      amount: ['', Validators.required],
      description: ['', Validators.required],
      Account: ['', ],
      ExternalCounterparty: ['', ],
      PaymentCard: ['', ],
      FundsTransfer: ['', ],
      FxTrade: ['', ],
      Dispute: ['', ],
      Direction: ['', ],
      TransactionType: ['', ],
      Status: ['', ],
      Channel: ['', ]
        });
    }

    
    updateTransaction(bookingDate, valueDate, amount, description, Account, ExternalCounterparty, PaymentCard, FundsTransfer, FxTrade, Dispute, Direction, TransactionType, Status, Channel): void {
        this.route.params.subscribe(params => {
                        this.service.updateTransaction(bookingDate, valueDate, amount, description, Account, ExternalCounterparty, PaymentCard, FundsTransfer, FxTrade, Dispute, Direction, TransactionType, Status, Channel, params['id'])
                            .subscribe(() => {
                    this.router.navigate(['/indexTransaction']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editTransaction(params['id']).subscribe(res => {
                this.transaction = res;
            });
        });
    }
}
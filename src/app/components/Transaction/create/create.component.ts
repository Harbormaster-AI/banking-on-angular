import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../../services/Transaction.service';
import { Transaction } from '../../../models/Transaction';
import { SubBaseComponent } from '../../Transaction/sub.base.component';

@Component({
    selector: 'app-create-transaction',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateTransactionComponent extends SubBaseComponent implements OnInit {

    title = 'Add Transaction';

    transactionForm: FormGroup;
    transaction: Transaction;

    constructor(
        private transactionService: TransactionService,
        private fb: FormBuilder,
        private router: Router
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

    
    addTransaction(bookingDate, valueDate, amount, description, Account, ExternalCounterparty, PaymentCard, FundsTransfer, FxTrade, Dispute, Direction, TransactionType, Status, Channel): void {
        this.transactionService
        .addTransaction(bookingDate, valueDate, amount, description, Account, ExternalCounterparty, PaymentCard, FundsTransfer, FxTrade, Dispute, Direction, TransactionType, Status, Channel)
.then(() => {
        this.router.navigate(['/indexTransaction']);
    });
}

    ngOnInit(): void {
    }
}
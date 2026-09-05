import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentCardService } from '../../../services/PaymentCard.service';
import { PaymentCard } from '../../../models/PaymentCard';
import { SubBaseComponent } from '../../PaymentCard/sub.base.component';

@Component({
    selector: 'app-create-paymentCard',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreatePaymentCardComponent extends SubBaseComponent implements OnInit {

    title = 'Add PaymentCard';

    paymentCardForm: FormGroup;
    paymentCard: PaymentCard;

    constructor(
        private paymentCardService: PaymentCardService,
        private fb: FormBuilder,
        private router: Router
) {
        super(http);
        this.paymentCardForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  cardNumber: ['', Validators.required],
      embossedName: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      Bank: ['', ],
      Account: ['', ],
      Customer: ['', ],
      Transactions: ['', ],
      CardType: ['', ],
      CardStatus: ['', ],
      Network: ['', ]
        });
    }

    
    addPaymentCard(cardNumber, embossedName, expiryMonth, expiryYear, Bank, Account, Customer, Transactions, CardType, CardStatus, Network): void {
        this.paymentCardService
        .addPaymentCard(cardNumber, embossedName, expiryMonth, expiryYear, Bank, Account, Customer, Transactions, CardType, CardStatus, Network)
.then(() => {
        this.router.navigate(['/indexPaymentCard']);
    });
}

    ngOnInit(): void {
    }
}
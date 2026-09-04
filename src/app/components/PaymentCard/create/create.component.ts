import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentCardService } from '../../../services/PaymentCard.service';
import { PaymentCard } from '../../../models/paymentCard';

@Component({
    selector: 'app-create-paymentCard',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreatePaymentCardComponent implements OnInit {

    title = 'Add PaymentCard';

    paymentCardForm: FormGroup;
    paymentCard: PaymentCard;

    constructor(
        private paymentCardService: PaymentCardService,
        private fb: FormBuilder,
        private router: Router
) {
        this.paymentCardForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            #outputDataValidators()
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
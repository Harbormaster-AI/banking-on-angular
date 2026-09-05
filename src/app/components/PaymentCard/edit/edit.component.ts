import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PaymentCardService } from '../../../services/PaymentCard.service';
import { SubBaseComponent } from '../../PaymentCard/sub.base.component';


@Component({
    selector: 'app-edit-paymentCard',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditPaymentCardComponent extends SubBaseComponent implements OnInit {

    title = 'Edit PaymentCard';

    paymentCardForm: FormGroup;
    paymentCard: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: PaymentCardService,
        private fb: FormBuilder
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

    
    updatePaymentCard(cardNumber, embossedName, expiryMonth, expiryYear, Bank, Account, Customer, Transactions, CardType, CardStatus, Network): void {
        this.route.params.subscribe(params => {
                        this.service.updatePaymentCard(cardNumber, embossedName, expiryMonth, expiryYear, Bank, Account, Customer, Transactions, CardType, CardStatus, Network, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexPaymentCard']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editPaymentCard(params['id']).subscribe(res => {
                this.paymentCard = res;
            });
        });
    }
}
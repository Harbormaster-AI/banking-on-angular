import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, switchMap } from "rxjs";
import { PaymentCard } from "../models/PaymentCard";
import { Bank } from "../models/Bank";
import { Account } from "../models/Account";
import { Customer } from "../models/Customer";
import { Transaction } from "../models/Transaction";
import { BankService } from "../services/Bank.service";
import { AccountService } from "../services/Account.service";
import { CustomerService } from "../services/Customer.service";
import { TransactionService } from "../services/Transaction.service";
import { HelperBaseService } from "./helperbase.service";

@Injectable({
  providedIn: "root",
})
export class PaymentCardService extends HelperBaseService {
  //********************************************************************
  // general holder
  //********************************************************************
  paymentCard: PaymentCard;

  //********************************************************************
  // Catch all for the return value of a service call
  //********************************************************************
  result: any;

  //********************************************************************
  // sole constructor, injected with the HttpClient
  //********************************************************************
  constructor(private http: HttpClient) {
    super();
  }

  //********************************************************************
  // add a PaymentCard
  // returns the results untouched as a JSON representation
  // delegates via URI
  //********************************************************************
  addPaymentCard(
    cardNumber,
    embossedName,
    expiryMonth,
    expiryYear,
    Bank,
    Account,
    Customer,
    Transactions,
    CardType,
    CardStatus,
    Network,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/PaymentCard/create";
    const obj = {
      cardNumber: cardNumber,
      embossedName: embossedName,
      expiryMonth: expiryMonth,
      expiryYear: expiryYear,
      Bank: Bank != null && Bank.length > 0 ? Bank : null,
      Account: Account != null && Account.length > 0 ? Account : null,
      Customer: Customer != null && Customer.length > 0 ? Customer : null,
      Transactions:
        Transactions != null && Transactions.length > 0 ? Transactions : null,
      CardType: CardType,
      CardStatus: CardStatus,
      Network: Network,
    };

    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // update a PaymentCard
  // returns an Observable
  // delegates via URI
  //********************************************************************
  updatePaymentCard(
    cardNumber,
    embossedName,
    expiryMonth,
    expiryYear,
    Bank,
    Account,
    Customer,
    Transactions,
    CardType,
    CardStatus,
    Network,
    id,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/PaymentCard/update/" + id;
    const obj = {
      cardNumber: cardNumber,
      embossedName: embossedName,
      expiryMonth: expiryMonth,
      expiryYear: expiryYear,
      Bank: Bank != null && Bank.length > 0 ? Bank : null,
      Account: Account != null && Account.length > 0 ? Account : null,
      Customer: Customer != null && Customer.length > 0 ? Customer : null,
      Transactions:
        Transactions != null && Transactions.length > 0 ? Transactions : null,
      CardType: CardType,
      CardStatus: CardStatus,
      Network: Network,
    };
    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // delete a PaymentCard
  // returns an Observable
  // delegates via URI
  //********************************************************************
  deletePaymentCard(id): Observable<any> {
    const uri_ = this.apiUrl + "/PaymentCard/delete/" + id;

    return this.http.get(uri_);
  }

  //********************************************************************
  // loads a PaymentCard
  // returns the results untouched as an Observable PaymentCard
  // PaymentCard model
  // delegates via URI
  //********************************************************************
  getPaymentCard(id): Observable<PaymentCard> {
    const uri_ = this.apiUrl + "/PaymentCard/load/" + id;

    return this.http.get<PaymentCard>(uri_);
  }

  //********************************************************************
  // gets all PaymentCard
  // returns the results untouched as JSON representation of an
  // Observable array of PaymentCard models
  // delegates via URI
  //********************************************************************
  getPaymentCards(): Observable<PaymentCard[]> {
    const uri_ = this.apiUrl + "/PaymentCard/";

    return this.http.get<PaymentCard[]>(uri_);
  }

  //********************************************************************
  // assigns a Bank on a PaymentCard
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignBank(paymentCardId, _bankId): Observable<any> {
    // get the PaymentCard from storage
    this.loadHelper(paymentCardId);

    return new BankService(this.http).getBank(_bankId).pipe(
      switchMap((tmp: Bank) => {
        this.paymentCard.bank = tmp.bankId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a Bank on a PaymentCard
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignBank(paymentCardId): Observable<any> {
    // get the PaymentCard from storage
    this.loadHelper(paymentCardId);

    // assign Bank to null
    this.paymentCard.bank = null;

    // save the PaymentCard
    return this.saveHelper();
  }

  //********************************************************************
  // assigns a Account on a PaymentCard
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignAccount(paymentCardId, _accountId): Observable<any> {
    // get the PaymentCard from storage
    this.loadHelper(paymentCardId);

    return new AccountService(this.http).getAccount(_accountId).pipe(
      switchMap((tmp: Account) => {
        this.paymentCard.account = tmp.accountId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a Account on a PaymentCard
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignAccount(paymentCardId): Observable<any> {
    // get the PaymentCard from storage
    this.loadHelper(paymentCardId);

    // assign Account to null
    this.paymentCard.account = null;

    // save the PaymentCard
    return this.saveHelper();
  }

  //********************************************************************
  // assigns a Customer on a PaymentCard
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignCustomer(paymentCardId, _customerId): Observable<any> {
    // get the PaymentCard from storage
    this.loadHelper(paymentCardId);

    return new CustomerService(this.http).getCustomer(_customerId).pipe(
      switchMap((tmp: Customer) => {
        this.paymentCard.customer = tmp.customerId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a Customer on a PaymentCard
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignCustomer(paymentCardId): Observable<any> {
    // get the PaymentCard from storage
    this.loadHelper(paymentCardId);

    // assign Customer to null
    this.paymentCard.customer = null;

    // save the PaymentCard
    return this.saveHelper();
  }

  //********************************************************************
  // adds one or more transactionsIds as a Transactions
  // to a PaymentCard
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addTransactions(paymentCardId, transactionsIds): Observable<any> {
    // get the PaymentCard
    this.loadHelper(paymentCardId);

    // split on a comma with no spaces
    var idList = transactionsIds.split(",");

    // iterate over array of transactions ids
    idList.forEach(function (id) {
      // add the Transaction Id if not already assigned
      if (this.paymentCard.transactions.indexOf(id) == -1)
        this.paymentCard.transactions.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more transactionsIds as a Transactions
  // from a PaymentCard
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeTransactions(paymentCardId, transactionsIds): Observable<any> {
    // get the PaymentCard
    this.loadHelper(paymentCardId);

    // split on a comma with no spaces
    var idList = transactionsIds.split(",");
    var transactions = this.paymentCard.transactions;

    if (transactions != null && transactionsIds != null) {
      // iterate over array of provided transactions ids and only remove if already assigned
      idList.forEach(function (id) {
        if (transactionsIds.indexOf(id) > -1) {
          this.paymentCard.transactions.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // saveHelper - internal helper to save a PaymentCard
  //********************************************************************
  saveHelper(): Observable<any> {
    const uri_ = this.apiUrl + "/PaymentCard/update/" + this.paymentCard;

    return this.http.post(uri_, this.paymentCard);
  }

  //********************************************************************
  // loadHelper - internal helper to load a PaymentCard
  //********************************************************************
  loadHelper(id) {
    this.getPaymentCard(id).subscribe((res: PaymentCard) => {
      this.paymentCard = res;
    });
  }
}

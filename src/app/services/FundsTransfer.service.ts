import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, switchMap } from "rxjs";
import { FundsTransfer } from "../models/FundsTransfer";
import { Account } from "../models/Account";
import { ExternalAccount } from "../models/ExternalAccount";
import { Customer } from "../models/Customer";
import { Transaction } from "../models/Transaction";
import { AccountService } from "../services/Account.service";
import { ExternalAccountService } from "../services/ExternalAccount.service";
import { CustomerService } from "../services/Customer.service";
import { TransactionService } from "../services/Transaction.service";
import { HelperBaseService } from "./helperbase.service";

@Injectable({
  providedIn: "root",
})
export class FundsTransferService extends HelperBaseService {
  //********************************************************************
  // general holder
  //********************************************************************
  fundsTransfer: FundsTransfer;

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
  // add a FundsTransfer
  // returns the results untouched as a JSON representation
  // delegates via URI
  //********************************************************************
  addFundsTransfer(
    transferReference,
    amount,
    requestedDate,
    executionDate,
    purpose,
    feeAmount,
    SourceAccount,
    DestinationAccount,
    ExternalBeneficiary,
    InitiatedBy,
    Transactions,
    Method,
    Status,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/FundsTransfer/create";
    const obj = {
      transferReference: transferReference,
      amount: amount,
      requestedDate: requestedDate,
      executionDate: executionDate,
      purpose: purpose,
      feeAmount: feeAmount,
      SourceAccount:
        SourceAccount != null && SourceAccount.length > 0
          ? SourceAccount
          : null,
      DestinationAccount:
        DestinationAccount != null && DestinationAccount.length > 0
          ? DestinationAccount
          : null,
      ExternalBeneficiary:
        ExternalBeneficiary != null && ExternalBeneficiary.length > 0
          ? ExternalBeneficiary
          : null,
      InitiatedBy:
        InitiatedBy != null && InitiatedBy.length > 0 ? InitiatedBy : null,
      Transactions:
        Transactions != null && Transactions.length > 0 ? Transactions : null,
      Method: Method,
      Status: Status,
    };

    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // update a FundsTransfer
  // returns an Observable
  // delegates via URI
  //********************************************************************
  updateFundsTransfer(
    transferReference,
    amount,
    requestedDate,
    executionDate,
    purpose,
    feeAmount,
    SourceAccount,
    DestinationAccount,
    ExternalBeneficiary,
    InitiatedBy,
    Transactions,
    Method,
    Status,
    id,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/FundsTransfer/update/" + id;
    const obj = {
      transferReference: transferReference,
      amount: amount,
      requestedDate: requestedDate,
      executionDate: executionDate,
      purpose: purpose,
      feeAmount: feeAmount,
      SourceAccount:
        SourceAccount != null && SourceAccount.length > 0
          ? SourceAccount
          : null,
      DestinationAccount:
        DestinationAccount != null && DestinationAccount.length > 0
          ? DestinationAccount
          : null,
      ExternalBeneficiary:
        ExternalBeneficiary != null && ExternalBeneficiary.length > 0
          ? ExternalBeneficiary
          : null,
      InitiatedBy:
        InitiatedBy != null && InitiatedBy.length > 0 ? InitiatedBy : null,
      Transactions:
        Transactions != null && Transactions.length > 0 ? Transactions : null,
      Method: Method,
      Status: Status,
    };
    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // delete a FundsTransfer
  // returns an Observable
  // delegates via URI
  //********************************************************************
  deleteFundsTransfer(id): Observable<any> {
    const uri_ = this.apiUrl + "/FundsTransfer/delete/" + id;

    return this.http.get(uri_);
  }

  //********************************************************************
  // loads a FundsTransfer
  // returns the results untouched as an Observable FundsTransfer
  // FundsTransfer model
  // delegates via URI
  //********************************************************************
  getFundsTransfer(id): Observable<FundsTransfer> {
    const uri_ = this.apiUrl + "/FundsTransfer/load/" + id;

    return this.http.get<FundsTransfer>(uri_);
  }

  //********************************************************************
  // gets all FundsTransfer
  // returns the results untouched as JSON representation of an
  // Observable array of FundsTransfer models
  // delegates via URI
  //********************************************************************
  getFundsTransfers(): Observable<FundsTransfer[]> {
    const uri_ = this.apiUrl + "/FundsTransfer/";

    return this.http.get<FundsTransfer[]>(uri_);
  }

  //********************************************************************
  // assigns a SourceAccount on a FundsTransfer
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignSourceAccount(fundsTransferId, _sourceAccountId): Observable<any> {
    // get the FundsTransfer from storage
    this.loadHelper(fundsTransferId);

    return new AccountService(this.http).getAccount(_sourceAccountId).pipe(
      switchMap((tmp: Account) => {
        this.fundsTransfer.sourceAccount = tmp.accountId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a SourceAccount on a FundsTransfer
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignSourceAccount(fundsTransferId): Observable<any> {
    // get the FundsTransfer from storage
    this.loadHelper(fundsTransferId);

    // assign SourceAccount to null
    this.fundsTransfer.sourceAccount = null;

    // save the FundsTransfer
    return this.saveHelper();
  }

  //********************************************************************
  // assigns a DestinationAccount on a FundsTransfer
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignDestinationAccount(
    fundsTransferId,
    _destinationAccountId,
  ): Observable<any> {
    // get the FundsTransfer from storage
    this.loadHelper(fundsTransferId);

    return new AccountService(this.http).getAccount(_destinationAccountId).pipe(
      switchMap((tmp: Account) => {
        this.fundsTransfer.destinationAccount = tmp.accountId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a DestinationAccount on a FundsTransfer
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignDestinationAccount(fundsTransferId): Observable<any> {
    // get the FundsTransfer from storage
    this.loadHelper(fundsTransferId);

    // assign DestinationAccount to null
    this.fundsTransfer.destinationAccount = null;

    // save the FundsTransfer
    return this.saveHelper();
  }

  //********************************************************************
  // assigns a ExternalBeneficiary on a FundsTransfer
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignExternalBeneficiary(
    fundsTransferId,
    _externalBeneficiaryId,
  ): Observable<any> {
    // get the FundsTransfer from storage
    this.loadHelper(fundsTransferId);

    return new ExternalAccountService(this.http)
      .getExternalAccount(_externalBeneficiaryId)
      .pipe(
        switchMap((tmp: ExternalAccount) => {
          this.fundsTransfer.externalBeneficiary = tmp.externalAccountId;
          return this.saveHelper();
        }),
      );
  }

  //********************************************************************
  // unassigns a ExternalBeneficiary on a FundsTransfer
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignExternalBeneficiary(fundsTransferId): Observable<any> {
    // get the FundsTransfer from storage
    this.loadHelper(fundsTransferId);

    // assign ExternalBeneficiary to null
    this.fundsTransfer.externalBeneficiary = null;

    // save the FundsTransfer
    return this.saveHelper();
  }

  //********************************************************************
  // assigns a InitiatedBy on a FundsTransfer
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignInitiatedBy(fundsTransferId, _initiatedById): Observable<any> {
    // get the FundsTransfer from storage
    this.loadHelper(fundsTransferId);

    return new CustomerService(this.http).getCustomer(_initiatedById).pipe(
      switchMap((tmp: Customer) => {
        this.fundsTransfer.initiatedBy = tmp.customerId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a InitiatedBy on a FundsTransfer
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignInitiatedBy(fundsTransferId): Observable<any> {
    // get the FundsTransfer from storage
    this.loadHelper(fundsTransferId);

    // assign InitiatedBy to null
    this.fundsTransfer.initiatedBy = null;

    // save the FundsTransfer
    return this.saveHelper();
  }

  //********************************************************************
  // adds one or more transactionsIds as a Transactions
  // to a FundsTransfer
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addTransactions(fundsTransferId, transactionsIds): Observable<any> {
    // get the FundsTransfer
    this.loadHelper(fundsTransferId);

    // split on a comma with no spaces
    var idList = transactionsIds.split(",");

    // iterate over array of transactions ids
    idList.forEach(function (id) {
      // add the Transaction Id if not already assigned
      if (this.fundsTransfer.transactions.indexOf(id) == -1)
        this.fundsTransfer.transactions.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more transactionsIds as a Transactions
  // from a FundsTransfer
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeTransactions(fundsTransferId, transactionsIds): Observable<any> {
    // get the FundsTransfer
    this.loadHelper(fundsTransferId);

    // split on a comma with no spaces
    var idList = transactionsIds.split(",");
    var transactions = this.fundsTransfer.transactions;

    if (transactions != null && transactionsIds != null) {
      // iterate over array of provided transactions ids and only remove if already assigned
      idList.forEach(function (id) {
        if (transactionsIds.indexOf(id) > -1) {
          this.fundsTransfer.transactions.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // saveHelper - internal helper to save a FundsTransfer
  //********************************************************************
  saveHelper(): Observable<any> {
    const uri_ = this.apiUrl + "/FundsTransfer/update/" + this.fundsTransfer;

    return this.http.post(uri_, this.fundsTransfer);
  }

  //********************************************************************
  // loadHelper - internal helper to load a FundsTransfer
  //********************************************************************
  loadHelper(id) {
    this.getFundsTransfer(id).subscribe((res: FundsTransfer) => {
      this.fundsTransfer = res;
    });
  }
}

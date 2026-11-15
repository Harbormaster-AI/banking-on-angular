import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, switchMap } from "rxjs";
import { Account } from "../models/Account";
import { Bank } from "../models/Bank";
import { Branch } from "../models/Branch";
import { BankingProduct } from "../models/BankingProduct";
import { Customer } from "../models/Customer";
import { Transaction } from "../models/Transaction";
import { AccountStatement } from "../models/AccountStatement";
import { StandingInstruction } from "../models/StandingInstruction";
import { FeeCharge } from "../models/FeeCharge";
import { BankService } from "../services/Bank.service";
import { BranchService } from "../services/Branch.service";
import { BankingProductService } from "../services/BankingProduct.service";
import { CustomerService } from "../services/Customer.service";
import { TransactionService } from "../services/Transaction.service";
import { AccountStatementService } from "../services/AccountStatement.service";
import { StandingInstructionService } from "../services/StandingInstruction.service";
import { FeeChargeService } from "../services/FeeCharge.service";
import { HelperBaseService } from "./helperbase.service";

@Injectable({
  providedIn: "root",
})
export class AccountService extends HelperBaseService {
  //********************************************************************
  // general holder
  //********************************************************************
  account: Account;

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
  // add a Account
  // returns the results untouched as a JSON representation
  // delegates via URI
  //********************************************************************
  addAccount(
    accountNumber,
    iban,
    accountName,
    currency,
    openedOn,
    closedOn,
    Bank,
    Branch,
    Product,
    Owners,
    Transactions,
    Statements,
    StandingInstructions,
    FeeCharges,
    AccountType,
    OwnershipType,
    Status,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/Account/create";
    const obj = {
      accountNumber: accountNumber,
      iban: iban,
      accountName: accountName,
      currency: currency,
      openedOn: openedOn,
      closedOn: closedOn,
      Bank: Bank != null && Bank.length > 0 ? Bank : null,
      Branch: Branch != null && Branch.length > 0 ? Branch : null,
      Product: Product != null && Product.length > 0 ? Product : null,
      Owners: Owners != null && Owners.length > 0 ? Owners : null,
      Transactions:
        Transactions != null && Transactions.length > 0 ? Transactions : null,
      Statements:
        Statements != null && Statements.length > 0 ? Statements : null,
      StandingInstructions:
        StandingInstructions != null && StandingInstructions.length > 0
          ? StandingInstructions
          : null,
      FeeCharges:
        FeeCharges != null && FeeCharges.length > 0 ? FeeCharges : null,
      AccountType: AccountType,
      OwnershipType: OwnershipType,
      Status: Status,
    };

    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // update a Account
  // returns an Observable
  // delegates via URI
  //********************************************************************
  updateAccount(
    accountNumber,
    iban,
    accountName,
    currency,
    openedOn,
    closedOn,
    Bank,
    Branch,
    Product,
    Owners,
    Transactions,
    Statements,
    StandingInstructions,
    FeeCharges,
    AccountType,
    OwnershipType,
    Status,
    id,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/Account/update/" + id;
    const obj = {
      accountNumber: accountNumber,
      iban: iban,
      accountName: accountName,
      currency: currency,
      openedOn: openedOn,
      closedOn: closedOn,
      Bank: Bank != null && Bank.length > 0 ? Bank : null,
      Branch: Branch != null && Branch.length > 0 ? Branch : null,
      Product: Product != null && Product.length > 0 ? Product : null,
      Owners: Owners != null && Owners.length > 0 ? Owners : null,
      Transactions:
        Transactions != null && Transactions.length > 0 ? Transactions : null,
      Statements:
        Statements != null && Statements.length > 0 ? Statements : null,
      StandingInstructions:
        StandingInstructions != null && StandingInstructions.length > 0
          ? StandingInstructions
          : null,
      FeeCharges:
        FeeCharges != null && FeeCharges.length > 0 ? FeeCharges : null,
      AccountType: AccountType,
      OwnershipType: OwnershipType,
      Status: Status,
    };
    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // delete a Account
  // returns an Observable
  // delegates via URI
  //********************************************************************
  deleteAccount(id): Observable<any> {
    const uri_ = this.apiUrl + "/Account/delete/" + id;

    return this.http.get(uri_);
  }

  //********************************************************************
  // loads a Account
  // returns the results untouched as an Observable Account
  // Account model
  // delegates via URI
  //********************************************************************
  getAccount(id): Observable<Account> {
    const uri_ = this.apiUrl + "/Account/load/" + id;

    return this.http.get<Account>(uri_);
  }

  //********************************************************************
  // gets all Account
  // returns the results untouched as JSON representation of an
  // Observable array of Account models
  // delegates via URI
  //********************************************************************
  getAccounts(): Observable<Account[]> {
    const uri_ = this.apiUrl + "/Account/";

    return this.http.get<Account[]>(uri_);
  }

  //********************************************************************
  // assigns a Bank on a Account
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignBank(accountId, _bankId): Observable<any> {
    // get the Account from storage
    this.loadHelper(accountId);

    return new BankService(this.http).getBank(_bankId).pipe(
      switchMap((tmp: Bank) => {
        this.account.bank = tmp.bankId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a Bank on a Account
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignBank(accountId): Observable<any> {
    // get the Account from storage
    this.loadHelper(accountId);

    // assign Bank to null
    this.account.bank = null;

    // save the Account
    return this.saveHelper();
  }

  //********************************************************************
  // assigns a Branch on a Account
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignBranch(accountId, _branchId): Observable<any> {
    // get the Account from storage
    this.loadHelper(accountId);

    return new BranchService(this.http).getBranch(_branchId).pipe(
      switchMap((tmp: Branch) => {
        this.account.branch = tmp.branchId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a Branch on a Account
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignBranch(accountId): Observable<any> {
    // get the Account from storage
    this.loadHelper(accountId);

    // assign Branch to null
    this.account.branch = null;

    // save the Account
    return this.saveHelper();
  }

  //********************************************************************
  // assigns a Product on a Account
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignProduct(accountId, _productId): Observable<any> {
    // get the Account from storage
    this.loadHelper(accountId);

    return new BankingProductService(this.http)
      .getBankingProduct(_productId)
      .pipe(
        switchMap((tmp: BankingProduct) => {
          this.account.product = tmp.bankingProductId;
          return this.saveHelper();
        }),
      );
  }

  //********************************************************************
  // unassigns a Product on a Account
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignProduct(accountId): Observable<any> {
    // get the Account from storage
    this.loadHelper(accountId);

    // assign Product to null
    this.account.product = null;

    // save the Account
    return this.saveHelper();
  }

  //********************************************************************
  // adds one or more ownersIds as a Owners
  // to a Account
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addOwners(accountId, ownersIds): Observable<any> {
    // get the Account
    this.loadHelper(accountId);

    // split on a comma with no spaces
    var idList = ownersIds.split(",");

    // iterate over array of owners ids
    idList.forEach(function (id) {
      // add the Customer Id if not already assigned
      if (this.account.owners.indexOf(id) == -1) this.account.owners.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more ownersIds as a Owners
  // from a Account
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeOwners(accountId, ownersIds): Observable<any> {
    // get the Account
    this.loadHelper(accountId);

    // split on a comma with no spaces
    var idList = ownersIds.split(",");
    var owners = this.account.owners;

    if (owners != null && ownersIds != null) {
      // iterate over array of provided owners ids and only remove if already assigned
      idList.forEach(function (id) {
        if (ownersIds.indexOf(id) > -1) {
          this.account.owners.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more transactionsIds as a Transactions
  // to a Account
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addTransactions(accountId, transactionsIds): Observable<any> {
    // get the Account
    this.loadHelper(accountId);

    // split on a comma with no spaces
    var idList = transactionsIds.split(",");

    // iterate over array of transactions ids
    idList.forEach(function (id) {
      // add the Transaction Id if not already assigned
      if (this.account.transactions.indexOf(id) == -1)
        this.account.transactions.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more transactionsIds as a Transactions
  // from a Account
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeTransactions(accountId, transactionsIds): Observable<any> {
    // get the Account
    this.loadHelper(accountId);

    // split on a comma with no spaces
    var idList = transactionsIds.split(",");
    var transactions = this.account.transactions;

    if (transactions != null && transactionsIds != null) {
      // iterate over array of provided transactions ids and only remove if already assigned
      idList.forEach(function (id) {
        if (transactionsIds.indexOf(id) > -1) {
          this.account.transactions.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more statementsIds as a Statements
  // to a Account
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addStatements(accountId, statementsIds): Observable<any> {
    // get the Account
    this.loadHelper(accountId);

    // split on a comma with no spaces
    var idList = statementsIds.split(",");

    // iterate over array of statements ids
    idList.forEach(function (id) {
      // add the AccountStatement Id if not already assigned
      if (this.account.statements.indexOf(id) == -1)
        this.account.statements.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more statementsIds as a Statements
  // from a Account
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeStatements(accountId, statementsIds): Observable<any> {
    // get the Account
    this.loadHelper(accountId);

    // split on a comma with no spaces
    var idList = statementsIds.split(",");
    var statements = this.account.statements;

    if (statements != null && statementsIds != null) {
      // iterate over array of provided statements ids and only remove if already assigned
      idList.forEach(function (id) {
        if (statementsIds.indexOf(id) > -1) {
          this.account.statements.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more standingInstructionsIds as a StandingInstructions
  // to a Account
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addStandingInstructions(accountId, standingInstructionsIds): Observable<any> {
    // get the Account
    this.loadHelper(accountId);

    // split on a comma with no spaces
    var idList = standingInstructionsIds.split(",");

    // iterate over array of standingInstructions ids
    idList.forEach(function (id) {
      // add the StandingInstruction Id if not already assigned
      if (this.account.standingInstructions.indexOf(id) == -1)
        this.account.standingInstructions.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more standingInstructionsIds as a StandingInstructions
  // from a Account
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeStandingInstructions(
    accountId,
    standingInstructionsIds,
  ): Observable<any> {
    // get the Account
    this.loadHelper(accountId);

    // split on a comma with no spaces
    var idList = standingInstructionsIds.split(",");
    var standingInstructions = this.account.standingInstructions;

    if (standingInstructions != null && standingInstructionsIds != null) {
      // iterate over array of provided standingInstructions ids and only remove if already assigned
      idList.forEach(function (id) {
        if (standingInstructionsIds.indexOf(id) > -1) {
          this.account.standingInstructions.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more feeChargesIds as a FeeCharges
  // to a Account
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addFeeCharges(accountId, feeChargesIds): Observable<any> {
    // get the Account
    this.loadHelper(accountId);

    // split on a comma with no spaces
    var idList = feeChargesIds.split(",");

    // iterate over array of feeCharges ids
    idList.forEach(function (id) {
      // add the FeeCharge Id if not already assigned
      if (this.account.feeCharges.indexOf(id) == -1)
        this.account.feeCharges.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more feeChargesIds as a FeeCharges
  // from a Account
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeFeeCharges(accountId, feeChargesIds): Observable<any> {
    // get the Account
    this.loadHelper(accountId);

    // split on a comma with no spaces
    var idList = feeChargesIds.split(",");
    var feeCharges = this.account.feeCharges;

    if (feeCharges != null && feeChargesIds != null) {
      // iterate over array of provided feeCharges ids and only remove if already assigned
      idList.forEach(function (id) {
        if (feeChargesIds.indexOf(id) > -1) {
          this.account.feeCharges.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // saveHelper - internal helper to save a Account
  //********************************************************************
  saveHelper(): Observable<any> {
    const uri_ = this.apiUrl + "/Account/update/" + this.account;

    return this.http.post(uri_, this.account);
  }

  //********************************************************************
  // loadHelper - internal helper to load a Account
  //********************************************************************
  loadHelper(id) {
    this.getAccount(id).subscribe((res: Account) => {
      this.account = res;
    });
  }
}

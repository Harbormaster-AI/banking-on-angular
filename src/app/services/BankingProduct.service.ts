import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, switchMap } from "rxjs";
import { BankingProduct } from "../models/BankingProduct";
import { Bank } from "../models/Bank";
import { Account } from "../models/Account";
import { LoanAccount } from "../models/LoanAccount";
import { PaymentCard } from "../models/PaymentCard";
import { BankService } from "../services/Bank.service";
import { AccountService } from "../services/Account.service";
import { LoanAccountService } from "../services/LoanAccount.service";
import { PaymentCardService } from "../services/PaymentCard.service";
import { HelperBaseService } from "./helperbase.service";

@Injectable({
  providedIn: "root",
})
export class BankingProductService extends HelperBaseService {
  //********************************************************************
  // general holder
  //********************************************************************
  bankingProduct: BankingProduct;

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
  // add a BankingProduct
  // returns the results untouched as a JSON representation
  // delegates via URI
  //********************************************************************
  addBankingProduct(
    productCode,
    name,
    description,
    Bank,
    Accounts,
    LoanAccounts,
    PaymentCards,
    ProductCategory,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/BankingProduct/create";
    const obj = {
      productCode: productCode,
      name: name,
      description: description,
      Bank: Bank != null && Bank.length > 0 ? Bank : null,
      Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      LoanAccounts:
        LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
      PaymentCards:
        PaymentCards != null && PaymentCards.length > 0 ? PaymentCards : null,
      ProductCategory: ProductCategory,
    };

    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // update a BankingProduct
  // returns an Observable
  // delegates via URI
  //********************************************************************
  updateBankingProduct(
    productCode,
    name,
    description,
    Bank,
    Accounts,
    LoanAccounts,
    PaymentCards,
    ProductCategory,
    id,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/BankingProduct/update/" + id;
    const obj = {
      productCode: productCode,
      name: name,
      description: description,
      Bank: Bank != null && Bank.length > 0 ? Bank : null,
      Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      LoanAccounts:
        LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
      PaymentCards:
        PaymentCards != null && PaymentCards.length > 0 ? PaymentCards : null,
      ProductCategory: ProductCategory,
    };
    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // delete a BankingProduct
  // returns an Observable
  // delegates via URI
  //********************************************************************
  deleteBankingProduct(id): Observable<any> {
    const uri_ = this.apiUrl + "/BankingProduct/delete/" + id;

    return this.http.get(uri_);
  }

  //********************************************************************
  // loads a BankingProduct
  // returns the results untouched as an Observable BankingProduct
  // BankingProduct model
  // delegates via URI
  //********************************************************************
  getBankingProduct(id): Observable<BankingProduct> {
    const uri_ = this.apiUrl + "/BankingProduct/load/" + id;

    return this.http.get<BankingProduct>(uri_);
  }

  //********************************************************************
  // gets all BankingProduct
  // returns the results untouched as JSON representation of an
  // Observable array of BankingProduct models
  // delegates via URI
  //********************************************************************
  getBankingProducts(): Observable<BankingProduct[]> {
    const uri_ = this.apiUrl + "/BankingProduct/";

    return this.http.get<BankingProduct[]>(uri_);
  }

  //********************************************************************
  // assigns a Bank on a BankingProduct
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignBank(bankingProductId, _bankId): Observable<any> {
    // get the BankingProduct from storage
    this.loadHelper(bankingProductId);

    return new BankService(this.http).getBank(_bankId).pipe(
      switchMap((tmp: Bank) => {
        this.bankingProduct.bank = tmp.bankId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a Bank on a BankingProduct
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignBank(bankingProductId): Observable<any> {
    // get the BankingProduct from storage
    this.loadHelper(bankingProductId);

    // assign Bank to null
    this.bankingProduct.bank = null;

    // save the BankingProduct
    return this.saveHelper();
  }

  //********************************************************************
  // adds one or more accountsIds as a Accounts
  // to a BankingProduct
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addAccounts(bankingProductId, accountsIds): Observable<any> {
    // get the BankingProduct
    this.loadHelper(bankingProductId);

    // split on a comma with no spaces
    var idList = accountsIds.split(",");

    // iterate over array of accounts ids
    idList.forEach(function (id) {
      // add the Account Id if not already assigned
      if (this.bankingProduct.accounts.indexOf(id) == -1)
        this.bankingProduct.accounts.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more accountsIds as a Accounts
  // from a BankingProduct
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeAccounts(bankingProductId, accountsIds): Observable<any> {
    // get the BankingProduct
    this.loadHelper(bankingProductId);

    // split on a comma with no spaces
    var idList = accountsIds.split(",");
    var accounts = this.bankingProduct.accounts;

    if (accounts != null && accountsIds != null) {
      // iterate over array of provided accounts ids and only remove if already assigned
      idList.forEach(function (id) {
        if (accountsIds.indexOf(id) > -1) {
          this.bankingProduct.accounts.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more loanAccountsIds as a LoanAccounts
  // to a BankingProduct
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addLoanAccounts(bankingProductId, loanAccountsIds): Observable<any> {
    // get the BankingProduct
    this.loadHelper(bankingProductId);

    // split on a comma with no spaces
    var idList = loanAccountsIds.split(",");

    // iterate over array of loanAccounts ids
    idList.forEach(function (id) {
      // add the LoanAccount Id if not already assigned
      if (this.bankingProduct.loanAccounts.indexOf(id) == -1)
        this.bankingProduct.loanAccounts.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more loanAccountsIds as a LoanAccounts
  // from a BankingProduct
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeLoanAccounts(bankingProductId, loanAccountsIds): Observable<any> {
    // get the BankingProduct
    this.loadHelper(bankingProductId);

    // split on a comma with no spaces
    var idList = loanAccountsIds.split(",");
    var loanAccounts = this.bankingProduct.loanAccounts;

    if (loanAccounts != null && loanAccountsIds != null) {
      // iterate over array of provided loanAccounts ids and only remove if already assigned
      idList.forEach(function (id) {
        if (loanAccountsIds.indexOf(id) > -1) {
          this.bankingProduct.loanAccounts.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more paymentCardsIds as a PaymentCards
  // to a BankingProduct
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addPaymentCards(bankingProductId, paymentCardsIds): Observable<any> {
    // get the BankingProduct
    this.loadHelper(bankingProductId);

    // split on a comma with no spaces
    var idList = paymentCardsIds.split(",");

    // iterate over array of paymentCards ids
    idList.forEach(function (id) {
      // add the PaymentCard Id if not already assigned
      if (this.bankingProduct.paymentCards.indexOf(id) == -1)
        this.bankingProduct.paymentCards.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more paymentCardsIds as a PaymentCards
  // from a BankingProduct
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removePaymentCards(bankingProductId, paymentCardsIds): Observable<any> {
    // get the BankingProduct
    this.loadHelper(bankingProductId);

    // split on a comma with no spaces
    var idList = paymentCardsIds.split(",");
    var paymentCards = this.bankingProduct.paymentCards;

    if (paymentCards != null && paymentCardsIds != null) {
      // iterate over array of provided paymentCards ids and only remove if already assigned
      idList.forEach(function (id) {
        if (paymentCardsIds.indexOf(id) > -1) {
          this.bankingProduct.paymentCards.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // saveHelper - internal helper to save a BankingProduct
  //********************************************************************
  saveHelper(): Observable<any> {
    const uri_ = this.apiUrl + "/BankingProduct/update/" + this.bankingProduct;

    return this.http.post(uri_, this.bankingProduct);
  }

  //********************************************************************
  // loadHelper - internal helper to load a BankingProduct
  //********************************************************************
  loadHelper(id) {
    this.getBankingProduct(id).subscribe((res: BankingProduct) => {
      this.bankingProduct = res;
    });
  }
}

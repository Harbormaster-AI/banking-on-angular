import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, switchMap } from "rxjs";
import { Bank } from "../models/Bank";
import { Branch } from "../models/Branch";
import { BankingProduct } from "../models/BankingProduct";
import { Customer } from "../models/Customer";
import { Account } from "../models/Account";
import { PaymentCard } from "../models/PaymentCard";
import { LoanAccount } from "../models/LoanAccount";
import { ExchangeRate } from "../models/ExchangeRate";
import { Consent } from "../models/Consent";
import { ThirdPartyProvider } from "../models/ThirdPartyProvider";
import { BranchService } from "../services/Branch.service";
import { BankingProductService } from "../services/BankingProduct.service";
import { CustomerService } from "../services/Customer.service";
import { AccountService } from "../services/Account.service";
import { PaymentCardService } from "../services/PaymentCard.service";
import { LoanAccountService } from "../services/LoanAccount.service";
import { ExchangeRateService } from "../services/ExchangeRate.service";
import { ConsentService } from "../services/Consent.service";
import { ThirdPartyProviderService } from "../services/ThirdPartyProvider.service";
import { HelperBaseService } from "./helperbase.service";

@Injectable({
  providedIn: "root",
})
export class BankService extends HelperBaseService {
  //********************************************************************
  // general holder
  //********************************************************************
  bank: Bank;

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
  // add a Bank
  // returns the results untouched as a JSON representation
  // delegates via URI
  //********************************************************************
  addBank(
    name,
    legalName,
    swiftBic,
    headquartersCountry,
    website,
    Branches,
    Products,
    Customers,
    Accounts,
    PaymentCards,
    LoanAccounts,
    ExchangeRates,
    Consents,
    ThirdPartyProviders,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/Bank/create";
    const obj = {
      name: name,
      legalName: legalName,
      swiftBic: swiftBic,
      headquartersCountry: headquartersCountry,
      website: website,
      Branches: Branches != null && Branches.length > 0 ? Branches : null,
      Products: Products != null && Products.length > 0 ? Products : null,
      Customers: Customers != null && Customers.length > 0 ? Customers : null,
      Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      PaymentCards:
        PaymentCards != null && PaymentCards.length > 0 ? PaymentCards : null,
      LoanAccounts:
        LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
      ExchangeRates:
        ExchangeRates != null && ExchangeRates.length > 0
          ? ExchangeRates
          : null,
      Consents: Consents != null && Consents.length > 0 ? Consents : null,
      ThirdPartyProviders:
        ThirdPartyProviders != null && ThirdPartyProviders.length > 0
          ? ThirdPartyProviders
          : null,
    };

    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // update a Bank
  // returns an Observable
  // delegates via URI
  //********************************************************************
  updateBank(
    name,
    legalName,
    swiftBic,
    headquartersCountry,
    website,
    Branches,
    Products,
    Customers,
    Accounts,
    PaymentCards,
    LoanAccounts,
    ExchangeRates,
    Consents,
    ThirdPartyProviders,
    id,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/Bank/update/" + id;
    const obj = {
      name: name,
      legalName: legalName,
      swiftBic: swiftBic,
      headquartersCountry: headquartersCountry,
      website: website,
      Branches: Branches != null && Branches.length > 0 ? Branches : null,
      Products: Products != null && Products.length > 0 ? Products : null,
      Customers: Customers != null && Customers.length > 0 ? Customers : null,
      Accounts: Accounts != null && Accounts.length > 0 ? Accounts : null,
      PaymentCards:
        PaymentCards != null && PaymentCards.length > 0 ? PaymentCards : null,
      LoanAccounts:
        LoanAccounts != null && LoanAccounts.length > 0 ? LoanAccounts : null,
      ExchangeRates:
        ExchangeRates != null && ExchangeRates.length > 0
          ? ExchangeRates
          : null,
      Consents: Consents != null && Consents.length > 0 ? Consents : null,
      ThirdPartyProviders:
        ThirdPartyProviders != null && ThirdPartyProviders.length > 0
          ? ThirdPartyProviders
          : null,
    };
    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // delete a Bank
  // returns an Observable
  // delegates via URI
  //********************************************************************
  deleteBank(id): Observable<any> {
    const uri_ = this.apiUrl + "/Bank/delete/" + id;

    return this.http.get(uri_);
  }

  //********************************************************************
  // loads a Bank
  // returns the results untouched as an Observable Bank
  // Bank model
  // delegates via URI
  //********************************************************************
  getBank(id): Observable<Bank> {
    const uri_ = this.apiUrl + "/Bank/load/" + id;

    return this.http.get<Bank>(uri_);
  }

  //********************************************************************
  // gets all Bank
  // returns the results untouched as JSON representation of an
  // Observable array of Bank models
  // delegates via URI
  //********************************************************************
  getBanks(): Observable<Bank[]> {
    const uri_ = this.apiUrl + "/Bank/";

    return this.http.get<Bank[]>(uri_);
  }

  //********************************************************************
  // adds one or more branchesIds as a Branches
  // to a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addBranches(bankId, branchesIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = branchesIds.split(",");

    // iterate over array of branches ids
    idList.forEach(function (id) {
      // add the Branch Id if not already assigned
      if (this.bank.branches.indexOf(id) == -1) this.bank.branches.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more branchesIds as a Branches
  // from a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeBranches(bankId, branchesIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = branchesIds.split(",");
    var branches = this.bank.branches;

    if (branches != null && branchesIds != null) {
      // iterate over array of provided branches ids and only remove if already assigned
      idList.forEach(function (id) {
        if (branchesIds.indexOf(id) > -1) {
          this.bank.branches.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more productsIds as a Products
  // to a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addProducts(bankId, productsIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = productsIds.split(",");

    // iterate over array of products ids
    idList.forEach(function (id) {
      // add the BankingProduct Id if not already assigned
      if (this.bank.products.indexOf(id) == -1) this.bank.products.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more productsIds as a Products
  // from a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeProducts(bankId, productsIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = productsIds.split(",");
    var products = this.bank.products;

    if (products != null && productsIds != null) {
      // iterate over array of provided products ids and only remove if already assigned
      idList.forEach(function (id) {
        if (productsIds.indexOf(id) > -1) {
          this.bank.products.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more customersIds as a Customers
  // to a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addCustomers(bankId, customersIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = customersIds.split(",");

    // iterate over array of customers ids
    idList.forEach(function (id) {
      // add the Customer Id if not already assigned
      if (this.bank.customers.indexOf(id) == -1) this.bank.customers.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more customersIds as a Customers
  // from a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeCustomers(bankId, customersIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = customersIds.split(",");
    var customers = this.bank.customers;

    if (customers != null && customersIds != null) {
      // iterate over array of provided customers ids and only remove if already assigned
      idList.forEach(function (id) {
        if (customersIds.indexOf(id) > -1) {
          this.bank.customers.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more accountsIds as a Accounts
  // to a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addAccounts(bankId, accountsIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = accountsIds.split(",");

    // iterate over array of accounts ids
    idList.forEach(function (id) {
      // add the Account Id if not already assigned
      if (this.bank.accounts.indexOf(id) == -1) this.bank.accounts.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more accountsIds as a Accounts
  // from a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeAccounts(bankId, accountsIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = accountsIds.split(",");
    var accounts = this.bank.accounts;

    if (accounts != null && accountsIds != null) {
      // iterate over array of provided accounts ids and only remove if already assigned
      idList.forEach(function (id) {
        if (accountsIds.indexOf(id) > -1) {
          this.bank.accounts.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more paymentCardsIds as a PaymentCards
  // to a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addPaymentCards(bankId, paymentCardsIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = paymentCardsIds.split(",");

    // iterate over array of paymentCards ids
    idList.forEach(function (id) {
      // add the PaymentCard Id if not already assigned
      if (this.bank.paymentCards.indexOf(id) == -1)
        this.bank.paymentCards.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more paymentCardsIds as a PaymentCards
  // from a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removePaymentCards(bankId, paymentCardsIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = paymentCardsIds.split(",");
    var paymentCards = this.bank.paymentCards;

    if (paymentCards != null && paymentCardsIds != null) {
      // iterate over array of provided paymentCards ids and only remove if already assigned
      idList.forEach(function (id) {
        if (paymentCardsIds.indexOf(id) > -1) {
          this.bank.paymentCards.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more loanAccountsIds as a LoanAccounts
  // to a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addLoanAccounts(bankId, loanAccountsIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = loanAccountsIds.split(",");

    // iterate over array of loanAccounts ids
    idList.forEach(function (id) {
      // add the LoanAccount Id if not already assigned
      if (this.bank.loanAccounts.indexOf(id) == -1)
        this.bank.loanAccounts.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more loanAccountsIds as a LoanAccounts
  // from a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeLoanAccounts(bankId, loanAccountsIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = loanAccountsIds.split(",");
    var loanAccounts = this.bank.loanAccounts;

    if (loanAccounts != null && loanAccountsIds != null) {
      // iterate over array of provided loanAccounts ids and only remove if already assigned
      idList.forEach(function (id) {
        if (loanAccountsIds.indexOf(id) > -1) {
          this.bank.loanAccounts.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more exchangeRatesIds as a ExchangeRates
  // to a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addExchangeRates(bankId, exchangeRatesIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = exchangeRatesIds.split(",");

    // iterate over array of exchangeRates ids
    idList.forEach(function (id) {
      // add the ExchangeRate Id if not already assigned
      if (this.bank.exchangeRates.indexOf(id) == -1)
        this.bank.exchangeRates.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more exchangeRatesIds as a ExchangeRates
  // from a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeExchangeRates(bankId, exchangeRatesIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = exchangeRatesIds.split(",");
    var exchangeRates = this.bank.exchangeRates;

    if (exchangeRates != null && exchangeRatesIds != null) {
      // iterate over array of provided exchangeRates ids and only remove if already assigned
      idList.forEach(function (id) {
        if (exchangeRatesIds.indexOf(id) > -1) {
          this.bank.exchangeRates.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more consentsIds as a Consents
  // to a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addConsents(bankId, consentsIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = consentsIds.split(",");

    // iterate over array of consents ids
    idList.forEach(function (id) {
      // add the Consent Id if not already assigned
      if (this.bank.consents.indexOf(id) == -1) this.bank.consents.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more consentsIds as a Consents
  // from a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeConsents(bankId, consentsIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = consentsIds.split(",");
    var consents = this.bank.consents;

    if (consents != null && consentsIds != null) {
      // iterate over array of provided consents ids and only remove if already assigned
      idList.forEach(function (id) {
        if (consentsIds.indexOf(id) > -1) {
          this.bank.consents.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more thirdPartyProvidersIds as a ThirdPartyProviders
  // to a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addThirdPartyProviders(bankId, thirdPartyProvidersIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = thirdPartyProvidersIds.split(",");

    // iterate over array of thirdPartyProviders ids
    idList.forEach(function (id) {
      // add the ThirdPartyProvider Id if not already assigned
      if (this.bank.thirdPartyProviders.indexOf(id) == -1)
        this.bank.thirdPartyProviders.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more thirdPartyProvidersIds as a ThirdPartyProviders
  // from a Bank
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeThirdPartyProviders(bankId, thirdPartyProvidersIds): Observable<any> {
    // get the Bank
    this.loadHelper(bankId);

    // split on a comma with no spaces
    var idList = thirdPartyProvidersIds.split(",");
    var thirdPartyProviders = this.bank.thirdPartyProviders;

    if (thirdPartyProviders != null && thirdPartyProvidersIds != null) {
      // iterate over array of provided thirdPartyProviders ids and only remove if already assigned
      idList.forEach(function (id) {
        if (thirdPartyProvidersIds.indexOf(id) > -1) {
          this.bank.thirdPartyProviders.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // saveHelper - internal helper to save a Bank
  //********************************************************************
  saveHelper(): Observable<any> {
    const uri_ = this.apiUrl + "/Bank/update/" + this.bank;

    return this.http.post(uri_, this.bank);
  }

  //********************************************************************
  // loadHelper - internal helper to load a Bank
  //********************************************************************
  loadHelper(id) {
    this.getBank(id).subscribe((res: Bank) => {
      this.bank = res;
    });
  }
}

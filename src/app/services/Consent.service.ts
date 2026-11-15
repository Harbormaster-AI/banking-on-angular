import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, switchMap } from "rxjs";
import { Consent } from "../models/Consent";
import { Customer } from "../models/Customer";
import { Bank } from "../models/Bank";
import { Account } from "../models/Account";
import { ThirdPartyProvider } from "../models/ThirdPartyProvider";
import { CustomerService } from "../services/Customer.service";
import { BankService } from "../services/Bank.service";
import { AccountService } from "../services/Account.service";
import { ThirdPartyProviderService } from "../services/ThirdPartyProvider.service";
import { HelperBaseService } from "./helperbase.service";

@Injectable({
  providedIn: "root",
})
export class ConsentService extends HelperBaseService {
  //********************************************************************
  // general holder
  //********************************************************************
  consent: Consent;

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
  // add a Consent
  // returns the results untouched as a JSON representation
  // delegates via URI
  //********************************************************************
  addConsent(
    grantedOn,
    expiresOn,
    Customer,
    Bank,
    AuthorizedAccounts,
    ThirdPartyProvider,
    ConsentType,
    Status,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/Consent/create";
    const obj = {
      grantedOn: grantedOn,
      expiresOn: expiresOn,
      Customer: Customer != null && Customer.length > 0 ? Customer : null,
      Bank: Bank != null && Bank.length > 0 ? Bank : null,
      AuthorizedAccounts:
        AuthorizedAccounts != null && AuthorizedAccounts.length > 0
          ? AuthorizedAccounts
          : null,
      ThirdPartyProvider:
        ThirdPartyProvider != null && ThirdPartyProvider.length > 0
          ? ThirdPartyProvider
          : null,
      ConsentType: ConsentType,
      Status: Status,
    };

    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // update a Consent
  // returns an Observable
  // delegates via URI
  //********************************************************************
  updateConsent(
    grantedOn,
    expiresOn,
    Customer,
    Bank,
    AuthorizedAccounts,
    ThirdPartyProvider,
    ConsentType,
    Status,
    id,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/Consent/update/" + id;
    const obj = {
      grantedOn: grantedOn,
      expiresOn: expiresOn,
      Customer: Customer != null && Customer.length > 0 ? Customer : null,
      Bank: Bank != null && Bank.length > 0 ? Bank : null,
      AuthorizedAccounts:
        AuthorizedAccounts != null && AuthorizedAccounts.length > 0
          ? AuthorizedAccounts
          : null,
      ThirdPartyProvider:
        ThirdPartyProvider != null && ThirdPartyProvider.length > 0
          ? ThirdPartyProvider
          : null,
      ConsentType: ConsentType,
      Status: Status,
    };
    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // delete a Consent
  // returns an Observable
  // delegates via URI
  //********************************************************************
  deleteConsent(id): Observable<any> {
    const uri_ = this.apiUrl + "/Consent/delete/" + id;

    return this.http.get(uri_);
  }

  //********************************************************************
  // loads a Consent
  // returns the results untouched as an Observable Consent
  // Consent model
  // delegates via URI
  //********************************************************************
  getConsent(id): Observable<Consent> {
    const uri_ = this.apiUrl + "/Consent/load/" + id;

    return this.http.get<Consent>(uri_);
  }

  //********************************************************************
  // gets all Consent
  // returns the results untouched as JSON representation of an
  // Observable array of Consent models
  // delegates via URI
  //********************************************************************
  getConsents(): Observable<Consent[]> {
    const uri_ = this.apiUrl + "/Consent/";

    return this.http.get<Consent[]>(uri_);
  }

  //********************************************************************
  // assigns a Customer on a Consent
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignCustomer(consentId, _customerId): Observable<any> {
    // get the Consent from storage
    this.loadHelper(consentId);

    return new CustomerService(this.http).getCustomer(_customerId).pipe(
      switchMap((tmp: Customer) => {
        this.consent.customer = tmp.customerId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a Customer on a Consent
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignCustomer(consentId): Observable<any> {
    // get the Consent from storage
    this.loadHelper(consentId);

    // assign Customer to null
    this.consent.customer = null;

    // save the Consent
    return this.saveHelper();
  }

  //********************************************************************
  // assigns a Bank on a Consent
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignBank(consentId, _bankId): Observable<any> {
    // get the Consent from storage
    this.loadHelper(consentId);

    return new BankService(this.http).getBank(_bankId).pipe(
      switchMap((tmp: Bank) => {
        this.consent.bank = tmp.bankId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a Bank on a Consent
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignBank(consentId): Observable<any> {
    // get the Consent from storage
    this.loadHelper(consentId);

    // assign Bank to null
    this.consent.bank = null;

    // save the Consent
    return this.saveHelper();
  }

  //********************************************************************
  // assigns a ThirdPartyProvider on a Consent
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignThirdPartyProvider(consentId, _thirdPartyProviderId): Observable<any> {
    // get the Consent from storage
    this.loadHelper(consentId);

    return new ThirdPartyProviderService(this.http)
      .getThirdPartyProvider(_thirdPartyProviderId)
      .pipe(
        switchMap((tmp: ThirdPartyProvider) => {
          this.consent.thirdPartyProvider = tmp.thirdPartyProviderId;
          return this.saveHelper();
        }),
      );
  }

  //********************************************************************
  // unassigns a ThirdPartyProvider on a Consent
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignThirdPartyProvider(consentId): Observable<any> {
    // get the Consent from storage
    this.loadHelper(consentId);

    // assign ThirdPartyProvider to null
    this.consent.thirdPartyProvider = null;

    // save the Consent
    return this.saveHelper();
  }

  //********************************************************************
  // adds one or more authorizedAccountsIds as a AuthorizedAccounts
  // to a Consent
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addAuthorizedAccounts(consentId, authorizedAccountsIds): Observable<any> {
    // get the Consent
    this.loadHelper(consentId);

    // split on a comma with no spaces
    var idList = authorizedAccountsIds.split(",");

    // iterate over array of authorizedAccounts ids
    idList.forEach(function (id) {
      // add the Account Id if not already assigned
      if (this.consent.authorizedAccounts.indexOf(id) == -1)
        this.consent.authorizedAccounts.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more authorizedAccountsIds as a AuthorizedAccounts
  // from a Consent
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeAuthorizedAccounts(consentId, authorizedAccountsIds): Observable<any> {
    // get the Consent
    this.loadHelper(consentId);

    // split on a comma with no spaces
    var idList = authorizedAccountsIds.split(",");
    var authorizedAccounts = this.consent.authorizedAccounts;

    if (authorizedAccounts != null && authorizedAccountsIds != null) {
      // iterate over array of provided authorizedAccounts ids and only remove if already assigned
      idList.forEach(function (id) {
        if (authorizedAccountsIds.indexOf(id) > -1) {
          this.consent.authorizedAccounts.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // saveHelper - internal helper to save a Consent
  //********************************************************************
  saveHelper(): Observable<any> {
    const uri_ = this.apiUrl + "/Consent/update/" + this.consent;

    return this.http.post(uri_, this.consent);
  }

  //********************************************************************
  // loadHelper - internal helper to load a Consent
  //********************************************************************
  loadHelper(id) {
    this.getConsent(id).subscribe((res: Consent) => {
      this.consent = res;
    });
  }
}

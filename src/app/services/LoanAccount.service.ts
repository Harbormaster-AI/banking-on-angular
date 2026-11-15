import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, switchMap } from "rxjs";
import { LoanAccount } from "../models/LoanAccount";
import { Bank } from "../models/Bank";
import { Branch } from "../models/Branch";
import { BankingProduct } from "../models/BankingProduct";
import { Customer } from "../models/Customer";
import { RepaymentSchedule } from "../models/RepaymentSchedule";
import { LoanPayment } from "../models/LoanPayment";
import { Collateral } from "../models/Collateral";
import { FeeCharge } from "../models/FeeCharge";
import { BankService } from "../services/Bank.service";
import { BranchService } from "../services/Branch.service";
import { BankingProductService } from "../services/BankingProduct.service";
import { CustomerService } from "../services/Customer.service";
import { RepaymentScheduleService } from "../services/RepaymentSchedule.service";
import { LoanPaymentService } from "../services/LoanPayment.service";
import { CollateralService } from "../services/Collateral.service";
import { FeeChargeService } from "../services/FeeCharge.service";
import { HelperBaseService } from "./helperbase.service";

@Injectable({
  providedIn: "root",
})
export class LoanAccountService extends HelperBaseService {
  //********************************************************************
  // general holder
  //********************************************************************
  loanAccount: LoanAccount;

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
  // add a LoanAccount
  // returns the results untouched as a JSON representation
  // delegates via URI
  //********************************************************************
  addLoanAccount(
    loanNumber,
    principalAmount,
    outstandingPrincipal,
    interestRate,
    originationDate,
    maturityDate,
    paymentDayOfMonth,
    currency,
    Bank,
    Branch,
    Product,
    Borrowers,
    RepaymentSchedule,
    Payments,
    Collateral,
    FeeCharges,
    LoanType,
    RateType,
    Compounding,
    Status,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/LoanAccount/create";
    const obj = {
      loanNumber: loanNumber,
      principalAmount: principalAmount,
      outstandingPrincipal: outstandingPrincipal,
      interestRate: interestRate,
      originationDate: originationDate,
      maturityDate: maturityDate,
      paymentDayOfMonth: paymentDayOfMonth,
      currency: currency,
      Bank: Bank != null && Bank.length > 0 ? Bank : null,
      Branch: Branch != null && Branch.length > 0 ? Branch : null,
      Product: Product != null && Product.length > 0 ? Product : null,
      Borrowers: Borrowers != null && Borrowers.length > 0 ? Borrowers : null,
      RepaymentSchedule:
        RepaymentSchedule != null && RepaymentSchedule.length > 0
          ? RepaymentSchedule
          : null,
      Payments: Payments != null && Payments.length > 0 ? Payments : null,
      Collateral:
        Collateral != null && Collateral.length > 0 ? Collateral : null,
      FeeCharges:
        FeeCharges != null && FeeCharges.length > 0 ? FeeCharges : null,
      LoanType: LoanType,
      RateType: RateType,
      Compounding: Compounding,
      Status: Status,
    };

    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // update a LoanAccount
  // returns an Observable
  // delegates via URI
  //********************************************************************
  updateLoanAccount(
    loanNumber,
    principalAmount,
    outstandingPrincipal,
    interestRate,
    originationDate,
    maturityDate,
    paymentDayOfMonth,
    currency,
    Bank,
    Branch,
    Product,
    Borrowers,
    RepaymentSchedule,
    Payments,
    Collateral,
    FeeCharges,
    LoanType,
    RateType,
    Compounding,
    Status,
    id,
  ): Observable<any> {
    const uri_ = this.apiUrl + "/LoanAccount/update/" + id;
    const obj = {
      loanNumber: loanNumber,
      principalAmount: principalAmount,
      outstandingPrincipal: outstandingPrincipal,
      interestRate: interestRate,
      originationDate: originationDate,
      maturityDate: maturityDate,
      paymentDayOfMonth: paymentDayOfMonth,
      currency: currency,
      Bank: Bank != null && Bank.length > 0 ? Bank : null,
      Branch: Branch != null && Branch.length > 0 ? Branch : null,
      Product: Product != null && Product.length > 0 ? Product : null,
      Borrowers: Borrowers != null && Borrowers.length > 0 ? Borrowers : null,
      RepaymentSchedule:
        RepaymentSchedule != null && RepaymentSchedule.length > 0
          ? RepaymentSchedule
          : null,
      Payments: Payments != null && Payments.length > 0 ? Payments : null,
      Collateral:
        Collateral != null && Collateral.length > 0 ? Collateral : null,
      FeeCharges:
        FeeCharges != null && FeeCharges.length > 0 ? FeeCharges : null,
      LoanType: LoanType,
      RateType: RateType,
      Compounding: Compounding,
      Status: Status,
    };
    return this.http.post(uri_, obj);
  }

  //********************************************************************
  // delete a LoanAccount
  // returns an Observable
  // delegates via URI
  //********************************************************************
  deleteLoanAccount(id): Observable<any> {
    const uri_ = this.apiUrl + "/LoanAccount/delete/" + id;

    return this.http.get(uri_);
  }

  //********************************************************************
  // loads a LoanAccount
  // returns the results untouched as an Observable LoanAccount
  // LoanAccount model
  // delegates via URI
  //********************************************************************
  getLoanAccount(id): Observable<LoanAccount> {
    const uri_ = this.apiUrl + "/LoanAccount/load/" + id;

    return this.http.get<LoanAccount>(uri_);
  }

  //********************************************************************
  // gets all LoanAccount
  // returns the results untouched as JSON representation of an
  // Observable array of LoanAccount models
  // delegates via URI
  //********************************************************************
  getLoanAccounts(): Observable<LoanAccount[]> {
    const uri_ = this.apiUrl + "/LoanAccount/";

    return this.http.get<LoanAccount[]>(uri_);
  }

  //********************************************************************
  // assigns a Bank on a LoanAccount
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignBank(loanAccountId, _bankId): Observable<any> {
    // get the LoanAccount from storage
    this.loadHelper(loanAccountId);

    return new BankService(this.http).getBank(_bankId).pipe(
      switchMap((tmp: Bank) => {
        this.loanAccount.bank = tmp.bankId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a Bank on a LoanAccount
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignBank(loanAccountId): Observable<any> {
    // get the LoanAccount from storage
    this.loadHelper(loanAccountId);

    // assign Bank to null
    this.loanAccount.bank = null;

    // save the LoanAccount
    return this.saveHelper();
  }

  //********************************************************************
  // assigns a Branch on a LoanAccount
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignBranch(loanAccountId, _branchId): Observable<any> {
    // get the LoanAccount from storage
    this.loadHelper(loanAccountId);

    return new BranchService(this.http).getBranch(_branchId).pipe(
      switchMap((tmp: Branch) => {
        this.loanAccount.branch = tmp.branchId;
        return this.saveHelper();
      }),
    );
  }

  //********************************************************************
  // unassigns a Branch on a LoanAccount
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignBranch(loanAccountId): Observable<any> {
    // get the LoanAccount from storage
    this.loadHelper(loanAccountId);

    // assign Branch to null
    this.loanAccount.branch = null;

    // save the LoanAccount
    return this.saveHelper();
  }

  //********************************************************************
  // assigns a Product on a LoanAccount
  // returns an Observable
  // delegates via URI
  //********************************************************************
  assignProduct(loanAccountId, _productId): Observable<any> {
    // get the LoanAccount from storage
    this.loadHelper(loanAccountId);

    return new BankingProductService(this.http)
      .getBankingProduct(_productId)
      .pipe(
        switchMap((tmp: BankingProduct) => {
          this.loanAccount.product = tmp.bankingProductId;
          return this.saveHelper();
        }),
      );
  }

  //********************************************************************
  // unassigns a Product on a LoanAccount
  // returns an Observable
  // delegates via URI
  //********************************************************************
  unassignProduct(loanAccountId): Observable<any> {
    // get the LoanAccount from storage
    this.loadHelper(loanAccountId);

    // assign Product to null
    this.loanAccount.product = null;

    // save the LoanAccount
    return this.saveHelper();
  }

  //********************************************************************
  // adds one or more borrowersIds as a Borrowers
  // to a LoanAccount
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addBorrowers(loanAccountId, borrowersIds): Observable<any> {
    // get the LoanAccount
    this.loadHelper(loanAccountId);

    // split on a comma with no spaces
    var idList = borrowersIds.split(",");

    // iterate over array of borrowers ids
    idList.forEach(function (id) {
      // add the Customer Id if not already assigned
      if (this.loanAccount.borrowers.indexOf(id) == -1)
        this.loanAccount.borrowers.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more borrowersIds as a Borrowers
  // from a LoanAccount
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeBorrowers(loanAccountId, borrowersIds): Observable<any> {
    // get the LoanAccount
    this.loadHelper(loanAccountId);

    // split on a comma with no spaces
    var idList = borrowersIds.split(",");
    var borrowers = this.loanAccount.borrowers;

    if (borrowers != null && borrowersIds != null) {
      // iterate over array of provided borrowers ids and only remove if already assigned
      idList.forEach(function (id) {
        if (borrowersIds.indexOf(id) > -1) {
          this.loanAccount.borrowers.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more repaymentScheduleIds as a RepaymentSchedule
  // to a LoanAccount
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addRepaymentSchedule(loanAccountId, repaymentScheduleIds): Observable<any> {
    // get the LoanAccount
    this.loadHelper(loanAccountId);

    // split on a comma with no spaces
    var idList = repaymentScheduleIds.split(",");

    // iterate over array of repaymentSchedule ids
    idList.forEach(function (id) {
      // add the RepaymentSchedule Id if not already assigned
      if (this.loanAccount.repaymentSchedule.indexOf(id) == -1)
        this.loanAccount.repaymentSchedule.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more repaymentScheduleIds as a RepaymentSchedule
  // from a LoanAccount
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeRepaymentSchedule(
    loanAccountId,
    repaymentScheduleIds,
  ): Observable<any> {
    // get the LoanAccount
    this.loadHelper(loanAccountId);

    // split on a comma with no spaces
    var idList = repaymentScheduleIds.split(",");
    var repaymentSchedule = this.loanAccount.repaymentSchedule;

    if (repaymentSchedule != null && repaymentScheduleIds != null) {
      // iterate over array of provided repaymentSchedule ids and only remove if already assigned
      idList.forEach(function (id) {
        if (repaymentScheduleIds.indexOf(id) > -1) {
          this.loanAccount.repaymentSchedule.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more paymentsIds as a Payments
  // to a LoanAccount
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addPayments(loanAccountId, paymentsIds): Observable<any> {
    // get the LoanAccount
    this.loadHelper(loanAccountId);

    // split on a comma with no spaces
    var idList = paymentsIds.split(",");

    // iterate over array of payments ids
    idList.forEach(function (id) {
      // add the LoanPayment Id if not already assigned
      if (this.loanAccount.payments.indexOf(id) == -1)
        this.loanAccount.payments.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more paymentsIds as a Payments
  // from a LoanAccount
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removePayments(loanAccountId, paymentsIds): Observable<any> {
    // get the LoanAccount
    this.loadHelper(loanAccountId);

    // split on a comma with no spaces
    var idList = paymentsIds.split(",");
    var payments = this.loanAccount.payments;

    if (payments != null && paymentsIds != null) {
      // iterate over array of provided payments ids and only remove if already assigned
      idList.forEach(function (id) {
        if (paymentsIds.indexOf(id) > -1) {
          this.loanAccount.payments.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more collateralIds as a Collateral
  // to a LoanAccount
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addCollateral(loanAccountId, collateralIds): Observable<any> {
    // get the LoanAccount
    this.loadHelper(loanAccountId);

    // split on a comma with no spaces
    var idList = collateralIds.split(",");

    // iterate over array of collateral ids
    idList.forEach(function (id) {
      // add the Collateral Id if not already assigned
      if (this.loanAccount.collateral.indexOf(id) == -1)
        this.loanAccount.collateral.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more collateralIds as a Collateral
  // from a LoanAccount
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeCollateral(loanAccountId, collateralIds): Observable<any> {
    // get the LoanAccount
    this.loadHelper(loanAccountId);

    // split on a comma with no spaces
    var idList = collateralIds.split(",");
    var collateral = this.loanAccount.collateral;

    if (collateral != null && collateralIds != null) {
      // iterate over array of provided collateral ids and only remove if already assigned
      idList.forEach(function (id) {
        if (collateralIds.indexOf(id) > -1) {
          this.loanAccount.collateral.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // adds one or more feeChargesIds as a FeeCharges
  // to a LoanAccount
  // returns a Promise
  // delegates via URI
  //********************************************************************
  addFeeCharges(loanAccountId, feeChargesIds): Observable<any> {
    // get the LoanAccount
    this.loadHelper(loanAccountId);

    // split on a comma with no spaces
    var idList = feeChargesIds.split(",");

    // iterate over array of feeCharges ids
    idList.forEach(function (id) {
      // add the FeeCharge Id if not already assigned
      if (this.loanAccount.feeCharges.indexOf(id) == -1)
        this.loanAccount.feeCharges.push(id);
    });

    // save it
    return this.saveHelper();
  }

  //********************************************************************
  // removes one or more feeChargesIds as a FeeCharges
  // from a LoanAccount
  // returns a Promise
  // delegates via URI
  //********************************************************************
  removeFeeCharges(loanAccountId, feeChargesIds): Observable<any> {
    // get the LoanAccount
    this.loadHelper(loanAccountId);

    // split on a comma with no spaces
    var idList = feeChargesIds.split(",");
    var feeCharges = this.loanAccount.feeCharges;

    if (feeCharges != null && feeChargesIds != null) {
      // iterate over array of provided feeCharges ids and only remove if already assigned
      idList.forEach(function (id) {
        if (feeChargesIds.indexOf(id) > -1) {
          this.loanAccount.feeCharges.pop(id);
        }
      });

      // save it
      return this.saveHelper();
    }
  }

  //********************************************************************
  // saveHelper - internal helper to save a LoanAccount
  //********************************************************************
  saveHelper(): Observable<any> {
    const uri_ = this.apiUrl + "/LoanAccount/update/" + this.loanAccount;

    return this.http.post(uri_, this.loanAccount);
  }

  //********************************************************************
  // loadHelper - internal helper to load a LoanAccount
  //********************************************************************
  loadHelper(id) {
    this.getLoanAccount(id).subscribe((res: LoanAccount) => {
      this.loanAccount = res;
    });
  }
}

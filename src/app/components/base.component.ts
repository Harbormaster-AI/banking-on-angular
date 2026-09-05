import { HttpClient } from '@angular/common/http';
import * as enumTypes from '../models/EnumTypes';

import {BankService} from '../services/Bank.service';
import {BranchService} from '../services/Branch.service';
import {ATMService} from '../services/ATM.service';
import {CustomerService} from '../services/Customer.service';
import {KycProfileService} from '../services/KycProfile.service';
import {IdentityDocumentService} from '../services/IdentityDocument.service';
import {RiskAssessmentService} from '../services/RiskAssessment.service';
import {ScreeningResultService} from '../services/ScreeningResult.service';
import {BankingProductService} from '../services/BankingProduct.service';
import {AccountService} from '../services/Account.service';
import {AccountStatementService} from '../services/AccountStatement.service';
import {TransactionService} from '../services/Transaction.service';
import {ExternalAccountService} from '../services/ExternalAccount.service';
import {FundsTransferService} from '../services/FundsTransfer.service';
import {StandingInstructionService} from '../services/StandingInstruction.service';
import {PaymentCardService} from '../services/PaymentCard.service';
import {LoanAccountService} from '../services/LoanAccount.service';
import {RepaymentScheduleService} from '../services/RepaymentSchedule.service';
import {LoanPaymentService} from '../services/LoanPayment.service';
import {CollateralService} from '../services/Collateral.service';
import {FeeChargeService} from '../services/FeeCharge.service';
import {ExchangeRateService} from '../services/ExchangeRate.service';
import {FXTradeService} from '../services/FXTrade.service';
import {DisputeService} from '../services/Dispute.service';
import {ConsentService} from '../services/Consent.service';
import {ThirdPartyProviderService} from '../services/ThirdPartyProvider.service';

import { Directive } from '@angular/core';

/**
 Base class of all Components.
 For convenience, contains all enums and entity lists
 **/

@Directive()
export class BaseComponent {

    constructor (private http: HttpClient) {}

// enum instances
    CustomerTypes = Object.keys(enumTypes.CustomerType);
    AccountTypes = Object.keys(enumTypes.AccountType);
    AccountStatuss = Object.keys(enumTypes.AccountStatus);
    AccountOwnershipTypes = Object.keys(enumTypes.AccountOwnershipType);
    StatementDeliveryMethods = Object.keys(enumTypes.StatementDeliveryMethod);
    TransactionTypes = Object.keys(enumTypes.TransactionType);
    TransactionStatuss = Object.keys(enumTypes.TransactionStatus);
    TransactionDirections = Object.keys(enumTypes.TransactionDirection);
    ChannelTypes = Object.keys(enumTypes.ChannelType);
    PaymentMethods = Object.keys(enumTypes.PaymentMethod);
    PaymentStatuss = Object.keys(enumTypes.PaymentStatus);
    StandingInstructionFrequencys = Object.keys(enumTypes.StandingInstructionFrequency);
    StandingInstructionStatuss = Object.keys(enumTypes.StandingInstructionStatus);
    CardTypes = Object.keys(enumTypes.CardType);
    CardStatuss = Object.keys(enumTypes.CardStatus);
    CardNetworks = Object.keys(enumTypes.CardNetwork);
    LoanTypes = Object.keys(enumTypes.LoanType);
    LoanStatuss = Object.keys(enumTypes.LoanStatus);
    RateTypes = Object.keys(enumTypes.RateType);
    InterestCompoundings = Object.keys(enumTypes.InterestCompounding);
    InstallmentStatuss = Object.keys(enumTypes.InstallmentStatus);
    FeeTypes = Object.keys(enumTypes.FeeType);
    RiskRatings = Object.keys(enumTypes.RiskRating);
    KycStatuss = Object.keys(enumTypes.KycStatus);
    IdentityDocumentTypes = Object.keys(enumTypes.IdentityDocumentType);
    ScreeningOutcomes = Object.keys(enumTypes.ScreeningOutcome);
    TradeStatuss = Object.keys(enumTypes.TradeStatus);
    ATMStatuss = Object.keys(enumTypes.ATMStatus);
    ConsentTypes = Object.keys(enumTypes.ConsentType);
    ConsentStatuss = Object.keys(enumTypes.ConsentStatus);
    DisputeStatuss = Object.keys(enumTypes.DisputeStatus);
    ProductCategorys = Object.keys(enumTypes.ProductCategory);
    CollateralTypes = Object.keys(enumTypes.CollateralType);

// all collection instances
    banks : any;
    branchs : any;
    aTMs : any;
    customers : any;
    kycProfiles : any;
    identityDocuments : any;
    riskAssessments : any;
    screeningResults : any;
    bankingProducts : any;
    accounts : any;
    accountStatements : any;
    transactions : any;
    externalAccounts : any;
    fundsTransfers : any;
    standingInstructions : any;
    paymentCards : any;
    loanAccounts : any;
    repaymentSchedules : any;
    loanPayments : any;
    collaterals : any;
    feeCharges : any;
    exchangeRates : any;
    fXTrades : any;
    disputes : any;
    consents : any;
    thirdPartyProviders : any;
  
// initialization  
    ngOnInit() {
    }

    initBankList() {
        if ( this.banks == null ) {
            new BankService(this.http).getBanks().subscribe(res => {
                this.banks = res;
            });
        }
    }
    
    initBranchList() {
        if ( this.branchs == null ) {
            new BranchService(this.http).getBranchs().subscribe(res => {
                this.branchs = res;
            });
        }
    }
    
    initATMList() {
        if ( this.aTMs == null ) {
            new ATMService(this.http).getATMs().subscribe(res => {
                this.aTMs = res;
            });
        }
    }
    
    initCustomerList() {
        if ( this.customers == null ) {
            new CustomerService(this.http).getCustomers().subscribe(res => {
                this.customers = res;
            });
        }
    }
    
    initKycProfileList() {
        if ( this.kycProfiles == null ) {
            new KycProfileService(this.http).getKycProfiles().subscribe(res => {
                this.kycProfiles = res;
            });
        }
    }
    
    initIdentityDocumentList() {
        if ( this.identityDocuments == null ) {
            new IdentityDocumentService(this.http).getIdentityDocuments().subscribe(res => {
                this.identityDocuments = res;
            });
        }
    }
    
    initRiskAssessmentList() {
        if ( this.riskAssessments == null ) {
            new RiskAssessmentService(this.http).getRiskAssessments().subscribe(res => {
                this.riskAssessments = res;
            });
        }
    }
    
    initScreeningResultList() {
        if ( this.screeningResults == null ) {
            new ScreeningResultService(this.http).getScreeningResults().subscribe(res => {
                this.screeningResults = res;
            });
        }
    }
    
    initBankingProductList() {
        if ( this.bankingProducts == null ) {
            new BankingProductService(this.http).getBankingProducts().subscribe(res => {
                this.bankingProducts = res;
            });
        }
    }
    
    initAccountList() {
        if ( this.accounts == null ) {
            new AccountService(this.http).getAccounts().subscribe(res => {
                this.accounts = res;
            });
        }
    }
    
    initAccountStatementList() {
        if ( this.accountStatements == null ) {
            new AccountStatementService(this.http).getAccountStatements().subscribe(res => {
                this.accountStatements = res;
            });
        }
    }
    
    initTransactionList() {
        if ( this.transactions == null ) {
            new TransactionService(this.http).getTransactions().subscribe(res => {
                this.transactions = res;
            });
        }
    }
    
    initExternalAccountList() {
        if ( this.externalAccounts == null ) {
            new ExternalAccountService(this.http).getExternalAccounts().subscribe(res => {
                this.externalAccounts = res;
            });
        }
    }
    
    initFundsTransferList() {
        if ( this.fundsTransfers == null ) {
            new FundsTransferService(this.http).getFundsTransfers().subscribe(res => {
                this.fundsTransfers = res;
            });
        }
    }
    
    initStandingInstructionList() {
        if ( this.standingInstructions == null ) {
            new StandingInstructionService(this.http).getStandingInstructions().subscribe(res => {
                this.standingInstructions = res;
            });
        }
    }
    
    initPaymentCardList() {
        if ( this.paymentCards == null ) {
            new PaymentCardService(this.http).getPaymentCards().subscribe(res => {
                this.paymentCards = res;
            });
        }
    }
    
    initLoanAccountList() {
        if ( this.loanAccounts == null ) {
            new LoanAccountService(this.http).getLoanAccounts().subscribe(res => {
                this.loanAccounts = res;
            });
        }
    }
    
    initRepaymentScheduleList() {
        if ( this.repaymentSchedules == null ) {
            new RepaymentScheduleService(this.http).getRepaymentSchedules().subscribe(res => {
                this.repaymentSchedules = res;
            });
        }
    }
    
    initLoanPaymentList() {
        if ( this.loanPayments == null ) {
            new LoanPaymentService(this.http).getLoanPayments().subscribe(res => {
                this.loanPayments = res;
            });
        }
    }
    
    initCollateralList() {
        if ( this.collaterals == null ) {
            new CollateralService(this.http).getCollaterals().subscribe(res => {
                this.collaterals = res;
            });
        }
    }
    
    initFeeChargeList() {
        if ( this.feeCharges == null ) {
            new FeeChargeService(this.http).getFeeCharges().subscribe(res => {
                this.feeCharges = res;
            });
        }
    }
    
    initExchangeRateList() {
        if ( this.exchangeRates == null ) {
            new ExchangeRateService(this.http).getExchangeRates().subscribe(res => {
                this.exchangeRates = res;
            });
        }
    }
    
    initFXTradeList() {
        if ( this.fXTrades == null ) {
            new FXTradeService(this.http).getFXTrades().subscribe(res => {
                this.fXTrades = res;
            });
        }
    }
    
    initDisputeList() {
        if ( this.disputes == null ) {
            new DisputeService(this.http).getDisputes().subscribe(res => {
                this.disputes = res;
            });
        }
    }
    
    initConsentList() {
        if ( this.consents == null ) {
            new ConsentService(this.http).getConsents().subscribe(res => {
                this.consents = res;
            });
        }
    }
    
    initThirdPartyProviderList() {
        if ( this.thirdPartyProviders == null ) {
            new ThirdPartyProviderService(this.http).getThirdPartyProviders().subscribe(res => {
                this.thirdPartyProviders = res;
            });
        }
    }
    
    
// comparison function for select controls  
    compareFn(user1: any, user2: any) {
        return user1 == user2
    }    
}

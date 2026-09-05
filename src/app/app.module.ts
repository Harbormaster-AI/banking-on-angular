import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'

import {IndexBankComponent} from './components/Bank/index/index.component';
import {CreateBankComponent} from './components/Bank/create/create.component';
import {EditBankComponent} from './components/Bank/edit/edit.component';
import {IndexBranchComponent} from './components/Branch/index/index.component';
import {CreateBranchComponent} from './components/Branch/create/create.component';
import {EditBranchComponent} from './components/Branch/edit/edit.component';
import {IndexATMComponent} from './components/ATM/index/index.component';
import {CreateATMComponent} from './components/ATM/create/create.component';
import {EditATMComponent} from './components/ATM/edit/edit.component';
import {IndexCustomerComponent} from './components/Customer/index/index.component';
import {CreateCustomerComponent} from './components/Customer/create/create.component';
import {EditCustomerComponent} from './components/Customer/edit/edit.component';
import {IndexKycProfileComponent} from './components/KycProfile/index/index.component';
import {CreateKycProfileComponent} from './components/KycProfile/create/create.component';
import {EditKycProfileComponent} from './components/KycProfile/edit/edit.component';
import {IndexIdentityDocumentComponent} from './components/IdentityDocument/index/index.component';
import {CreateIdentityDocumentComponent} from './components/IdentityDocument/create/create.component';
import {EditIdentityDocumentComponent} from './components/IdentityDocument/edit/edit.component';
import {IndexRiskAssessmentComponent} from './components/RiskAssessment/index/index.component';
import {CreateRiskAssessmentComponent} from './components/RiskAssessment/create/create.component';
import {EditRiskAssessmentComponent} from './components/RiskAssessment/edit/edit.component';
import {IndexScreeningResultComponent} from './components/ScreeningResult/index/index.component';
import {CreateScreeningResultComponent} from './components/ScreeningResult/create/create.component';
import {EditScreeningResultComponent} from './components/ScreeningResult/edit/edit.component';
import {IndexBankingProductComponent} from './components/BankingProduct/index/index.component';
import {CreateBankingProductComponent} from './components/BankingProduct/create/create.component';
import {EditBankingProductComponent} from './components/BankingProduct/edit/edit.component';
import {IndexAccountComponent} from './components/Account/index/index.component';
import {CreateAccountComponent} from './components/Account/create/create.component';
import {EditAccountComponent} from './components/Account/edit/edit.component';
import {IndexAccountStatementComponent} from './components/AccountStatement/index/index.component';
import {CreateAccountStatementComponent} from './components/AccountStatement/create/create.component';
import {EditAccountStatementComponent} from './components/AccountStatement/edit/edit.component';
import {IndexTransactionComponent} from './components/Transaction/index/index.component';
import {CreateTransactionComponent} from './components/Transaction/create/create.component';
import {EditTransactionComponent} from './components/Transaction/edit/edit.component';
import {IndexExternalAccountComponent} from './components/ExternalAccount/index/index.component';
import {CreateExternalAccountComponent} from './components/ExternalAccount/create/create.component';
import {EditExternalAccountComponent} from './components/ExternalAccount/edit/edit.component';
import {IndexFundsTransferComponent} from './components/FundsTransfer/index/index.component';
import {CreateFundsTransferComponent} from './components/FundsTransfer/create/create.component';
import {EditFundsTransferComponent} from './components/FundsTransfer/edit/edit.component';
import {IndexStandingInstructionComponent} from './components/StandingInstruction/index/index.component';
import {CreateStandingInstructionComponent} from './components/StandingInstruction/create/create.component';
import {EditStandingInstructionComponent} from './components/StandingInstruction/edit/edit.component';
import {IndexPaymentCardComponent} from './components/PaymentCard/index/index.component';
import {CreatePaymentCardComponent} from './components/PaymentCard/create/create.component';
import {EditPaymentCardComponent} from './components/PaymentCard/edit/edit.component';
import {IndexLoanAccountComponent} from './components/LoanAccount/index/index.component';
import {CreateLoanAccountComponent} from './components/LoanAccount/create/create.component';
import {EditLoanAccountComponent} from './components/LoanAccount/edit/edit.component';
import {IndexRepaymentScheduleComponent} from './components/RepaymentSchedule/index/index.component';
import {CreateRepaymentScheduleComponent} from './components/RepaymentSchedule/create/create.component';
import {EditRepaymentScheduleComponent} from './components/RepaymentSchedule/edit/edit.component';
import {IndexLoanPaymentComponent} from './components/LoanPayment/index/index.component';
import {CreateLoanPaymentComponent} from './components/LoanPayment/create/create.component';
import {EditLoanPaymentComponent} from './components/LoanPayment/edit/edit.component';
import {IndexCollateralComponent} from './components/Collateral/index/index.component';
import {CreateCollateralComponent} from './components/Collateral/create/create.component';
import {EditCollateralComponent} from './components/Collateral/edit/edit.component';
import {IndexFeeChargeComponent} from './components/FeeCharge/index/index.component';
import {CreateFeeChargeComponent} from './components/FeeCharge/create/create.component';
import {EditFeeChargeComponent} from './components/FeeCharge/edit/edit.component';
import {IndexExchangeRateComponent} from './components/ExchangeRate/index/index.component';
import {CreateExchangeRateComponent} from './components/ExchangeRate/create/create.component';
import {EditExchangeRateComponent} from './components/ExchangeRate/edit/edit.component';
import {IndexFXTradeComponent} from './components/FXTrade/index/index.component';
import {CreateFXTradeComponent} from './components/FXTrade/create/create.component';
import {EditFXTradeComponent} from './components/FXTrade/edit/edit.component';
import {IndexDisputeComponent} from './components/Dispute/index/index.component';
import {CreateDisputeComponent} from './components/Dispute/create/create.component';
import {EditDisputeComponent} from './components/Dispute/edit/edit.component';
import {IndexConsentComponent} from './components/Consent/index/index.component';
import {CreateConsentComponent} from './components/Consent/create/create.component';
import {EditConsentComponent} from './components/Consent/edit/edit.component';
import {IndexThirdPartyProviderComponent} from './components/ThirdPartyProvider/index/index.component';
import {CreateThirdPartyProviderComponent} from './components/ThirdPartyProvider/create/create.component';
import {EditThirdPartyProviderComponent} from './components/ThirdPartyProvider/edit/edit.component';

import * as appRoutes from './routerConfig';

import {BankService} from './services/Bank.service';
import {BranchService} from './services/Branch.service';
import {ATMService} from './services/ATM.service';
import {CustomerService} from './services/Customer.service';
import {KycProfileService} from './services/KycProfile.service';
import {IdentityDocumentService} from './services/IdentityDocument.service';
import {RiskAssessmentService} from './services/RiskAssessment.service';
import {ScreeningResultService} from './services/ScreeningResult.service';
import {BankingProductService} from './services/BankingProduct.service';
import {AccountService} from './services/Account.service';
import {AccountStatementService} from './services/AccountStatement.service';
import {TransactionService} from './services/Transaction.service';
import {ExternalAccountService} from './services/ExternalAccount.service';
import {FundsTransferService} from './services/FundsTransfer.service';
import {StandingInstructionService} from './services/StandingInstruction.service';
import {PaymentCardService} from './services/PaymentCard.service';
import {LoanAccountService} from './services/LoanAccount.service';
import {RepaymentScheduleService} from './services/RepaymentSchedule.service';
import {LoanPaymentService} from './services/LoanPayment.service';
import {CollateralService} from './services/Collateral.service';
import {FeeChargeService} from './services/FeeCharge.service';
import {ExchangeRateService} from './services/ExchangeRate.service';
import {FXTradeService} from './services/FXTrade.service';
import {DisputeService} from './services/Dispute.service';
import {ConsentService} from './services/Consent.service';
import {ThirdPartyProviderService} from './services/ThirdPartyProvider.service';

@NgModule({
  declarations: [
    IndexBankComponent,
    CreateBankComponent,
    EditBankComponent,
    IndexBranchComponent,
    CreateBranchComponent,
    EditBranchComponent,
    IndexATMComponent,
    CreateATMComponent,
    EditATMComponent,
    IndexCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    IndexKycProfileComponent,
    CreateKycProfileComponent,
    EditKycProfileComponent,
    IndexIdentityDocumentComponent,
    CreateIdentityDocumentComponent,
    EditIdentityDocumentComponent,
    IndexRiskAssessmentComponent,
    CreateRiskAssessmentComponent,
    EditRiskAssessmentComponent,
    IndexScreeningResultComponent,
    CreateScreeningResultComponent,
    EditScreeningResultComponent,
    IndexBankingProductComponent,
    CreateBankingProductComponent,
    EditBankingProductComponent,
    IndexAccountComponent,
    CreateAccountComponent,
    EditAccountComponent,
    IndexAccountStatementComponent,
    CreateAccountStatementComponent,
    EditAccountStatementComponent,
    IndexTransactionComponent,
    CreateTransactionComponent,
    EditTransactionComponent,
    IndexExternalAccountComponent,
    CreateExternalAccountComponent,
    EditExternalAccountComponent,
    IndexFundsTransferComponent,
    CreateFundsTransferComponent,
    EditFundsTransferComponent,
    IndexStandingInstructionComponent,
    CreateStandingInstructionComponent,
    EditStandingInstructionComponent,
    IndexPaymentCardComponent,
    CreatePaymentCardComponent,
    EditPaymentCardComponent,
    IndexLoanAccountComponent,
    CreateLoanAccountComponent,
    EditLoanAccountComponent,
    IndexRepaymentScheduleComponent,
    CreateRepaymentScheduleComponent,
    EditRepaymentScheduleComponent,
    IndexLoanPaymentComponent,
    CreateLoanPaymentComponent,
    EditLoanPaymentComponent,
    IndexCollateralComponent,
    CreateCollateralComponent,
    EditCollateralComponent,
    IndexFeeChargeComponent,
    CreateFeeChargeComponent,
    EditFeeChargeComponent,
    IndexExchangeRateComponent,
    CreateExchangeRateComponent,
    EditExchangeRateComponent,
    IndexFXTradeComponent,
    CreateFXTradeComponent,
    EditFXTradeComponent,
    IndexDisputeComponent,
    CreateDisputeComponent,
    EditDisputeComponent,
    IndexConsentComponent,
    CreateConsentComponent,
    EditConsentComponent,
    IndexThirdPartyProviderComponent,
    CreateThirdPartyProviderComponent,
    EditThirdPartyProviderComponent,
    AppComponent
  ],
  imports: [

    BrowserModule, 
    NgbModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
	MatMomentDateModule,
    BrowserAnimationsModule,
	HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,    
    RouterModule.forRoot(appRoutes.BankRoutes), 
    RouterModule.forRoot(appRoutes.BranchRoutes), 
    RouterModule.forRoot(appRoutes.ATMRoutes), 
    RouterModule.forRoot(appRoutes.CustomerRoutes), 
    RouterModule.forRoot(appRoutes.KycProfileRoutes), 
    RouterModule.forRoot(appRoutes.IdentityDocumentRoutes), 
    RouterModule.forRoot(appRoutes.RiskAssessmentRoutes), 
    RouterModule.forRoot(appRoutes.ScreeningResultRoutes), 
    RouterModule.forRoot(appRoutes.BankingProductRoutes), 
    RouterModule.forRoot(appRoutes.AccountRoutes), 
    RouterModule.forRoot(appRoutes.AccountStatementRoutes), 
    RouterModule.forRoot(appRoutes.TransactionRoutes), 
    RouterModule.forRoot(appRoutes.ExternalAccountRoutes), 
    RouterModule.forRoot(appRoutes.FundsTransferRoutes), 
    RouterModule.forRoot(appRoutes.StandingInstructionRoutes), 
    RouterModule.forRoot(appRoutes.PaymentCardRoutes), 
    RouterModule.forRoot(appRoutes.LoanAccountRoutes), 
    RouterModule.forRoot(appRoutes.RepaymentScheduleRoutes), 
    RouterModule.forRoot(appRoutes.LoanPaymentRoutes), 
    RouterModule.forRoot(appRoutes.CollateralRoutes), 
    RouterModule.forRoot(appRoutes.FeeChargeRoutes), 
    RouterModule.forRoot(appRoutes.ExchangeRateRoutes), 
    RouterModule.forRoot(appRoutes.FXTradeRoutes), 
    RouterModule.forRoot(appRoutes.DisputeRoutes), 
    RouterModule.forRoot(appRoutes.ConsentRoutes), 
    RouterModule.forRoot(appRoutes.ThirdPartyProviderRoutes), 
  ],
  providers: [BankService,BranchService,ATMService,CustomerService,KycProfileService,IdentityDocumentService,RiskAssessmentService,ScreeningResultService,BankingProductService,AccountService,AccountStatementService,TransactionService,ExternalAccountService,FundsTransferService,StandingInstructionService,PaymentCardService,LoanAccountService,RepaymentScheduleService,LoanPaymentService,CollateralService,FeeChargeService,ExchangeRateService,FXTradeService,DisputeService,ConsentService,ThirdPartyProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

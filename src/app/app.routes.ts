import { Routes } from '@angular/router';

import { CreateBankComponent } from './components/Bank/create/create.component';
import { EditBankComponent } from './components/Bank/edit/edit.component';
import { IndexBankComponent } from './components/Bank/index/index.component';
import { CreateBranchComponent } from './components/Branch/create/create.component';
import { EditBranchComponent } from './components/Branch/edit/edit.component';
import { IndexBranchComponent } from './components/Branch/index/index.component';
import { CreateATMComponent } from './components/ATM/create/create.component';
import { EditATMComponent } from './components/ATM/edit/edit.component';
import { IndexATMComponent } from './components/ATM/index/index.component';
import { CreateCustomerComponent } from './components/Customer/create/create.component';
import { EditCustomerComponent } from './components/Customer/edit/edit.component';
import { IndexCustomerComponent } from './components/Customer/index/index.component';
import { CreateKycProfileComponent } from './components/KycProfile/create/create.component';
import { EditKycProfileComponent } from './components/KycProfile/edit/edit.component';
import { IndexKycProfileComponent } from './components/KycProfile/index/index.component';
import { CreateIdentityDocumentComponent } from './components/IdentityDocument/create/create.component';
import { EditIdentityDocumentComponent } from './components/IdentityDocument/edit/edit.component';
import { IndexIdentityDocumentComponent } from './components/IdentityDocument/index/index.component';
import { CreateRiskAssessmentComponent } from './components/RiskAssessment/create/create.component';
import { EditRiskAssessmentComponent } from './components/RiskAssessment/edit/edit.component';
import { IndexRiskAssessmentComponent } from './components/RiskAssessment/index/index.component';
import { CreateScreeningResultComponent } from './components/ScreeningResult/create/create.component';
import { EditScreeningResultComponent } from './components/ScreeningResult/edit/edit.component';
import { IndexScreeningResultComponent } from './components/ScreeningResult/index/index.component';
import { CreateBankingProductComponent } from './components/BankingProduct/create/create.component';
import { EditBankingProductComponent } from './components/BankingProduct/edit/edit.component';
import { IndexBankingProductComponent } from './components/BankingProduct/index/index.component';
import { CreateAccountComponent } from './components/Account/create/create.component';
import { EditAccountComponent } from './components/Account/edit/edit.component';
import { IndexAccountComponent } from './components/Account/index/index.component';
import { CreateAccountStatementComponent } from './components/AccountStatement/create/create.component';
import { EditAccountStatementComponent } from './components/AccountStatement/edit/edit.component';
import { IndexAccountStatementComponent } from './components/AccountStatement/index/index.component';
import { CreateTransactionComponent } from './components/Transaction/create/create.component';
import { EditTransactionComponent } from './components/Transaction/edit/edit.component';
import { IndexTransactionComponent } from './components/Transaction/index/index.component';
import { CreateExternalAccountComponent } from './components/ExternalAccount/create/create.component';
import { EditExternalAccountComponent } from './components/ExternalAccount/edit/edit.component';
import { IndexExternalAccountComponent } from './components/ExternalAccount/index/index.component';
import { CreateFundsTransferComponent } from './components/FundsTransfer/create/create.component';
import { EditFundsTransferComponent } from './components/FundsTransfer/edit/edit.component';
import { IndexFundsTransferComponent } from './components/FundsTransfer/index/index.component';
import { CreateStandingInstructionComponent } from './components/StandingInstruction/create/create.component';
import { EditStandingInstructionComponent } from './components/StandingInstruction/edit/edit.component';
import { IndexStandingInstructionComponent } from './components/StandingInstruction/index/index.component';
import { CreatePaymentCardComponent } from './components/PaymentCard/create/create.component';
import { EditPaymentCardComponent } from './components/PaymentCard/edit/edit.component';
import { IndexPaymentCardComponent } from './components/PaymentCard/index/index.component';
import { CreateLoanAccountComponent } from './components/LoanAccount/create/create.component';
import { EditLoanAccountComponent } from './components/LoanAccount/edit/edit.component';
import { IndexLoanAccountComponent } from './components/LoanAccount/index/index.component';
import { CreateRepaymentScheduleComponent } from './components/RepaymentSchedule/create/create.component';
import { EditRepaymentScheduleComponent } from './components/RepaymentSchedule/edit/edit.component';
import { IndexRepaymentScheduleComponent } from './components/RepaymentSchedule/index/index.component';
import { CreateLoanPaymentComponent } from './components/LoanPayment/create/create.component';
import { EditLoanPaymentComponent } from './components/LoanPayment/edit/edit.component';
import { IndexLoanPaymentComponent } from './components/LoanPayment/index/index.component';
import { CreateCollateralComponent } from './components/Collateral/create/create.component';
import { EditCollateralComponent } from './components/Collateral/edit/edit.component';
import { IndexCollateralComponent } from './components/Collateral/index/index.component';
import { CreateFeeChargeComponent } from './components/FeeCharge/create/create.component';
import { EditFeeChargeComponent } from './components/FeeCharge/edit/edit.component';
import { IndexFeeChargeComponent } from './components/FeeCharge/index/index.component';
import { CreateExchangeRateComponent } from './components/ExchangeRate/create/create.component';
import { EditExchangeRateComponent } from './components/ExchangeRate/edit/edit.component';
import { IndexExchangeRateComponent } from './components/ExchangeRate/index/index.component';
import { CreateFXTradeComponent } from './components/FXTrade/create/create.component';
import { EditFXTradeComponent } from './components/FXTrade/edit/edit.component';
import { IndexFXTradeComponent } from './components/FXTrade/index/index.component';
import { CreateDisputeComponent } from './components/Dispute/create/create.component';
import { EditDisputeComponent } from './components/Dispute/edit/edit.component';
import { IndexDisputeComponent } from './components/Dispute/index/index.component';
import { CreateConsentComponent } from './components/Consent/create/create.component';
import { EditConsentComponent } from './components/Consent/edit/edit.component';
import { IndexConsentComponent } from './components/Consent/index/index.component';
import { CreateThirdPartyProviderComponent } from './components/ThirdPartyProvider/create/create.component';
import { EditThirdPartyProviderComponent } from './components/ThirdPartyProvider/edit/edit.component';
import { IndexThirdPartyProviderComponent } from './components/ThirdPartyProvider/index/index.component';

export const routes: Routes = [

        {
        path: 'createBank',
        component: CreateBankComponent
},
{
    path: 'editBank/:id',
        component: EditBankComponent
},
{
    path: 'indexBank',
        component: IndexBankComponent
},
    {
        path: 'createBranch',
        component: CreateBranchComponent
},
{
    path: 'editBranch/:id',
        component: EditBranchComponent
},
{
    path: 'indexBranch',
        component: IndexBranchComponent
},
    {
        path: 'createATM',
        component: CreateATMComponent
},
{
    path: 'editATM/:id',
        component: EditATMComponent
},
{
    path: 'indexATM',
        component: IndexATMComponent
},
    {
        path: 'createCustomer',
        component: CreateCustomerComponent
},
{
    path: 'editCustomer/:id',
        component: EditCustomerComponent
},
{
    path: 'indexCustomer',
        component: IndexCustomerComponent
},
    {
        path: 'createKycProfile',
        component: CreateKycProfileComponent
},
{
    path: 'editKycProfile/:id',
        component: EditKycProfileComponent
},
{
    path: 'indexKycProfile',
        component: IndexKycProfileComponent
},
    {
        path: 'createIdentityDocument',
        component: CreateIdentityDocumentComponent
},
{
    path: 'editIdentityDocument/:id',
        component: EditIdentityDocumentComponent
},
{
    path: 'indexIdentityDocument',
        component: IndexIdentityDocumentComponent
},
    {
        path: 'createRiskAssessment',
        component: CreateRiskAssessmentComponent
},
{
    path: 'editRiskAssessment/:id',
        component: EditRiskAssessmentComponent
},
{
    path: 'indexRiskAssessment',
        component: IndexRiskAssessmentComponent
},
    {
        path: 'createScreeningResult',
        component: CreateScreeningResultComponent
},
{
    path: 'editScreeningResult/:id',
        component: EditScreeningResultComponent
},
{
    path: 'indexScreeningResult',
        component: IndexScreeningResultComponent
},
    {
        path: 'createBankingProduct',
        component: CreateBankingProductComponent
},
{
    path: 'editBankingProduct/:id',
        component: EditBankingProductComponent
},
{
    path: 'indexBankingProduct',
        component: IndexBankingProductComponent
},
    {
        path: 'createAccount',
        component: CreateAccountComponent
},
{
    path: 'editAccount/:id',
        component: EditAccountComponent
},
{
    path: 'indexAccount',
        component: IndexAccountComponent
},
    {
        path: 'createAccountStatement',
        component: CreateAccountStatementComponent
},
{
    path: 'editAccountStatement/:id',
        component: EditAccountStatementComponent
},
{
    path: 'indexAccountStatement',
        component: IndexAccountStatementComponent
},
    {
        path: 'createTransaction',
        component: CreateTransactionComponent
},
{
    path: 'editTransaction/:id',
        component: EditTransactionComponent
},
{
    path: 'indexTransaction',
        component: IndexTransactionComponent
},
    {
        path: 'createExternalAccount',
        component: CreateExternalAccountComponent
},
{
    path: 'editExternalAccount/:id',
        component: EditExternalAccountComponent
},
{
    path: 'indexExternalAccount',
        component: IndexExternalAccountComponent
},
    {
        path: 'createFundsTransfer',
        component: CreateFundsTransferComponent
},
{
    path: 'editFundsTransfer/:id',
        component: EditFundsTransferComponent
},
{
    path: 'indexFundsTransfer',
        component: IndexFundsTransferComponent
},
    {
        path: 'createStandingInstruction',
        component: CreateStandingInstructionComponent
},
{
    path: 'editStandingInstruction/:id',
        component: EditStandingInstructionComponent
},
{
    path: 'indexStandingInstruction',
        component: IndexStandingInstructionComponent
},
    {
        path: 'createPaymentCard',
        component: CreatePaymentCardComponent
},
{
    path: 'editPaymentCard/:id',
        component: EditPaymentCardComponent
},
{
    path: 'indexPaymentCard',
        component: IndexPaymentCardComponent
},
    {
        path: 'createLoanAccount',
        component: CreateLoanAccountComponent
},
{
    path: 'editLoanAccount/:id',
        component: EditLoanAccountComponent
},
{
    path: 'indexLoanAccount',
        component: IndexLoanAccountComponent
},
    {
        path: 'createRepaymentSchedule',
        component: CreateRepaymentScheduleComponent
},
{
    path: 'editRepaymentSchedule/:id',
        component: EditRepaymentScheduleComponent
},
{
    path: 'indexRepaymentSchedule',
        component: IndexRepaymentScheduleComponent
},
    {
        path: 'createLoanPayment',
        component: CreateLoanPaymentComponent
},
{
    path: 'editLoanPayment/:id',
        component: EditLoanPaymentComponent
},
{
    path: 'indexLoanPayment',
        component: IndexLoanPaymentComponent
},
    {
        path: 'createCollateral',
        component: CreateCollateralComponent
},
{
    path: 'editCollateral/:id',
        component: EditCollateralComponent
},
{
    path: 'indexCollateral',
        component: IndexCollateralComponent
},
    {
        path: 'createFeeCharge',
        component: CreateFeeChargeComponent
},
{
    path: 'editFeeCharge/:id',
        component: EditFeeChargeComponent
},
{
    path: 'indexFeeCharge',
        component: IndexFeeChargeComponent
},
    {
        path: 'createExchangeRate',
        component: CreateExchangeRateComponent
},
{
    path: 'editExchangeRate/:id',
        component: EditExchangeRateComponent
},
{
    path: 'indexExchangeRate',
        component: IndexExchangeRateComponent
},
    {
        path: 'createFXTrade',
        component: CreateFXTradeComponent
},
{
    path: 'editFXTrade/:id',
        component: EditFXTradeComponent
},
{
    path: 'indexFXTrade',
        component: IndexFXTradeComponent
},
    {
        path: 'createDispute',
        component: CreateDisputeComponent
},
{
    path: 'editDispute/:id',
        component: EditDisputeComponent
},
{
    path: 'indexDispute',
        component: IndexDisputeComponent
},
    {
        path: 'createConsent',
        component: CreateConsentComponent
},
{
    path: 'editConsent/:id',
        component: EditConsentComponent
},
{
    path: 'indexConsent',
        component: IndexConsentComponent
},
    {
        path: 'createThirdPartyProvider',
        component: CreateThirdPartyProviderComponent
},
{
    path: 'editThirdPartyProvider/:id',
        component: EditThirdPartyProviderComponent
},
{
    path: 'indexThirdPartyProvider',
        component: IndexThirdPartyProviderComponent
}
];
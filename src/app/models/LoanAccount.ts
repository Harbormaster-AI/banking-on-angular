import Decimal from "decimal.js";

// Define collection and schema for LoanAccount
export interface LoanAccount {
  loanAccountId: string;
  loanNumber: string;
  principalAmount: Money;
  outstandingPrincipal: Money;
  interestRate: Percentage;
  originationDate: Date;
  maturityDate: Date;
  paymentDayOfMonth: number;
  currency: string;
  bank: string;
  branch: string;
  product: string;
  borrowers: string[];
  repaymentSchedule: string[];
  payments: string[];
  collateral: string[];
  feeCharges: string[];
  loanType: string;
  rateType: string;
  compounding: string;
  status: string;
  collection: "loanAccounts";
}

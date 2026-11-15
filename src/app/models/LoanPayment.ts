import Decimal from "decimal.js";

// Define collection and schema for LoanPayment
export interface LoanPayment {
  loanPaymentId: string;
  paymentReference: string;
  amount: Money;
  paymentDate: Date;
  loanAccount: string;
  transaction: string;
  method: string;
  status: string;
  collection: "loanPayments";
}

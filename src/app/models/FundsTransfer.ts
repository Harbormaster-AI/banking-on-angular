import Decimal from "decimal.js";

// Define collection and schema for FundsTransfer
export interface FundsTransfer {
  fundsTransferId: string;
  transferReference: string;
  amount: Money;
  requestedDate: Date;
  executionDate: Date;
  purpose: string;
  feeAmount: Money;
  sourceAccount: string;
  destinationAccount: string;
  externalBeneficiary: string;
  initiatedBy: string;
  transactions: string[];
  method: string;
  status: string;
  collection: "fundsTransfers";
}

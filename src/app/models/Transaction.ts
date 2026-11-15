import Decimal from "decimal.js";

// Define collection and schema for Transaction
export interface Transaction {
  transactionId: string;
  bookingDate: Date;
  valueDate: Date;
  amount: Money;
  description: string;
  account: string;
  externalCounterparty: string;
  paymentCard: string;
  fundsTransfer: string;
  fxTrade: string;
  dispute: string;
  direction: string;
  transactionType: string;
  status: string;
  channel: string;
  collection: "transactions";
}

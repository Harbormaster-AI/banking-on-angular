import Decimal from "decimal.js";

// Define collection and schema for Dispute
export interface Dispute {
  disputeId: string;
  disputeReference: string;
  raisedOn: Date;
  reason: string;
  transaction: string;
  customer: string;
  account: string;
  paymentCard: string;
  status: string;
  collection: "disputes";
}

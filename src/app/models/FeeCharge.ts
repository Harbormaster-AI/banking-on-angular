import Decimal from "decimal.js";

// Define collection and schema for FeeCharge
export interface FeeCharge {
  feeChargeId: string;
  feeCode: string;
  amount: Money;
  appliedOn: Date;
  account: string;
  loanAccount: string;
  feeType: string;
  collection: "feeCharges";
}

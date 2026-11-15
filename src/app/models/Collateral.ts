import Decimal from "decimal.js";

// Define collection and schema for Collateral
export interface Collateral {
  collateralId: string;
  collateralIdentifier: string;
  appraisedValue: Money;
  description: string;
  location: Address;
  loanAccount: string;
  collateralType: string;
  collection: "collaterals";
}

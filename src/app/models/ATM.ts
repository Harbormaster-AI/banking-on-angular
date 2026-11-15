import Decimal from "decimal.js";

// Define collection and schema for ATM
export interface ATM {
  aTMId: string;
  terminalId: string;
  location: Address;
  branch: string;
  status: string;
  collection: "aTMs";
}

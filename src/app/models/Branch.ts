import Decimal from "decimal.js";

// Define collection and schema for Branch
export interface Branch {
  branchId: string;
  name: string;
  branchCode: string;
  address: Address;
  phone: string;
  openingHours: string;
  bank: string;
  accounts: string[];
  loanAccounts: string[];
  atms: string[];
  collection: "branchs";
}

import Decimal from "decimal.js";

// Define collection and schema for Account
export interface Account {
  accountId: string;
  accountNumber: AccountNumber;
  iban: IBAN;
  accountName: string;
  currency: string;
  openedOn: Date;
  closedOn: Date;
  bank: string;
  branch: string;
  product: string;
  owners: string[];
  transactions: string[];
  statements: string[];
  standingInstructions: string[];
  feeCharges: string[];
  accountType: string;
  ownershipType: string;
  status: string;
  collection: "accounts";
}

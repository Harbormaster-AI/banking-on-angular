import Decimal from "decimal.js";

// Define collection and schema for ExternalAccount
export interface ExternalAccount {
  externalAccountId: string;
  name: string;
  iban: IBAN;
  accountNumber: AccountNumber;
  bic: BIC;
  bankName: string;
  country: string;
  customer: string;
  transactions: string[];
  collection: "externalAccounts";
}

import Decimal from "decimal.js";

// Define collection and schema for Bank
export interface Bank {
  bankId: string;
  name: string;
  legalName: string;
  swiftBic: BIC;
  headquartersCountry: string;
  website: string;
  branches: string[];
  products: string[];
  customers: string[];
  accounts: string[];
  paymentCards: string[];
  loanAccounts: string[];
  exchangeRates: string[];
  consents: string[];
  thirdPartyProviders: string[];
  collection: "banks";
}

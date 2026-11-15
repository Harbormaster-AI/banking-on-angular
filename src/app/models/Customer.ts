import Decimal from "decimal.js";

// Define collection and schema for Customer
export interface Customer {
  customerId: string;
  firstName: string;
  lastName: string;
  legalName: string;
  dateOfBirth: Date;
  taxId: string;
  email: string;
  phone: string;
  address: Address;
  bank: string;
  accounts: string[];
  loanAccounts: string[];
  paymentCards: string[];
  externalAccounts: string[];
  fundsTransfers: string[];
  disputes: string[];
  kycProfiles: string[];
  consents: string[];
  customerType: string;
  riskRating: string;
  kycStatus: string;
  collection: "customers";
}

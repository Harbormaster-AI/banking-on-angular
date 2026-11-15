import Decimal from "decimal.js";

// Define collection and schema for BankingProduct
export interface BankingProduct {
  bankingProductId: string;
  productCode: string;
  name: string;
  description: string;
  bank: string;
  accounts: string[];
  loanAccounts: string[];
  paymentCards: string[];
  productCategory: string;
  collection: "bankingProducts";
}

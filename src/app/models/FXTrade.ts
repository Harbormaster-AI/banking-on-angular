import Decimal from "decimal.js";

// Define collection and schema for FXTrade
export interface FXTrade {
  fXTradeId: string;
  tradeReference: string;
  tradeDate: Date;
  settlementDate: Date;
  amountSold: Money;
  amountBought: Money;
  rate: Decimal;
  customer: string;
  bank: string;
  exchangeRate: string;
  sourceAccount: string;
  destinationAccount: string;
  transaction: string;
  status: string;
  collection: "fXTrades";
}

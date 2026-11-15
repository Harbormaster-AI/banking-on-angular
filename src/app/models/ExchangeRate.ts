import Decimal from "decimal.js";

// Define collection and schema for ExchangeRate
export interface ExchangeRate {
  exchangeRateId: string;
  baseCurrency: string;
  counterCurrency: string;
  rate: Decimal;
  asOf: Date;
  source: string;
  bank: string;
  fxTrades: string[];
  collection: "exchangeRates";
}

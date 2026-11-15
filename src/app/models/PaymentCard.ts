import Decimal from "decimal.js";

// Define collection and schema for PaymentCard
export interface PaymentCard {
  paymentCardId: string;
  cardNumber: CardPAN;
  embossedName: string;
  expiryMonth: number;
  expiryYear: number;
  bank: string;
  account: string;
  customer: string;
  transactions: string[];
  cardType: string;
  cardStatus: string;
  network: string;
  collection: "paymentCards";
}

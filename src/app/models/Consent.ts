import Decimal from "decimal.js";

// Define collection and schema for Consent
export interface Consent {
  consentId: string;
  grantedOn: Date;
  expiresOn: Date;
  customer: string;
  bank: string;
  authorizedAccounts: string[];
  thirdPartyProvider: string;
  consentType: string;
  status: string;
  collection: "consents";
}

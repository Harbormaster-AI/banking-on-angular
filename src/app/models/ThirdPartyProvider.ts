import Decimal from "decimal.js";

// Define collection and schema for ThirdPartyProvider
export interface ThirdPartyProvider {
  thirdPartyProviderId: string;
  name: string;
  registrationId: string;
  website: string;
  bank: string;
  consents: string[];
  collection: "thirdPartyProviders";
}

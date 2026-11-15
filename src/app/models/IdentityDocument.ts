import Decimal from "decimal.js";

// Define collection and schema for IdentityDocument
export interface IdentityDocument {
  identityDocumentId: string;
  documentNumber: string;
  issuingCountry: string;
  expirationDate: Date;
  kycProfile: string;
  documentType: string;
  collection: "identityDocuments";
}

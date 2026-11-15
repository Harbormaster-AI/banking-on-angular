import Decimal from "decimal.js";

// Define collection and schema for KycProfile
export interface KycProfile {
  kycProfileId: string;
  profileId: string;
  lastReviewedOn: Date;
  customer: string;
  identityDocuments: string[];
  riskAssessments: string[];
  screenings: string[];
  status: string;
  collection: "kycProfiles";
}

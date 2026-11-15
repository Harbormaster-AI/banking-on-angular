import Decimal from "decimal.js";

// Define collection and schema for RiskAssessment
export interface RiskAssessment {
  riskAssessmentId: string;
  score: number;
  assessedOn: Date;
  kycProfile: string;
  rating: string;
  collection: "riskAssessments";
}

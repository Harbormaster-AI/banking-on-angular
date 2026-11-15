import Decimal from "decimal.js";

// Define collection and schema for ScreeningResult
export interface ScreeningResult {
  screeningResultId: string;
  screeningDate: Date;
  provider: string;
  kycProfile: string;
  outcome: string;
  collection: "screeningResults";
}

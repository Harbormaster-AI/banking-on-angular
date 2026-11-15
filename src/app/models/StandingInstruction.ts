import Decimal from "decimal.js";

// Define collection and schema for StandingInstruction
export interface StandingInstruction {
  standingInstructionId: string;
  instructionId: string;
  amount: Money;
  nextExecutionDate: Date;
  account: string;
  beneficiary: string;
  frequency: string;
  status: string;
  collection: "standingInstructions";
}

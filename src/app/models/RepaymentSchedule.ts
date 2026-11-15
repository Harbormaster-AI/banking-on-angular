import Decimal from "decimal.js";

// Define collection and schema for RepaymentSchedule
export interface RepaymentSchedule {
  repaymentScheduleId: string;
  installmentNumber: number;
  dueDate: Date;
  principalDue: Money;
  interestDue: Money;
  totalDue: Money;
  loanAccount: string;
  payment: string;
  status: string;
  collection: "repaymentSchedules";
}

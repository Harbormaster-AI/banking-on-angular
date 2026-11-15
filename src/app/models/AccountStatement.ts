import Decimal from "decimal.js";

// Define collection and schema for AccountStatement
export interface AccountStatement {
  accountStatementId: string;
  statementNumber: string;
  periodStart: Date;
  periodEnd: Date;
  openingBalance: Money;
  closingBalance: Money;
  account: string;
  deliveryMethod: string;
  collection: "accountStatements";
}

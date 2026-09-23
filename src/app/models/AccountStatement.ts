

// Define collection and schema for AccountStatement
export interface AccountStatement {
    statementNumber: string
    periodStart: Date
    periodEnd: Date
    openingBalance: Money
    closingBalance: Money
    Account: Schema.Types.ObjectId
    DeliveryMethod:  String
    collection: 'accountStatements'
}

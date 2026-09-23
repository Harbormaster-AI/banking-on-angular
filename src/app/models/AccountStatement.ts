

// Define collection and schema for AccountStatement
export  AccountStatement {
    statementNumber: string
    periodStart: Date
    periodEnd: Date
    openingBalance: Money
    closingBalance: Money
    Account: Schema.Types.ObjectId
    DeliveryMethod:  String
    collection: 'accountStatements'
}

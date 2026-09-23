

// Define collection and schema for Account
export  Account {
    accountNumber: AccountNumber
    iban: IBAN
    accountName: string
    currency: string
    openedOn: Date
    closedOn: Date
    Bank: Schema.Types.ObjectId
    Branch: Schema.Types.ObjectId
    Product: Schema.Types.ObjectId
    Owners:  [{ type: Schema.Types.ObjectId, ref: 'Customer' }]
    Transactions:  [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
    Statements:  [{ type: Schema.Types.ObjectId, ref: 'AccountStatement' }]
    StandingInstructions:  [{ type: Schema.Types.ObjectId, ref: 'StandingInstruction' }]
    FeeCharges:  [{ type: Schema.Types.ObjectId, ref: 'FeeCharge' }]
    AccountType:  String
    OwnershipType:  String
    Status:  String
    collection: 'accounts'
}

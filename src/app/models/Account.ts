

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
    Owners:  Schema.Types.ObjectId[]
    Transactions:  Schema.Types.ObjectId[]
    Statements:  Schema.Types.ObjectId[]
    StandingInstructions:  Schema.Types.ObjectId[]
    FeeCharges:  Schema.Types.ObjectId[]
    AccountType:  String
    OwnershipType:  String
    Status:  String
    collection: 'accounts'
}

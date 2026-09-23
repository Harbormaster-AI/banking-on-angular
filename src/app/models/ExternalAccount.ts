

// Define collection and schema for ExternalAccount
export  ExternalAccount {
    name: string
    iban: IBAN
    accountNumber: AccountNumber
    bic: BIC
    bankName: string
    country: string
    Customer: Schema.Types.ObjectId
    Transactions:  [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
    collection: 'externalAccounts'
}



// Define collection and schema for ExternalAccount
export interface ExternalAccount {
    name: string
    iban: IBAN
    accountNumber: AccountNumber
    bic: BIC
    bankName: string
    country: string
    Customer: Schema.Types.ObjectId
    Transactions:  Schema.Types.ObjectId[]
    collection: 'externalAccounts'
}

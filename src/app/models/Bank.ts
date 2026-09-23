

// Define collection and schema for Bank
export interface Bank {
    name: string
    legalName: string
    swiftBic: BIC
    headquartersCountry: string
    website: string
    Branches:  Schema.Types.ObjectId[]
    Products:  Schema.Types.ObjectId[]
    Customers:  Schema.Types.ObjectId[]
    Accounts:  Schema.Types.ObjectId[]
    PaymentCards:  Schema.Types.ObjectId[]
    LoanAccounts:  Schema.Types.ObjectId[]
    ExchangeRates:  Schema.Types.ObjectId[]
    Consents:  Schema.Types.ObjectId[]
    ThirdPartyProviders:  Schema.Types.ObjectId[]
    collection: 'banks'
}



// Define collection and schema for Bank
export  Bank {
    name: string
    legalName: string
    swiftBic: BIC
    headquartersCountry: string
    website: string
    Branches:  [{ type: Schema.Types.ObjectId, ref: 'Branch' }]
    Products:  [{ type: Schema.Types.ObjectId, ref: 'BankingProduct' }]
    Customers:  [{ type: Schema.Types.ObjectId, ref: 'Customer' }]
    Accounts:  [{ type: Schema.Types.ObjectId, ref: 'Account' }]
    PaymentCards:  [{ type: Schema.Types.ObjectId, ref: 'PaymentCard' }]
    LoanAccounts:  [{ type: Schema.Types.ObjectId, ref: 'LoanAccount' }]
    ExchangeRates:  [{ type: Schema.Types.ObjectId, ref: 'ExchangeRate' }]
    Consents:  [{ type: Schema.Types.ObjectId, ref: 'Consent' }]
    ThirdPartyProviders:  [{ type: Schema.Types.ObjectId, ref: 'ThirdPartyProvider' }]
#
    collection: 'banks'
}


// Define collection and schema for Bank
export interface Bank {
    name:
	type : string
    legalName:
	type : string
    swiftBic:
	type : BIC
    headquartersCountry:
	type : string
    website:
	type : string
    Branches:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Branch' }]
    Products:
 	type : [{ type: Schema.Types.ObjectId, ref: 'BankingProduct' }]
    Customers:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Customer' }]
    Accounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Account' }]
    PaymentCards:
 	type : [{ type: Schema.Types.ObjectId, ref: 'PaymentCard' }]
    LoanAccounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'LoanAccount' }]
    ExchangeRates:
 	type : [{ type: Schema.Types.ObjectId, ref: 'ExchangeRate' }]
    Consents:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Consent' }]
    ThirdPartyProviders:
 	type : [{ type: Schema.Types.ObjectId, ref: 'ThirdPartyProvider' }]
#
    collection: 'banks'
}

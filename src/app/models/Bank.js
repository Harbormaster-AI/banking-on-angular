
// Define collection and schema for Bank
export interface Bank {
    name:
	type : String
    legalName:
	type : String
    swiftBic:
	type : BIC
    headquartersCountry:
	type : String
    website:
	type : String
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

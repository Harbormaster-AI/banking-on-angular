
// Define collection and schema for ExternalAccount
export interface ExternalAccount {
    name:
	type : String
    iban:
	type : IBAN
    accountNumber:
	type : AccountNumber
    bic:
	type : BIC
    bankName:
	type : String
    country:
	type : String
    Customer:
	type : Schema.Types.ObjectId
    Transactions:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
#
    collection: 'externalAccounts'
}

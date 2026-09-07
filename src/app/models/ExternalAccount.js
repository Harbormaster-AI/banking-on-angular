
// Define collection and schema for ExternalAccount
export interface ExternalAccount {
    name:
	type : string
    iban:
	type : IBAN
    accountNumber:
	type : AccountNumber
    bic:
	type : BIC
    bankName:
	type : string
    country:
	type : string
    Customer:
	type : Schema.Types.ObjectId
    Transactions:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
#
    collection: 'externalAccounts'
}

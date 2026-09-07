
// Define collection and schema for BankingProduct
export interface BankingProduct {
    productCode:
	type : string
    name:
	type : string
    description:
	type : string
    Bank:
	type : Schema.Types.ObjectId
    Accounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Account' }]
    LoanAccounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'LoanAccount' }]
    PaymentCards:
 	type : [{ type: Schema.Types.ObjectId, ref: 'PaymentCard' }]
    ProductCategory:
 	type : String
#
    collection: 'bankingProducts'
}

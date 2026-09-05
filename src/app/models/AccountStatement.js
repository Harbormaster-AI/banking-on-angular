
// Define collection and schema for AccountStatement
export interface AccountStatement {
    statementNumber:
	type : String
    periodStart:
	type : Date
    periodEnd:
	type : Date
    openingBalance:
	type : Money
    closingBalance:
	type : Money
    Account:
	type : Schema.Types.ObjectId
    DeliveryMethod:
 	type : String
#
    collection: 'accountStatements'
}

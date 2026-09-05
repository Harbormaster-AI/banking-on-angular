
// Define collection and schema for LoanPayment
export interface LoanPayment {
    paymentReference:
	type : String
    amount:
	type : Money
    paymentDate:
	type : Date
    LoanAccount:
	type : Schema.Types.ObjectId
    Transaction:
	type : Schema.Types.ObjectId
    Method:
 	type : String
    Status:
 	type : String
#
    collection: 'loanPayments'
}

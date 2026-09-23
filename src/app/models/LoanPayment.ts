

// Define collection and schema for LoanPayment
export interface LoanPayment {
    paymentReference: string
    amount: Money
    paymentDate: Date
    LoanAccount: Schema.Types.ObjectId
    Transaction: Schema.Types.ObjectId
    Method:  String
    Status:  String
    collection: 'loanPayments'
}

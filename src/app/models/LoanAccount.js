
// Define collection and schema for LoanAccount
export interface LoanAccount {
    loanNumber:
	type : string
    principalAmount:
	type : Money
    outstandingPrincipal:
	type : Money
    interestRate:
	type : Percentage
    originationDate:
	type : Date
    maturityDate:
	type : Date
    paymentDayOfMonth:
	type : number
    currency:
	type : string
    Bank:
	type : Schema.Types.ObjectId
    Branch:
	type : Schema.Types.ObjectId
    Product:
	type : Schema.Types.ObjectId
    Borrowers:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Customer' }]
    RepaymentSchedule:
 	type : [{ type: Schema.Types.ObjectId, ref: 'RepaymentSchedule' }]
    Payments:
 	type : [{ type: Schema.Types.ObjectId, ref: 'LoanPayment' }]
    Collateral:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Collateral' }]
    FeeCharges:
 	type : [{ type: Schema.Types.ObjectId, ref: 'FeeCharge' }]
    LoanType:
 	type : String
    RateType:
 	type : String
    Compounding:
 	type : String
    Status:
 	type : String
#
    collection: 'loanAccounts'
}

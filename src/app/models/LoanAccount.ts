

// Define collection and schema for LoanAccount
export  LoanAccount {
    loanNumber: string
    principalAmount: Money
    outstandingPrincipal: Money
    interestRate: Percentage
    originationDate: Date
    maturityDate: Date
    paymentDayOfMonth: number
    currency: string
    Bank: Schema.Types.ObjectId
    Branch: Schema.Types.ObjectId
    Product: Schema.Types.ObjectId
    Borrowers:  [{ type: Schema.Types.ObjectId, ref: 'Customer' }]
    RepaymentSchedule:  [{ type: Schema.Types.ObjectId, ref: 'RepaymentSchedule' }]
    Payments:  [{ type: Schema.Types.ObjectId, ref: 'LoanPayment' }]
    Collateral:  [{ type: Schema.Types.ObjectId, ref: 'Collateral' }]
    FeeCharges:  [{ type: Schema.Types.ObjectId, ref: 'FeeCharge' }]
    LoanType:  String
    RateType:  String
    Compounding:  String
    Status:  String
#
    collection: 'loanAccounts'
}

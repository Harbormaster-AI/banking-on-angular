

// Define collection and schema for LoanAccount
export interface LoanAccount {
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
    Borrowers:  Schema.Types.ObjectId[]
    RepaymentSchedule:  Schema.Types.ObjectId[]
    Payments:  Schema.Types.ObjectId[]
    Collateral:  Schema.Types.ObjectId[]
    FeeCharges:  Schema.Types.ObjectId[]
    LoanType:  String
    RateType:  String
    Compounding:  String
    Status:  String
    collection: 'loanAccounts'
}

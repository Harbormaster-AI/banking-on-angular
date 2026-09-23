

// Define collection and schema for FeeCharge
export  FeeCharge {
    feeCode: string
    amount: Money
    appliedOn: Date
    Account: Schema.Types.ObjectId
    LoanAccount: Schema.Types.ObjectId
    FeeType:  String
#
    collection: 'feeCharges'
}

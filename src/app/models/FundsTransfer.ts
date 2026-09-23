

// Define collection and schema for FundsTransfer
export  FundsTransfer {
    transferReference: string
    amount: Money
    requestedDate: Date
    executionDate: Date
    purpose: string
    feeAmount: Money
    SourceAccount: Schema.Types.ObjectId
    DestinationAccount: Schema.Types.ObjectId
    ExternalBeneficiary: Schema.Types.ObjectId
    InitiatedBy: Schema.Types.ObjectId
    Transactions:  Schema.Types.ObjectId[]
    Method:  String
    Status:  String
    collection: 'fundsTransfers'
}

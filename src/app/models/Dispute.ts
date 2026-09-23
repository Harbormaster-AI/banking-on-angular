

// Define collection and schema for Dispute
export  Dispute {
    disputeReference: string
    raisedOn: Date
    reason: string
    Transaction: Schema.Types.ObjectId
    Customer: Schema.Types.ObjectId
    Account: Schema.Types.ObjectId
    PaymentCard: Schema.Types.ObjectId
    Status:  String
#
    collection: 'disputes'
}

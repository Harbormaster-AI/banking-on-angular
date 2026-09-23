

// Define collection and schema for Transaction
export interface Transaction {
    bookingDate: Date
    valueDate: Date
    amount: Money
    description: string
    Account: Schema.Types.ObjectId
    ExternalCounterparty: Schema.Types.ObjectId
    PaymentCard: Schema.Types.ObjectId
    FundsTransfer: Schema.Types.ObjectId
    FxTrade: Schema.Types.ObjectId
    Dispute: Schema.Types.ObjectId
    Direction:  String
    TransactionType:  String
    Status:  String
    Channel:  String
    collection: 'transactions'
}

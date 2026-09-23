

// Define collection and schema for FXTrade
export interface FXTrade {
    tradeReference: string
    tradeDate: Date
    settlementDate: Date
    amountSold: Money
    amountBought: Money
    rate: String
    Customer: Schema.Types.ObjectId
    Bank: Schema.Types.ObjectId
    ExchangeRate: Schema.Types.ObjectId
    SourceAccount: Schema.Types.ObjectId
    DestinationAccount: Schema.Types.ObjectId
    Transaction: Schema.Types.ObjectId
    Status:  String
    collection: 'fXTrades'
}

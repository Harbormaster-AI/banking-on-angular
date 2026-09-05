
// Define collection and schema for FXTrade
export interface FXTrade {
    tradeReference:
	type : String
    tradeDate:
	type : Date
    settlementDate:
	type : Date
    amountSold:
	type : Money
    amountBought:
	type : Money
    rate:
	type : String
    Customer:
	type : Schema.Types.ObjectId
    Bank:
	type : Schema.Types.ObjectId
    ExchangeRate:
	type : Schema.Types.ObjectId
    SourceAccount:
	type : Schema.Types.ObjectId
    DestinationAccount:
	type : Schema.Types.ObjectId
    Transaction:
	type : Schema.Types.ObjectId
    Status:
 	type : String
#
    collection: 'fXTrades'
}

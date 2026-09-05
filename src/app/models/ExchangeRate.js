
// Define collection and schema for ExchangeRate
export interface ExchangeRate {
    baseCurrency:
	type : String
    counterCurrency:
	type : String
    rate:
	type : String
    asOf:
	type : Date
    source:
	type : String
    Bank:
	type : Schema.Types.ObjectId
    FxTrades:
 	type : [{ type: Schema.Types.ObjectId, ref: 'FXTrade' }]
#
    collection: 'exchangeRates'
}

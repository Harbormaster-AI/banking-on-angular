
// Define collection and schema for ExchangeRate
export interface ExchangeRate {
    baseCurrency:
	type : string
    counterCurrency:
	type : string
    rate:
	type : String
    asOf:
	type : Date
    source:
	type : string
    Bank:
	type : Schema.Types.ObjectId
    FxTrades:
 	type : [{ type: Schema.Types.ObjectId, ref: 'FXTrade' }]
#
    collection: 'exchangeRates'
}

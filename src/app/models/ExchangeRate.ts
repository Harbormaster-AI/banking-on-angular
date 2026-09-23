

// Define collection and schema for ExchangeRate
export  ExchangeRate {
    baseCurrency: string
    counterCurrency: string
    rate: String
    asOf: Date
    source: string
    Bank: Schema.Types.ObjectId
    FxTrades:  [{ type: Schema.Types.ObjectId, ref: 'FXTrade' }]
    collection: 'exchangeRates'
}

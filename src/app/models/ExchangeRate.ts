

// Define collection and schema for ExchangeRate
export interface ExchangeRate {
    baseCurrency: string
    counterCurrency: string
    rate: String
    asOf: Date
    source: string
    Bank: Schema.Types.ObjectId
    FxTrades:  Schema.Types.ObjectId[]
    collection: 'exchangeRates'
}

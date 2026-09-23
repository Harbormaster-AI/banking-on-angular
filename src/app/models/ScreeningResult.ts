

// Define collection and schema for ScreeningResult
export interface ScreeningResult {
    screeningDate: Date
    provider: string
    KycProfile: Schema.Types.ObjectId
    Outcome:  String
    collection: 'screeningResults'
}

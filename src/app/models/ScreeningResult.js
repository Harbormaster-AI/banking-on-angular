
// Define collection and schema for ScreeningResult
export interface ScreeningResult {
    screeningDate:
	type : Date
    provider:
	type : String
    KycProfile:
	type : Schema.Types.ObjectId
    Outcome:
 	type : String
#
    collection: 'screeningResults'
}

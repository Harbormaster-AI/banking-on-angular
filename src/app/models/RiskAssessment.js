
// Define collection and schema for RiskAssessment
export interface RiskAssessment {
    score:
	type : number
    assessedOn:
	type : Date
    KycProfile:
	type : Schema.Types.ObjectId
    Rating:
 	type : String
#
    collection: 'riskAssessments'
}


// Define collection and schema for KycProfile
export interface KycProfile {
    profileId:
	type : String
    lastReviewedOn:
	type : Date
    Customer:
	type : Schema.Types.ObjectId
    IdentityDocuments:
 	type : [{ type: Schema.Types.ObjectId, ref: 'IdentityDocument' }]
    RiskAssessments:
 	type : [{ type: Schema.Types.ObjectId, ref: 'RiskAssessment' }]
    Screenings:
 	type : [{ type: Schema.Types.ObjectId, ref: 'ScreeningResult' }]
    Status:
 	type : String
#
    collection: 'kycProfiles'
}

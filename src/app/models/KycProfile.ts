

// Define collection and schema for KycProfile
export  KycProfile {
    profileId: string
    lastReviewedOn: Date
    Customer: Schema.Types.ObjectId
    IdentityDocuments:  [{ type: Schema.Types.ObjectId, ref: 'IdentityDocument' }]
    RiskAssessments:  [{ type: Schema.Types.ObjectId, ref: 'RiskAssessment' }]
    Screenings:  [{ type: Schema.Types.ObjectId, ref: 'ScreeningResult' }]
    Status:  String
#
    collection: 'kycProfiles'
}

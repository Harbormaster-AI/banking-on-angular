

// Define collection and schema for KycProfile
export  KycProfile {
    profileId: string
    lastReviewedOn: Date
    Customer: Schema.Types.ObjectId
    IdentityDocuments:  Schema.Types.ObjectId[]
    RiskAssessments:  Schema.Types.ObjectId[]
    Screenings:  Schema.Types.ObjectId[]
    Status:  String
    collection: 'kycProfiles'
}

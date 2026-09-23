

// Define collection and schema for RiskAssessment
export interface RiskAssessment {
    score: number
    assessedOn: Date
    KycProfile: Schema.Types.ObjectId
    Rating:  String
    collection: 'riskAssessments'
}

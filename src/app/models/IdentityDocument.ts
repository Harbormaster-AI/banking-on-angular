

// Define collection and schema for IdentityDocument
export  IdentityDocument {
    documentNumber: string
    issuingCountry: string
    expirationDate: Date
    KycProfile: Schema.Types.ObjectId
    DocumentType:  String
#
    collection: 'identityDocuments'
}

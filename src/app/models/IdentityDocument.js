
// Define collection and schema for IdentityDocument
export interface IdentityDocument {
    documentNumber:
	type : string
    issuingCountry:
	type : string
    expirationDate:
	type : Date
    KycProfile:
	type : Schema.Types.ObjectId
    DocumentType:
 	type : String
#
    collection: 'identityDocuments'
}

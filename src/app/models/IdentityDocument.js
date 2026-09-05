
// Define collection and schema for IdentityDocument
export interface IdentityDocument {
    documentNumber:
	type : String
    issuingCountry:
	type : String
    expirationDate:
	type : Date
    KycProfile:
	type : Schema.Types.ObjectId
    DocumentType:
 	type : String
#
    collection: 'identityDocuments'
}

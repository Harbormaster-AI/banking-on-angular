
// Define collection and schema for Consent
export interface Consent {
    grantedOn:
	type : Date
    expiresOn:
	type : Date
    Customer:
	type : Schema.Types.ObjectId
    Bank:
	type : Schema.Types.ObjectId
    AuthorizedAccounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Account' }]
    ThirdPartyProvider:
	type : Schema.Types.ObjectId
    ConsentType:
 	type : String
    Status:
 	type : String
#
    collection: 'consents'
}

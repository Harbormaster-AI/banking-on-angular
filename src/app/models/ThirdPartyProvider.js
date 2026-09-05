
// Define collection and schema for ThirdPartyProvider
export interface ThirdPartyProvider {
    name:
	type : String
    registrationId:
	type : String
    website:
	type : String
    Bank:
	type : Schema.Types.ObjectId
    Consents:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Consent' }]
#
    collection: 'thirdPartyProviders'
}

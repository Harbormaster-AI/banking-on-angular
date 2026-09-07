
// Define collection and schema for ThirdPartyProvider
export interface ThirdPartyProvider {
    name:
	type : string
    registrationId:
	type : string
    website:
	type : string
    Bank:
	type : Schema.Types.ObjectId
    Consents:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Consent' }]
#
    collection: 'thirdPartyProviders'
}

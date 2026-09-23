

// Define collection and schema for ThirdPartyProvider
export  ThirdPartyProvider {
    name: string
    registrationId: string
    website: string
    Bank: Schema.Types.ObjectId
    Consents:  [{ type: Schema.Types.ObjectId, ref: 'Consent' }]
    collection: 'thirdPartyProviders'
}

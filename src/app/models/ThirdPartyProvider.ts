

// Define collection and schema for ThirdPartyProvider
export interface ThirdPartyProvider {
    name: string
    registrationId: string
    website: string
    Bank: Schema.Types.ObjectId
    Consents:  Schema.Types.ObjectId[]
    collection: 'thirdPartyProviders'
}

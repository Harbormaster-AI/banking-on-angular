

// Define collection and schema for Consent
export  Consent {
    grantedOn: Date
    expiresOn: Date
    Customer: Schema.Types.ObjectId
    Bank: Schema.Types.ObjectId
    AuthorizedAccounts:  [{ type: Schema.Types.ObjectId, ref: 'Account' }]
    ThirdPartyProvider: Schema.Types.ObjectId
    ConsentType:  String
    Status:  String
    collection: 'consents'
}

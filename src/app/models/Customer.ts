

// Define collection and schema for Customer
export  Customer {
    firstName: string
    lastName: string
    legalName: string
    dateOfBirth: Date
    taxId: string
    email: string
    phone: string
    address: Address
    Bank: Schema.Types.ObjectId
    Accounts:  [{ type: Schema.Types.ObjectId, ref: 'Account' }]
    LoanAccounts:  [{ type: Schema.Types.ObjectId, ref: 'LoanAccount' }]
    PaymentCards:  [{ type: Schema.Types.ObjectId, ref: 'PaymentCard' }]
    ExternalAccounts:  [{ type: Schema.Types.ObjectId, ref: 'ExternalAccount' }]
    FundsTransfers:  [{ type: Schema.Types.ObjectId, ref: 'FundsTransfer' }]
    Disputes:  [{ type: Schema.Types.ObjectId, ref: 'Dispute' }]
    KycProfiles:  [{ type: Schema.Types.ObjectId, ref: 'KycProfile' }]
    Consents:  [{ type: Schema.Types.ObjectId, ref: 'Consent' }]
    CustomerType:  String
    RiskRating:  String
    KycStatus:  String
#
    collection: 'customers'
}

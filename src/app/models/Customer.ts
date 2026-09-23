

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
    Accounts:  Schema.Types.ObjectId[]
    LoanAccounts:  Schema.Types.ObjectId[]
    PaymentCards:  Schema.Types.ObjectId[]
    ExternalAccounts:  Schema.Types.ObjectId[]
    FundsTransfers:  Schema.Types.ObjectId[]
    Disputes:  Schema.Types.ObjectId[]
    KycProfiles:  Schema.Types.ObjectId[]
    Consents:  Schema.Types.ObjectId[]
    CustomerType:  String
    RiskRating:  String
    KycStatus:  String
    collection: 'customers'
}

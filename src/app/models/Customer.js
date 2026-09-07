
// Define collection and schema for Customer
export interface Customer {
    firstName:
	type : string
    lastName:
	type : string
    legalName:
	type : string
    dateOfBirth:
	type : Date
    taxId:
	type : string
    email:
	type : string
    phone:
	type : string
    address:
	type : Address
    Bank:
	type : Schema.Types.ObjectId
    Accounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Account' }]
    LoanAccounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'LoanAccount' }]
    PaymentCards:
 	type : [{ type: Schema.Types.ObjectId, ref: 'PaymentCard' }]
    ExternalAccounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'ExternalAccount' }]
    FundsTransfers:
 	type : [{ type: Schema.Types.ObjectId, ref: 'FundsTransfer' }]
    Disputes:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Dispute' }]
    KycProfiles:
 	type : [{ type: Schema.Types.ObjectId, ref: 'KycProfile' }]
    Consents:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Consent' }]
    CustomerType:
 	type : String
    RiskRating:
 	type : String
    KycStatus:
 	type : String
#
    collection: 'customers'
}

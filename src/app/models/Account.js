
// Define collection and schema for Account
export interface Account {
    accountNumber:
	type : AccountNumber
    iban:
	type : IBAN
    accountName:
	type : String
    currency:
	type : String
    openedOn:
	type : Date
    closedOn:
	type : Date
    Bank:
	type : Schema.Types.ObjectId
    Branch:
	type : Schema.Types.ObjectId
    Product:
	type : Schema.Types.ObjectId
    Owners:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Customer' }]
    Transactions:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
    Statements:
 	type : [{ type: Schema.Types.ObjectId, ref: 'AccountStatement' }]
    StandingInstructions:
 	type : [{ type: Schema.Types.ObjectId, ref: 'StandingInstruction' }]
    FeeCharges:
 	type : [{ type: Schema.Types.ObjectId, ref: 'FeeCharge' }]
    AccountType:
 	type : String
    OwnershipType:
 	type : String
    Status:
 	type : String
#
    collection: 'accounts'
}

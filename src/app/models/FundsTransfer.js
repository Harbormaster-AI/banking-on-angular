
// Define collection and schema for FundsTransfer
export interface FundsTransfer {
    transferReference:
	type : String
    amount:
	type : Money
    requestedDate:
	type : Date
    executionDate:
	type : Date
    purpose:
	type : String
    feeAmount:
	type : Money
    SourceAccount:
	type : Schema.Types.ObjectId
    DestinationAccount:
	type : Schema.Types.ObjectId
    ExternalBeneficiary:
	type : Schema.Types.ObjectId
    InitiatedBy:
	type : Schema.Types.ObjectId
    Transactions:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
    Method:
 	type : String
    Status:
 	type : String
#
    collection: 'fundsTransfers'
}


// Define collection and schema for Dispute
export interface Dispute {
    disputeReference:
	type : string
    raisedOn:
	type : Date
    reason:
	type : string
    Transaction:
	type : Schema.Types.ObjectId
    Customer:
	type : Schema.Types.ObjectId
    Account:
	type : Schema.Types.ObjectId
    PaymentCard:
	type : Schema.Types.ObjectId
    Status:
 	type : String
#
    collection: 'disputes'
}


// Define collection and schema for Dispute
export interface Dispute {
    disputeReference:
	type : String
    raisedOn:
	type : Date
    reason:
	type : String
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

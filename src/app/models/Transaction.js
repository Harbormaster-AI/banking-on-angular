
// Define collection and schema for Transaction
export interface Transaction {
    bookingDate:
	type : Date
    valueDate:
	type : Date
    amount:
	type : Money
    description:
	type : String
    Account:
	type : Schema.Types.ObjectId
    ExternalCounterparty:
	type : Schema.Types.ObjectId
    PaymentCard:
	type : Schema.Types.ObjectId
    FundsTransfer:
	type : Schema.Types.ObjectId
    FxTrade:
	type : Schema.Types.ObjectId
    Dispute:
	type : Schema.Types.ObjectId
    Direction:
 	type : String
    TransactionType:
 	type : String
    Status:
 	type : String
    Channel:
 	type : String
#
    collection: 'transactions'
}

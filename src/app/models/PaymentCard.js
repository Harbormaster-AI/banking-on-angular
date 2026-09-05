
// Define collection and schema for PaymentCard
export interface PaymentCard {
    cardNumber:
	type : CardPAN
    embossedName:
	type : String
    expiryMonth:
	type : Number
    expiryYear:
	type : Number
    Bank:
	type : Schema.Types.ObjectId
    Account:
	type : Schema.Types.ObjectId
    Customer:
	type : Schema.Types.ObjectId
    Transactions:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
    CardType:
 	type : String
    CardStatus:
 	type : String
    Network:
 	type : String
#
    collection: 'paymentCards'
}


// Define collection and schema for PaymentCard
export interface PaymentCard {
    cardNumber:
	type : CardPAN
    embossedName:
	type : string
    expiryMonth:
	type : number
    expiryYear:
	type : number
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

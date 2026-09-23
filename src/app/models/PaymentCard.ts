

// Define collection and schema for PaymentCard
export  PaymentCard {
    cardNumber: CardPAN
    embossedName: string
    expiryMonth: number
    expiryYear: number
    Bank: Schema.Types.ObjectId
    Account: Schema.Types.ObjectId
    Customer: Schema.Types.ObjectId
    Transactions:  Schema.Types.ObjectId[]
    CardType:  String
    CardStatus:  String
    Network:  String
    collection: 'paymentCards'
}



// Define collection and schema for BankingProduct
export  BankingProduct {
    productCode: string
    name: string
    description: string
    Bank: Schema.Types.ObjectId
    Accounts:  [{ type: Schema.Types.ObjectId, ref: 'Account' }]
    LoanAccounts:  [{ type: Schema.Types.ObjectId, ref: 'LoanAccount' }]
    PaymentCards:  [{ type: Schema.Types.ObjectId, ref: 'PaymentCard' }]
    ProductCategory:  String
#
    collection: 'bankingProducts'
}

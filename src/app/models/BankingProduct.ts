

// Define collection and schema for BankingProduct
export  BankingProduct {
    productCode: string
    name: string
    description: string
    Bank: Schema.Types.ObjectId
    Accounts:  Schema.Types.ObjectId[]
    LoanAccounts:  Schema.Types.ObjectId[]
    PaymentCards:  Schema.Types.ObjectId[]
    ProductCategory:  String
    collection: 'bankingProducts'
}

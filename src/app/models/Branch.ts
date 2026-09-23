

// Define collection and schema for Branch
export interface Branch {
    name: string
    branchCode: string
    address: Address
    phone: string
    openingHours: string
    Bank: Schema.Types.ObjectId
    Accounts:  Schema.Types.ObjectId[]
    LoanAccounts:  Schema.Types.ObjectId[]
    Atms:  Schema.Types.ObjectId[]
    collection: 'branchs'
}



// Define collection and schema for Branch
export  Branch {
    name: string
    branchCode: string
    address: Address
    phone: string
    openingHours: string
    Bank: Schema.Types.ObjectId
    Accounts:  [{ type: Schema.Types.ObjectId, ref: 'Account' }]
    LoanAccounts:  [{ type: Schema.Types.ObjectId, ref: 'LoanAccount' }]
    Atms:  [{ type: Schema.Types.ObjectId, ref: 'ATM' }]
#
    collection: 'branchs'
}

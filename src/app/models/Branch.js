
// Define collection and schema for Branch
export interface Branch {
    name:
	type : string
    branchCode:
	type : string
    address:
	type : Address
    phone:
	type : string
    openingHours:
	type : string
    Bank:
	type : Schema.Types.ObjectId
    Accounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Account' }]
    LoanAccounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'LoanAccount' }]
    Atms:
 	type : [{ type: Schema.Types.ObjectId, ref: 'ATM' }]
#
    collection: 'branchs'
}

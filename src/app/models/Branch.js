
// Define collection and schema for Branch
export interface Branch {
    name:
	type : String
    branchCode:
	type : String
    address:
	type : Address
    phone:
	type : String
    openingHours:
	type : String
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

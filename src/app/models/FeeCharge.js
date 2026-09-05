
// Define collection and schema for FeeCharge
export interface FeeCharge {
    feeCode:
	type : String
    amount:
	type : Money
    appliedOn:
	type : Date
    Account:
	type : Schema.Types.ObjectId
    LoanAccount:
	type : Schema.Types.ObjectId
    FeeType:
 	type : String
#
    collection: 'feeCharges'
}

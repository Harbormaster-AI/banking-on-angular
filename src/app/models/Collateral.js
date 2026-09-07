
// Define collection and schema for Collateral
export interface Collateral {
    appraisedValue:
	type : Money
    description:
	type : string
    location:
	type : Address
    LoanAccount:
	type : Schema.Types.ObjectId
    CollateralType:
 	type : String
#
    collection: 'collaterals'
}



// Define collection and schema for Collateral
export interface Collateral {
    collateralIdentifier:
	type : string
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

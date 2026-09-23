

// Define collection and schema for Collateral
export interface Collateral {
    collateralIdentifier: string
    appraisedValue: Money
    description: string
    location: Address
    LoanAccount: Schema.Types.ObjectId
    CollateralType:  String
    collection: 'collaterals'
}

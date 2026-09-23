

// Define collection and schema for ATM
export interface ATM {
    terminalId: string
    location: Address
    Branch: Schema.Types.ObjectId
    Status:  String
    collection: 'aTMs'
}

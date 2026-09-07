
// Define collection and schema for ATM
export interface ATM {
    terminalId:
	type : string
    location:
	type : Address
    Branch:
	type : Schema.Types.ObjectId
    Status:
 	type : String
#
    collection: 'aTMs'
}

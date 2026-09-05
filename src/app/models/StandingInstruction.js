
// Define collection and schema for StandingInstruction
export interface StandingInstruction {
    instructionId:
	type : String
    amount:
	type : Money
    nextExecutionDate:
	type : Date
    Account:
	type : Schema.Types.ObjectId
    Beneficiary:
	type : Schema.Types.ObjectId
    Frequency:
 	type : String
    Status:
 	type : String
#
    collection: 'standingInstructions'
}

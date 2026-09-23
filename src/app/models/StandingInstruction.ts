

// Define collection and schema for StandingInstruction
export  StandingInstruction {
    instructionId: string
    amount: Money
    nextExecutionDate: Date
    Account: Schema.Types.ObjectId
    Beneficiary: Schema.Types.ObjectId
    Frequency:  String
    Status:  String
    collection: 'standingInstructions'
}

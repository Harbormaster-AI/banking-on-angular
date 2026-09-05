
// Define collection and schema for RepaymentSchedule
export interface RepaymentSchedule {
    installmentNumber:
	type : Number
    dueDate:
	type : Date
    principalDue:
	type : Money
    interestDue:
	type : Money
    totalDue:
	type : Money
    LoanAccount:
	type : Schema.Types.ObjectId
    Payment:
	type : Schema.Types.ObjectId
    Status:
 	type : String
#
    collection: 'repaymentSchedules'
}

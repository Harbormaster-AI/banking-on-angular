

// Define collection and schema for RepaymentSchedule
export interface RepaymentSchedule {
    installmentNumber: number
    dueDate: Date
    principalDue: Money
    interestDue: Money
    totalDue: Money
    LoanAccount: Schema.Types.ObjectId
    Payment: Schema.Types.ObjectId
    Status:  String
    collection: 'repaymentSchedules'
}

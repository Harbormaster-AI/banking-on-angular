
// enum type CustomerType
export const CustomerType = {
	Individual:"Individual",
	Business:"Business",
	NonProfit:"NonProfit",
	Government:"Government",
}

// enum type AccountType
export const AccountType = {
	Checking:"Checking",
	Savings:"Savings",
	MoneyMarket:"MoneyMarket",
	TimeDeposit:"TimeDeposit",
}

// enum type AccountStatus
export const AccountStatus = {
	Open:"Open",
	Frozen:"Frozen",
	Dormant:"Dormant",
	Closed:"Closed",
}

// enum type AccountOwnershipType
export const AccountOwnershipType = {
	Sole:"Sole",
	Joint:"Joint",
	Corporate:"Corporate",
	Trust:"Trust",
}

// enum type StatementDeliveryMethod
export const StatementDeliveryMethod = {
	Electronic:"Electronic",
	Paper:"Paper",
}

// enum type TransactionType
export const TransactionType = {
	Deposit:"Deposit",
	Withdrawal:"Withdrawal",
	Transfer:"Transfer",
	Payment:"Payment",
	Fee:"Fee",
	Interest:"Interest",
	Adjustment:"Adjustment",
	Chargeback:"Chargeback",
	Refund:"Refund",
	FXConversion:"FXConversion",
}

// enum type TransactionStatus
export const TransactionStatus = {
	Pending:"Pending",
	Posted:"Posted",
	Reversed:"Reversed",
	Failed:"Failed",
	Cancelled:"Cancelled",
}

// enum type TransactionDirection
export const TransactionDirection = {
	Credit:"Credit",
	Debit:"Debit",
}

// enum type ChannelType
export const ChannelType = {
	Branch:"Branch",
	Online:"Online",
	Mobile:"Mobile",
	ATM:"ATM",
	API:"API",
	CallCenter:"CallCenter",
}

// enum type PaymentMethod
export const PaymentMethod = {
	InternalTransfer:"InternalTransfer",
	ACH:"ACH",
	Wire:"Wire",
	SEPA:"SEPA",
	SWIFT:"SWIFT",
	Card:"Card",
	Cash:"Cash",
	Check:"Check",
	MobileWallet:"MobileWallet",
}

// enum type PaymentStatus
export const PaymentStatus = {
	Initiated:"Initiated",
	InProcess:"InProcess",
	Settled:"Settled",
	Failed:"Failed",
	Reversed:"Reversed",
	Cancelled:"Cancelled",
}

// enum type StandingInstructionFrequency
export const StandingInstructionFrequency = {
	OneTime:"OneTime",
	Weekly:"Weekly",
	BiWeekly:"BiWeekly",
	Monthly:"Monthly",
	Quarterly:"Quarterly",
	Annually:"Annually",
}

// enum type StandingInstructionStatus
export const StandingInstructionStatus = {
	Active:"Active",
	Paused:"Paused",
	Cancelled:"Cancelled",
	Completed:"Completed",
}

// enum type CardType
export const CardType = {
	Debit:"Debit",
	Credit:"Credit",
	Prepaid:"Prepaid",
	Virtual:"Virtual",
}

// enum type CardStatus
export const CardStatus = {
	Active:"Active",
	Blocked:"Blocked",
	LostStolen:"LostStolen",
	Expired:"Expired",
	Closed:"Closed",
}

// enum type CardNetwork
export const CardNetwork = {
	Visa:"Visa",
	Mastercard:"Mastercard",
	Amex:"Amex",
	Discover:"Discover",
	UnionPay:"UnionPay",
	Other:"Other",
}

// enum type LoanType
export const LoanType = {
	Mortgage:"Mortgage",
	Personal:"Personal",
	Auto:"Auto",
	SmallBusiness:"SmallBusiness",
	CreditLine:"CreditLine",
	Student:"Student",
}

// enum type LoanStatus
export const LoanStatus = {
	Applied:"Applied",
	Approved:"Approved",
	Active:"Active",
	Delinquent:"Delinquent",
	Defaulted:"Defaulted",
	Closed:"Closed",
}

// enum type RateType
export const RateType = {
	Fixed:"Fixed",
	Variable:"Variable",
}

// enum type InterestCompounding
export const InterestCompounding = {
	Daily:"Daily",
	Monthly:"Monthly",
	Quarterly:"Quarterly",
	Annually:"Annually",
}

// enum type InstallmentStatus
export const InstallmentStatus = {
	Due:"Due",
	Paid:"Paid",
	Overdue:"Overdue",
	Deferred:"Deferred",
}

// enum type FeeType
export const FeeType = {
	Maintenance:"Maintenance",
	Overdraft:"Overdraft",
	Wire:"Wire",
	ATM:"ATM",
	CardAnnual:"CardAnnual",
	LatePayment:"LatePayment",
	EarlyWithdrawal:"EarlyWithdrawal",
	ReplacementCard:"ReplacementCard",
}

// enum type RiskRating
export const RiskRating = {
	Low:"Low",
	Medium:"Medium",
	High:"High",
}

// enum type KycStatus
export const KycStatus = {
	Pending:"Pending",
	Verified:"Verified",
	Rejected:"Rejected",
	Expired:"Expired",
}

// enum type IdentityDocumentType
export const IdentityDocumentType = {
	Passport:"Passport",
	NationalID:"NationalID",
	DriverLicense:"DriverLicense",
	ResidencePermit:"ResidencePermit",
	BusinessRegistration:"BusinessRegistration",
	TaxCertificate:"TaxCertificate",
}

// enum type ScreeningOutcome
export const ScreeningOutcome = {
	Clear:"Clear",
	Match:"Match",
	Review:"Review",
}

// enum type TradeStatus
export const TradeStatus = {
	Booked:"Booked",
	Settled:"Settled",
	Cancelled:"Cancelled",
}

// enum type ATMStatus
export const ATMStatus = {
	InService:"InService",
	OutOfService:"OutOfService",
	Maintenance:"Maintenance",
}

// enum type ConsentType
export const ConsentType = {
	OpenBanking:"OpenBanking",
	PaymentInitiation:"PaymentInitiation",
	AccountInformation:"AccountInformation",
	Marketing:"Marketing",
	DataSharing:"DataSharing",
}

// enum type ConsentStatus
export const ConsentStatus = {
	Active:"Active",
	Revoked:"Revoked",
	Expired:"Expired",
}

// enum type DisputeStatus
export const DisputeStatus = {
	Open:"Open",
	UnderReview:"UnderReview",
	Resolved:"Resolved",
	Rejected:"Rejected",
	Withdrawn:"Withdrawn",
}

// enum type ProductCategory
export const ProductCategory = {
	Deposit:"Deposit",
	Loan:"Loan",
	Card:"Card",
	PaymentService:"PaymentService",
	Investment:"Investment",
}

// enum type CollateralType
export const CollateralType = {
	RealEstate:"RealEstate",
	Vehicle:"Vehicle",
	Cash:"Cash",
	Securities:"Securities",
	Guarantee:"Guarantee",
	Equipment:"Equipment",
}

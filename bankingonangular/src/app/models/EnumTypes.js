
// enum type CustomerType
export let CustomerType = {
	Individual:"Individual",
	Business:"Business",
	NonProfit:"NonProfit",
	Government:"Government",
}

// enum type AccountType
export let AccountType = {
	Checking:"Checking",
	Savings:"Savings",
	MoneyMarket:"MoneyMarket",
	TimeDeposit:"TimeDeposit",
}

// enum type AccountStatus
export let AccountStatus = {
	Open:"Open",
	Frozen:"Frozen",
	Dormant:"Dormant",
	Closed:"Closed",
}

// enum type AccountOwnershipType
export let AccountOwnershipType = {
	Sole:"Sole",
	Joint:"Joint",
	Corporate:"Corporate",
	Trust:"Trust",
}

// enum type StatementDeliveryMethod
export let StatementDeliveryMethod = {
	Electronic:"Electronic",
	Paper:"Paper",
}

// enum type TransactionType
export let TransactionType = {
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
export let TransactionStatus = {
	Pending:"Pending",
	Posted:"Posted",
	Reversed:"Reversed",
	Failed:"Failed",
	Cancelled:"Cancelled",
}

// enum type TransactionDirection
export let TransactionDirection = {
	Credit:"Credit",
	Debit:"Debit",
}

// enum type ChannelType
export let ChannelType = {
	Branch:"Branch",
	Online:"Online",
	Mobile:"Mobile",
	ATM:"ATM",
	API:"API",
	CallCenter:"CallCenter",
}

// enum type PaymentMethod
export let PaymentMethod = {
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
export let PaymentStatus = {
	Initiated:"Initiated",
	InProcess:"InProcess",
	Settled:"Settled",
	Failed:"Failed",
	Reversed:"Reversed",
	Cancelled:"Cancelled",
}

// enum type StandingInstructionFrequency
export let StandingInstructionFrequency = {
	OneTime:"OneTime",
	Weekly:"Weekly",
	BiWeekly:"BiWeekly",
	Monthly:"Monthly",
	Quarterly:"Quarterly",
	Annually:"Annually",
}

// enum type StandingInstructionStatus
export let StandingInstructionStatus = {
	Active:"Active",
	Paused:"Paused",
	Cancelled:"Cancelled",
	Completed:"Completed",
}

// enum type CardType
export let CardType = {
	Debit:"Debit",
	Credit:"Credit",
	Prepaid:"Prepaid",
	Virtual:"Virtual",
}

// enum type CardStatus
export let CardStatus = {
	Active:"Active",
	Blocked:"Blocked",
	LostStolen:"LostStolen",
	Expired:"Expired",
	Closed:"Closed",
}

// enum type CardNetwork
export let CardNetwork = {
	Visa:"Visa",
	Mastercard:"Mastercard",
	Amex:"Amex",
	Discover:"Discover",
	UnionPay:"UnionPay",
	Other:"Other",
}

// enum type LoanType
export let LoanType = {
	Mortgage:"Mortgage",
	Personal:"Personal",
	Auto:"Auto",
	SmallBusiness:"SmallBusiness",
	CreditLine:"CreditLine",
	Student:"Student",
}

// enum type LoanStatus
export let LoanStatus = {
	Applied:"Applied",
	Approved:"Approved",
	Active:"Active",
	Delinquent:"Delinquent",
	Defaulted:"Defaulted",
	Closed:"Closed",
}

// enum type RateType
export let RateType = {
	Fixed:"Fixed",
	Variable:"Variable",
}

// enum type InterestCompounding
export let InterestCompounding = {
	Daily:"Daily",
	Monthly:"Monthly",
	Quarterly:"Quarterly",
	Annually:"Annually",
}

// enum type InstallmentStatus
export let InstallmentStatus = {
	Due:"Due",
	Paid:"Paid",
	Overdue:"Overdue",
	Deferred:"Deferred",
}

// enum type FeeType
export let FeeType = {
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
export let RiskRating = {
	Low:"Low",
	Medium:"Medium",
	High:"High",
}

// enum type KycStatus
export let KycStatus = {
	Pending:"Pending",
	Verified:"Verified",
	Rejected:"Rejected",
	Expired:"Expired",
}

// enum type IdentityDocumentType
export let IdentityDocumentType = {
	Passport:"Passport",
	NationalID:"NationalID",
	DriverLicense:"DriverLicense",
	ResidencePermit:"ResidencePermit",
	BusinessRegistration:"BusinessRegistration",
	TaxCertificate:"TaxCertificate",
}

// enum type ScreeningOutcome
export let ScreeningOutcome = {
	Clear:"Clear",
	Match:"Match",
	Review:"Review",
}

// enum type TradeStatus
export let TradeStatus = {
	Booked:"Booked",
	Settled:"Settled",
	Cancelled:"Cancelled",
}

// enum type ATMStatus
export let ATMStatus = {
	InService:"InService",
	OutOfService:"OutOfService",
	Maintenance:"Maintenance",
}

// enum type ConsentType
export let ConsentType = {
	OpenBanking:"OpenBanking",
	PaymentInitiation:"PaymentInitiation",
	AccountInformation:"AccountInformation",
	Marketing:"Marketing",
	DataSharing:"DataSharing",
}

// enum type ConsentStatus
export let ConsentStatus = {
	Active:"Active",
	Revoked:"Revoked",
	Expired:"Expired",
}

// enum type DisputeStatus
export let DisputeStatus = {
	Open:"Open",
	UnderReview:"UnderReview",
	Resolved:"Resolved",
	Rejected:"Rejected",
	Withdrawn:"Withdrawn",
}

// enum type ProductCategory
export let ProductCategory = {
	Deposit:"Deposit",
	Loan:"Loan",
	Card:"Card",
	PaymentService:"PaymentService",
	Investment:"Investment",
}

// enum type CollateralType
export let CollateralType = {
	RealEstate:"RealEstate",
	Vehicle:"Vehicle",
	Cash:"Cash",
	Securities:"Securities",
	Guarantee:"Guarantee",
	Equipment:"Equipment",
}

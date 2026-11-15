import Decimal from "decimal.js";
// -----------------------------------------
// Money
// -----------------------------------------
declare global {
  interface Money {
    amount: Decimal;
    currency: string;
  }
}

// -----------------------------------------
// Address
// -----------------------------------------
declare global {
  interface Address {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
}

// -----------------------------------------
// AccountNumber
// -----------------------------------------
declare global {
  interface AccountNumber {
    value: string;
  }
}

// -----------------------------------------
// IBAN
// -----------------------------------------
declare global {
  interface IBAN {
    value: string;
  }
}

// -----------------------------------------
// BIC
// -----------------------------------------
declare global {
  interface BIC {
    value: string;
  }
}

// -----------------------------------------
// CardPAN
// -----------------------------------------
declare global {
  interface CardPAN {
    value: string;
  }
}

// -----------------------------------------
// Percentage
// -----------------------------------------
declare global {
  interface Percentage {
    value: Decimal;
  }
}

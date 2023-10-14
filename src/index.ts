import { TelecomCompany } from "./types/general";

/**
 * Checks if a phone number is valid according to Tanzanian phone number rules.
 * @param phoneNumber The phone number to validate.
 * @returns True if the phone number is valid, false otherwise.
 */
export function isValidPhoneNumber(phoneNumber: string): boolean {
  return tanzanianPhoneNumberRegex.test(phoneNumber);
}

/**
 * Gets details of a Tanzanian phone number.
 * @param phoneNumber The phone number to get details for.
 * @returns An object with information about the phone number.
 */
export function getPhoneNumberDetails(phoneNumber: string) {
  const isValid = isValidPhoneNumber(phoneNumber);
  const phoneNumberPrefix = isValid ? extractMobilePrefix(phoneNumber) : null;
  const telecomCompanyDetails = phoneNumberPrefix
    ? getTelecomCompany(phoneNumberPrefix)
    : null;

  return {
    isValid,
    telecomCompanyDetails,
  };
}

// helpers
export function extractMobilePrefix(mobileNumber: string): string | null {
  const match = mobileNumber.match(tanzanianPhoneNumberRegex);

  return match?.[1] || null;
}

export function getTelecomCompany(
  phoneNumberPrefix: string
): TelecomCompany | null {
  const matchingCompany = telecomCompanies.find(
    (company) => company.prefix.toString() === phoneNumberPrefix
  );
  return matchingCompany || null;
}

//   regex
export const tanzanianPhoneNumberRegex =
  /^(?:\+?255|0)[-.\s]?(6[1256789]|7[1345678])\d{7}$/;

//  telecom-companies
export const telecomCompanies: TelecomCompany[] = [
  {
    prefix: 61,
    company: "Viettel Tanzania Limited",
    brand: "halotel",
    operational: "yes",
  },
  {
    prefix: 62,
    company: "Viettel Tanzania Limited",
    brand: "halotel",
    operational: "yes",
  },
  {
    prefix: 63,
    company: "Mkulima African Telecommunication Company Limited",
    brand: "Amotel",
    operational: "no",
  },
  {
    prefix: 64,
    company: "Wiafrica Tanzania Limited",
    brand: "CooTel",
    operational: "no",
  },
  {
    prefix: 65,
    company: "MIC Tanzania Limited",
    brand: "tiGo",
    operational: "yes",
  },
  {
    prefix: 66,
    company: "Smile Communications Tanzania Limited",
    brand: "smile",
    operational: "yes",
  },
  {
    prefix: 67,
    company: "MIC Tanzania Limited",
    brand: "tiGo",
    operational: "yes",
  },
  {
    prefix: 68,
    company: "Airtel Tanzania Limited",
    brand: "airtel",
    operational: "yes",
  },
  {
    prefix: 69,
    company: "Airtel Tanzania Limited",
    brand: "airtel",
    operational: "yes",
  },
  {
    prefix: 71,
    company: "MIC Tanzania Limited",
    brand: "tiGo",
    operational: "yes",
  },
  {
    prefix: 72,
    company: "MO Mobile Holding Limited",
    brand: "",
    operational: "no",
  },
  {
    prefix: 73,
    company: "Tanzania Telecommunications Company Ltd",
    brand: "TTCL",
    operational: "yes",
  },
  {
    prefix: 74,
    company: "Vodacom Tanzania Limited",
    brand: "Vodacom",
    operational: "yes",
  },
  {
    prefix: 75,
    company: "Vodacom Tanzania Limited",
    brand: "Vodacom",
    operational: "yes",
  },
  {
    prefix: 76,
    company: "Vodacom Tanzania Limited",
    brand: "Vodacom",
    operational: "yes",
  },
  {
    prefix: 77,
    company: "MIC Tanzania Limited",
    brand: "tiGo",
    operational: "yes",
  },
  {
    prefix: 78,
    company: "Airtel Tanzania Limited",
    brand: "airtel",
    operational: "yes",
  },
  {
    prefix: 79,
    company: "Benson Informatics Ltd",
    brand: "Smart",
    operational: "no",
  },
];

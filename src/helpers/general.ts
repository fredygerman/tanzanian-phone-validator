import { telecomCompanies } from "./telecom-companies";
import { tanzanianPhoneNumberRegex } from "./regex";
import { TelecomCompany } from "../types/general";

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

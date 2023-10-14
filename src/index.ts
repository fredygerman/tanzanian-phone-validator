import { extractMobilePrefix, getTelecomCompany } from "./helpers/general";
import { tanzanianPhoneNumberRegex } from "./helpers/regex";

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

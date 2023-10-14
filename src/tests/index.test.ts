import { isValidPhoneNumber, getPhoneNumberDetails } from "../index";
import { PhoneNumberDetails } from "../types/general";

// Please run `npx jest --clearCache` before running the tests

describe("Tanzanian Phone Number Validation", () => {
  it("should return true for a valid Tanzanian phone number", () => {
    const validNumbers = [
      "+255712345696",
      "0712349878",
      "0612345988",
      "0745687901",
    ];

    validNumbers.forEach((number) => {
      expect(isValidPhoneNumber(number)).toBe(true);

      const details: PhoneNumberDetails = getPhoneNumberDetails(
        number
      ) as PhoneNumberDetails;
      expect(details.isValid).toBe(true);
      expect(details.telecomCompanyDetails).toBeDefined();
    });
  });

  it('should return true for phone numbers with "Operational" prefixes', () => {
    const operationalPrefixes = [
      // Operator: Viettel Tanzania Limited (halotel)
      "61",
      "62",
      // Operator: MIC Tanzania Limited (tiGo)
      "65",
      "66",
      "67",
      "71",
      // Operator: Tanzania Telecommunications Company Ltd (TTCL)
      "73",
      // Operator: Vodacom Tanzania Limited (Vodacom)
      "74",
      "75",
      "76",
      // Operator: MIC Tanzania Limited (tiGo)
      "77",
      // Operator: Airtel Tanzania Limited (airtel)
      "78",
    ];

    operationalPrefixes.forEach((prefix) => {
      const validNumber = `+255 ${prefix}4216996`;

      expect(isValidPhoneNumber(validNumber)).toBe(true);

      const details: PhoneNumberDetails = getPhoneNumberDetails(
        validNumber
      ) as PhoneNumberDetails;
      expect(details.isValid).toBe(true);
      expect(details.telecomCompanyDetails).toBeDefined();
    });
  });

  it("should return false for an invalid Tanzanian phone number", () => {
    const invalidNumbers = [
      "12345678", // Too short
      "07123456789", // Too long
      "+255812345678", // Invalid prefix
      "07512345678", // Invalid prefix
      "071234567A", // Contains non-numeric characters
      "071234567", // Missing the last digit
    ];

    invalidNumbers.forEach((number) => {
      expect(isValidPhoneNumber(number)).toBe(false);

      const details: PhoneNumberDetails = getPhoneNumberDetails(
        number
      ) as PhoneNumberDetails;
      expect(details.isValid).toBe(false);
      expect(details.telecomCompanyDetails).toBe(null);
    });
  });
});

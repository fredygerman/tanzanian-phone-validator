import { validateTanzanianPhoneNumber } from "../src/index";

describe("Tanzanian Phone Number Validation", () => {
  it("should return true for a valid Tanzanian phone number", () => {
    const validNumbers = [
      "+255712345678",
      "0712345678",
      "0612345678",
      "0745678901",
    ];

    validNumbers.forEach((number) => {
      expect(validateTanzanianPhoneNumber(number)).toBe(true);
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
      // Generate a valid phone number with the given prefix
      const validNumber = `+255${prefix}12345678`;
      expect(validateTanzanianPhoneNumber(validNumber)).toBe(true);
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
      "255712345678", // Missing the plus sign
    ];

    invalidNumbers.forEach((number) => {
      expect(validateTanzanianPhoneNumber(number)).toBe(false);
    });
  });
});

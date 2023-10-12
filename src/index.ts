export function validateTanzanianPhoneNumber(phoneNumber: string): boolean {
  const tanzanianPhoneNumberRegex =
    /^(?:\+?255|0)[-.\s]?(6[1256789]|7[1345678])\d{7}$/;
  return tanzanianPhoneNumberRegex.test(phoneNumber);
}

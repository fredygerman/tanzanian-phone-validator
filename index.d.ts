import { PhoneNumberDetails } from "./src/types/general";

declare module "tanzanian-phone-validator" {
  export function isValidPhoneNumber(phoneNumber: string): boolean;
}

declare module "tanzanian-phone-validator" {
  export function getPhoneNumberDetails(
    phoneNumber: string
  ): PhoneNumberDetails;
}

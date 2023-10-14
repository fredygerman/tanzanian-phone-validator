declare module "tanzanian-phone-validator" {
  export function isValidPhoneNumber(phoneNumber: string): boolean;
}

declare module "tanzanian-phone-validator" {
  export function getPhoneNumberDetails(
    phoneNumber: string
  ): PhoneNumberDetails;
}

type PhoneNumberDetails =
  | {
      isValid: true;
      phoneNumberPrefix: string;
      telecomCompanyDetails: TelecomCompany;
    }
  | {
      isValid: false;
      phoneNumberPrefix: null;
      telecomCompanyDetails: null;
    };

type TelecomCompany = {
  prefix: number;
  company: string;
  brand: string;
  operational: "yes" | "no";
};

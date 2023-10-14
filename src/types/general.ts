export type PhoneNumberDetails =
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

export type TelecomCompany = {
  prefix: number;
  company: string;
  brand: string;
  operational: "yes" | "no";
};

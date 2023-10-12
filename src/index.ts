import {TelecomCompany, telecomCompanies} from "./telecom-companies";

export function isValidPhoneNumber(phoneNumber: string): boolean {
	const tanzanianPhoneNumberRegex =
		/^(?:\+?255|0)[-.\s]?(6[156789]|7[1345678])\d{7}$/;
	return tanzanianPhoneNumberRegex.test(phoneNumber);
}

export function validatePhoneNumber(
	phoneNumber: string
): TelecomCompany | null {
	if (isValidPhoneNumber(phoneNumber)) {
		const phoneNumberPrefix = extractMobilePrefix(phoneNumber);

		const matchingCompany = telecomCompanies.find(
			(company) => company.prefix.toString() === phoneNumberPrefix
		);

		return matchingCompany || null;
	} else {
		return null;
	}
}

function extractMobilePrefix(mobileNumber: string): string | null {
	// Regular expression to match the Tanzanian mobile number format
	const tanzanianPhoneNumberRegex =
		/^(?:\+?255|0)[-.\s]?(6[156789]|7[1345678])\d{7}$/;
	const match = mobileNumber.match(tanzanianPhoneNumberRegex);

	if (match && match.length >= 3) {
		// The first capturing group (match[1]) contains the next two digits after "0" or "+255"
		return match[1];
	}

	return null; // Return null if no valid prefix is found
}

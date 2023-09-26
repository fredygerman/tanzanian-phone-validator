# Tanzanian Phone Number Validation

A simple npm package for validating Tanzanian phone numbers using regular expressions.

## Installation

You can install this package via npm:

```bash
npm install tanzanian-phone-validation
```

## Usage

Import the validateTanzanianPhoneNumber function from the package to validate Tanzanian phone numbers in your project. Here are some usage examples with different validation libraries:

### Using Yup

```js
const yup = require("yup");
const { validateTanzanianPhoneNumber } = require("tanzanian-phone-validation");

const schema = yup.object({
  phoneNumber: yup
    .string()
    .test("is-tanzanian", "Invalid Tanzanian phone number", (value) => {
      return validateTanzanianPhoneNumber(value);
    }),
});

// Example usage
const data = {
  phoneNumber: "+255761234567",
};

schema
  .validate(data)
  .then((validatedData) => {
    console.log("Validation succeeded:", validatedData);
  })
  .catch((error) => {
    console.error("Validation failed:", error.message);
  });
```

### Using Zod

```js
const { z } = require("zod");
const { validateTanzanianPhoneNumber } = require("tanzanian-phone-validation");

const schema = z.object({
  phoneNumber: z.string().refine(
    (value) => {
      return validateTanzanianPhoneNumber(value);
    },
    {
      message: "Invalid Tanzanian phone number",
    }
  ),
});

// Example usage
const data = {
  phoneNumber: "+255761234567",
};

try {
  const validatedData = schema.parse(data);
  console.log("Validation succeeded:", validatedData);
} catch (error) {
  console.error("Validation failed:", error.message);
}
```

### Direct usage (Node Js)

You can also directly use the validateTanzanianPhoneNumber function:

```js
const { validateTanzanianPhoneNumber } = require("tanzanian-phone-validation");

const phoneNumber = "+255761234567";

if (validateTanzanianPhoneNumber(phoneNumber)) {
  console.log("Valid Tanzanian phone number.");
} else {
  console.log("Invalid Tanzanian phone number.");
}
```

## List of Tanzanian mobile network operators and their prefixes

This table was used to used to create this package. IT can be found [in wikipedia (Click here).](https://en.wikipedia.org/wiki/Telephone_numbers_in_Tanzania).
Note : this package does not validate for Operators which are not in Operation nor on this table.

| Prefix | Operator                                          | Trading as | Operational[1] |
| ------ | ------------------------------------------------- | ---------- | -------------- |
| 61     | Viettel Tanzania Limited                          | halotel    | yes            |
| 62     | Viettel Tanzania Limited                          | halotel    | no             |
| 63     | Mkulima African Telecommunication Company Limited | Amotel     | no             |
| 64     | Wiafrica Tanzania Limited                         | CooTel     | no             |
| 65     | MIC Tanzania Limited                              | tiGo       | yes            |
| 66     | Smile Communications Tanzania Limited             | smile      | yes            |
| 67     | MIC Tanzania Limited                              | tiGo       | yes            |
| 68     | Airtel Tanzania Limited                           | airtel     | yes            |
| 69     | Airtel Tanzania Limited                           | airtel     | yes            |
| 71     | MIC Tanzania Limited                              | tiGo       | yes            |
| 72     | MO Mobile Holding Limited                         |            | no             |
| 73     | Tanzania Telecommunications Company Ltd           | TTCL       | yes            |
| 74     | Vodacom Tanzania Limited                          | Vodacom    | yes            |
| 75     | Vodacom Tanzania Limited                          | Vodacom    | yes            |
| 76     | Vodacom Tanzania Limited                          | Vodacom    | yes            |
| 77     | MIC Tanzania Limited                              | tiGo       | yes            |
| 78     | Airtel Tanzania Limited                           | airtel     | yes            |
| 79     | Benson Informatics Ltd                            | Smart      | no             |

License
This package is licensed under the MIT License. [See the LICENSE.](https://github.com/fredygerman/tanzanian-phone-validator/blob/main/LICENSE.md).

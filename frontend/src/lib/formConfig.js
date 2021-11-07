import Input from "../components/UI/Input";
import {
  emailValidate,
  minLength,
  passwordMatchRule,
  requiredRule,
} from "./formValidationRules";

const createFormField = (name, label, type, defaultValue = "") => {
  return {
    renderInput: (key, value, error, inputValid, handleChange) => {
      return (
        <Input
          key={key}
          name={name}
          label={label}
          type={type}
          value={value}
          errorMessage={error}
          valid={inputValid}
          handleChange={handleChange}
        />
      );
    },
    label,
    errorMessage: "",
    value: defaultValue,
    valid: false,
  };
};

export const loginForm = {
  email: {
    ...createFormField("email", "Email", "text"),
    validationRules: [requiredRule("email"), emailValidate("email")],
  },
  password: {
    ...createFormField("password", "Password", "password"),
    validationRules: [requiredRule("password"), minLength("password", 6)],
  },
};

export const signupForm = {
  email: {
    ...createFormField("email", "Email", "text"),
    validationRules: [requiredRule("email"), emailValidate("email")],
  },
  password: {
    ...createFormField("password", "Password", "password"),
    validationRules: [requiredRule("password"), minLength("password", 6)],
  },
  confirmPassword: {
    ...createFormField("confirmPassword", "Confirm Password", "password"),
    validationRules: [
      requiredRule("Password confirmation"),
      passwordMatchRule(),
    ],
  },
};

export const billingAddressForm = (defaultAddress) => {
  return {
    street: {
      ...createFormField("street", "street", "text", defaultAddress.street),
      validationRules: [requiredRule("street"), minLength("street", 3)],
    },
    city: {
      ...createFormField("city", "city", "text", defaultAddress.city),
      validationRules: [requiredRule("city"), minLength("city", 3)],
    },
    country: {
      ...createFormField("country", "country", "text", defaultAddress.country),
      validationRules: [requiredRule("country"), minLength("country", 3)],
    },
    zipCode: {
      ...createFormField("zipCode", "zip code", "text", defaultAddress.zip),
      validationRules: [requiredRule("zip code"), minLength("zip code", 3)],
    },
  };
};

export const shippingAddressForm = (defaultAddress) => {
  return {
    street: {
      ...createFormField("street", "street", "text", defaultAddress.street),
      validationRules: [requiredRule("street"), minLength("street", 3)],
    },
    city: {
      ...createFormField("city", "city", "text", defaultAddress.city),
      validationRules: [requiredRule("city"), minLength("city", 3)],
    },
    country: {
      ...createFormField("country", "country", "text", defaultAddress.country),
      validationRules: [requiredRule("country"), minLength("country", 3)],
    },
    zipCode: {
      ...createFormField("zipCode", "zip code", "text", defaultAddress.zip),
      validationRules: [requiredRule("zip code"), minLength("zip code", 3)],
    },
  };
};

export const paymentForm = (defaultValues) => {
  return {
    creditNumber: {
      ...createFormField(
        "creditNumber",
        "Credit Number",
        "text",
        defaultValues.creditNumber
      ),
      validationRules: [
        requiredRule("Credit number"),
        minLength("Credit number", 16),
      ],
    },
    name: {
      ...createFormField(
        "name",
        "Name on credit card",
        "text",
        defaultValues.name
      ),
      validationRules: [requiredRule("Name"), minLength("Name", 3)],
    },
    expiry: {
      ...createFormField("expiry", "Expiry Date", "text", defaultValues.expiry),
      validationRules: [requiredRule("Expiry Date")],
    },
  };
};

export const profileHeader = (defaultValues) => {
  return {
    fullName: {
      ...createFormField(
        "fullName",
        "Full Name",
        "text",
        defaultValues.fullName
      ),
      validationRules: [requiredRule("Full name"), minLength("Full name", 3)],
    },
    email: {
      ...createFormField("email", "Email", "text", defaultValues.email),
      validationRules: [requiredRule("email"), emailValidate("email")],
    },
  };
};

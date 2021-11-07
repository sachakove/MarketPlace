const createRule = (name, message, validateFn) => {
  return {
    name: name,
    errorMessage: message,
    valid: validateFn,
  };
};

export const requiredRule = (inputName) => {
  return createRule(
    "required",
    `${inputName} is required`,
    (inputValue) => inputValue.trim() !== ""
  );
};

export const minLength = (inputName, minChar) => {
  return createRule(
    "minLength",
    `${inputName} should contain atleast ${minChar} characters`,
    (inputValue) => inputValue.length >= minChar
  );
};

export const emailValidate = (inputName) => {
  return createRule(
    "emailValidate",
    `You have entered an invalid ${inputName} address`,
    (inputValue) =>
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)
  );
};

export const passwordMatchRule = () => {
  return createRule(
    "passwordMatch",
    `passwords do not match`,
    (inputValue, formObj) => inputValue === formObj.password.value
  );
};

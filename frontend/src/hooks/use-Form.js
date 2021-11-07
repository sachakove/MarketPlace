import { useCallback, useState } from "react";

const useForm = (formObj) => {
  const [form, setForm] = useState(formObj);

  const renderFormInputs = () => {
    return Object.values(form).map((inputObj) => {
      const { renderInput, label, value, isValid, errorMessage } = inputObj;
      return renderInput(label, value, errorMessage, isValid, onChangeHandler);
    });
  };

  const checkValidation = useCallback(
    (inputObj) => {
      for (const rule of inputObj.validationRules) {
        if (!rule.valid(inputObj.value, form)) {
          inputObj.errorMessage = rule.errorMessage;
          return false;
        }
      }
      return true;
    },
    [form]
  );

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const inputObj = { ...form[name] };
    inputObj.value = value;

    // check validation
    const isValid = checkValidation(inputObj);
    if (isValid && !inputObj.isValid) {
      inputObj.isValid = true;
    } else if (!isValid && inputObj.isValid) {
      inputObj.isValid = false;
    }
    setForm({ ...form, [name]: inputObj });
  };

  const isFormValid = useCallback(() => {
    let isValid = true;
    const inputsArr = Object.values(form);
    for (let i = 0; i < inputsArr.length; i++) {
      if (!inputsArr[i].isValid) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }, [form]);

  const getValues = () => {
    return form;
  };

  const clearValues = () => {
    const inputsArr = Object.values(form);
    for (let i = 0; i < inputsArr.length; i++) {
      inputsArr[i].value = "";
      setForm({ ...form, [inputsArr[i].name]: inputsArr[i] });
    }
  };

  return { renderFormInputs, isFormValid, getValues, clearValues };
};

export default useForm;

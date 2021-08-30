import { useState } from "react";
import { useSelector } from "react-redux";
import { updateUser, userLogin, userRegister } from "../lib/api";
import useHttp from "./use-http";

const useForm = (validate) => {
  const { sendRequest } = useHttp();
  const { token } = useSelector((state) => state.auth);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    shippingAddressStreet: "",
    shippingAddressCity: "",
    shippingAddressCountry: "",
    shippingAddressZip: "",
    billingAddressStreet: "",
    billingAddressCity: "",
    billingAddressCountry: "",
    billingAddressZip: "",
    name: "",
    creditNumber: "",
    expiry: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors(validate(values));

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e, requestData) => {
    e.preventDefault();
    setErrors(validate(values));
    if (requestData === "shippingAddress") {
      // return;
    }
    if (requestData === "billingAddress") {
      const billingAddressEdited = {
        street: values.billingAddressStreet,
        city: values.billingAddressCity,
        country: values.billingAddressCountry,
        zip: values.billingAddressZip,
      };
      await sendRequest(
        updateUser({ token, billingAddress: billingAddressEdited }),
        "updateContact"
      );
    }
    if (requestData === "payment") {
      // return;
    }
    if (requestData === "login") {
      const message = "Invalid email or password";
      return !errors.email && !errors.password
        ? await sendRequest(userLogin(values.email, values.password), "login")
        : message;
    }
    if (requestData === "register") {
      const message = "Invalid email or password";
      return !errors.email && !errors.password && !errors.password2
        ? await sendRequest(
            userRegister(values.email, values.password),
            "register"
          )
        : message;
    }
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;

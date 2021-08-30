import { useEffect } from "react";

export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last name required";
  }

  if (!values.email) {
    console.log(values.email);
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
    console.log(values.email);
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 5) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    console.log(values.password2);
    errors.password2 = "Passwords do not match";
  }

  if (!values.billingAddressStreet.trim()) {
    errors.billingAddressStreet = "Street required";
  }

  if (!values.billingAddressCity.trim()) {
    errors.billingAddressCity = "City required";
  }

  if (!values.billingAddressCountry.trim()) {
    errors.billingAddressCountry = "Country required";
  }

  if (!values.billingAddressZip.trim()) {
    errors.billingAddressZip = "Zip code required";
  }

  if (!values.shippingAddressStreet.trim()) {
    errors.shippingAddressStreet = "Street required";
  }

  if (!values.shippingAddressCity.trim()) {
    errors.shippingAddressCity = "City required";
  }

  if (!values.shippingAddressCountry.trim()) {
    errors.shippingAddressCountry = "Country required";
  }

  if (!values.shippingAddressZip.trim()) {
    errors.shippingAddressZip = "Zip code required";
  }

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.creditNumber.trim()) {
    errors.creditNumber = "Credit number required";
  }

  if (!values.expiry.trim()) {
    errors.expiry = "Expiry date required";
  }
  return errors;
}

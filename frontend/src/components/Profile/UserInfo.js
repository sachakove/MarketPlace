import classes from "./UserInfo.module.css";
import editIcon from "../../assets/icons/edit.svg";
import { Fragment, useRef, useState } from "react";
import useHttp from "../../hooks/use-http";
import { updateUser } from "../../lib/api";
import { useSelector } from "react-redux";
import validate from "../../lib/validateInfo";
import UserInfoForm from "./UserInfoForm";
import useForm from "../../hooks/useForm";

const UserInfo = () => {
  const [editShippingAddress, setEditShippingAddress] = useState(false);
  const [editBillingAddress, setBillingAddress] = useState(false);
  const [editPaymentMethod, setEditPaymentMethod] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  const payment = useRef();
  const shippingAddress = useRef();
  // const billingAddress = useRef();
  const { sendRequest } = useHttp();
  const billingAdrressConfig = [
    {
      name: "billingAddressStreet",
      value: values.billingAddressStreet,
      onChange: handleChange,
      placeholder: `Street`,
    },
    {
      name: "billingAddressCity",
      value: values.billingAddressCity,
      onChange: handleChange,
      placeholder: `City`,
    },
    {
      name: "billingAddressCountry",
      value: values.billingAddressCountry,
      onChange: handleChange,
      placeholder: `Country`,
    },
    {
      name: "billingAddressZip",
      value: values.billingAddressZip,
      onChange: handleChange,
      placeholder: `Zip Code`,
    },
  ];
  const shippingAdrressConfig = [
    {
      name: "shippingAddressStreet",
      value: values.shippingAddressStreet,
      onChange: handleChange,
      placeholder: `Street`,
    },
    {
      name: "shippingAddressCity",
      value: values.shippingAddressCity,
      onChange: handleChange,
      placeholder: `City`,
    },
    {
      name: "shippingAddressCountry",
      value: values.shippingAddressCountry,
      onChange: handleChange,
      placeholder: `Country`,
    },
    {
      name: "shippingAddressZip",
      value: values.shippingAddressZip,
      onChange: handleChange,
      placeholder: `Zip Code`,
    },
  ];
  const paymentConfig = [
    {
      name: "creditNumber",
      value: values.creditNumber,
      onChange: handleChange,
      placeholder: `Credit Number`,
    },
    {
      name: "name",
      value: values.name,
      onChange: handleChange,
      placeholder: `Name on Credit card`,
    },

    {
      name: "expiry",
      value: values.expiry,
      onChange: handleChange,
      placeholder: `Expiration date (MM/YY)`,
    },
  ];

  const onEditBillingAddress = (event) => {
    event.preventDefault();
    if (editBillingAddress) {
      handleSubmit(event, "billingAddress");
    }
    setBillingAddress(!editBillingAddress);
    setEditShippingAddress(false);
    setEditPaymentMethod(false);
  };

  const onEditShippingAddress = (event) => {
    event.preventDefault();
    if (editShippingAddress) {
      const length = shippingAddress.current.elements.length - 2;
      const shippingAddressEdited = {
        street: `${shippingAddress.current.elements[length - length].value}`,
        city: `${shippingAddress.current.elements[length - 2].value}`,
        country: `${shippingAddress.current.elements[length - 1].value}`,
        zip: `${shippingAddress.current.elements[length].value}`,
      };
      sendRequest(
        updateUser({ token: token, shippingAddress: shippingAddressEdited }),
        "updateContact"
      );
    }

    setBillingAddress(false);
    setEditShippingAddress(!editShippingAddress);
    setEditPaymentMethod(false);
  };

  const onEditPaymentMethod = (event) => {
    event.preventDefault();
    if (editPaymentMethod) {
      const length = payment.current.elements.length - 2;
      const paymentEdited = {
        creditNumber: `${payment.current.elements[length - length].value}`,
        name: `${payment.current.elements[length - 1].value}`,
        expiry: `${payment.current.elements[length].value}`,
      };
      sendRequest(
        updateUser({ token: token, payment: paymentEdited }),
        "updateContact"
      );
    }

    setBillingAddress(false);
    setEditShippingAddress(false);
    setEditPaymentMethod(!editPaymentMethod);
  };

  const billingAddressState = editBillingAddress ? (
    <UserInfoForm errors={errors} inputConfigs={billingAdrressConfig} />
  ) : (
    <Fragment>
      {user.billingAddress.street === "" ? (
        <h1 style={{ alignSelf: "center" }}>---</h1>
      ) : (
        <div className={classes.infoContet}>
          <span>{user.billingAddress.street}</span>
          <span>{user.billingAddress.city}</span>
          <span>{user.billingAddress.country}</span>
          <span>{user.billingAddress.zip}</span>
        </div>
      )}
    </Fragment>
  );

  const shippingAddressState = editShippingAddress ? (
    <UserInfoForm errors={errors} inputConfigs={shippingAdrressConfig} />
  ) : (
    <Fragment>
      {user.shippingAddress.street === "" ? (
        <h1 style={{ alignSelf: "center" }}>---</h1>
      ) : (
        <div className={classes.infoContet}>
          <span>{user.shippingAddress.street}</span>
          <span>{user.shippingAddress.city}</span>
          <span>{user.shippingAddress.country}</span>
          <span>{user.shippingAddress.zip}</span>
        </div>
      )}
    </Fragment>
  );

  const paymentState = editPaymentMethod ? (
    <UserInfoForm errors={errors} inputConfigs={paymentConfig} />
  ) : (
    <div className={classes.infoContet}>
      {user.payment.creditNumber !== "" ? (
        <span>
          **** **** ****{" "}
          {user.payment.creditNumber[user.payment.creditNumber.length - 4]}
          {user.payment.creditNumber[user.payment.creditNumber.length - 3]}
          {user.payment.creditNumber[user.payment.creditNumber.length - 2]}
          {user.payment.creditNumber[user.payment.creditNumber.length - 1]}
        </span>
      ) : (
        <h3 style={{ alignSelf: "center" }}>---</h3>
      )}
      {user.payment.expiry ? <span>Expiry: {user.payment.expiry}</span> : null}
    </div>
  );

  return (
    <section className={classes.adressesPaymentInfo}>
      <div className={classes.infoBox}>
        <span className={classes.infoContext}>Billing Address</span>
        <form
          className={classes.infoContentBox}
          onSubmit={onEditBillingAddress}
          // ref={billingAddress}
        >
          {billingAddressState}
          <button className={classes.btnEdit} type="submit">
            <img src={editIcon} alt="edit" />
            {editBillingAddress ? "Save" : "Edit"}
          </button>
        </form>
      </div>

      <div className={classes.infoBox}>
        <span className={classes.infoContext}>Shipping Address</span>
        <form
          className={classes.infoContentBox}
          onSubmit={onEditShippingAddress}
          ref={shippingAddress}
        >
          {shippingAddressState}
          <button className={classes.btnEdit} type="submit">
            <img src={editIcon} alt="edit" />
            {editShippingAddress ? "Save" : "Edit"}
          </button>
        </form>
      </div>

      <div className={classes.infoBox}>
        <span className={classes.infoContext}>Payment Method</span>
        <form
          className={classes.infoContentBox}
          onSubmit={onEditPaymentMethod}
          ref={payment}
        >
          {paymentState}
          <button className={classes.btnEdit} type="submit">
            <img src={editIcon} alt="edit" />
            {editPaymentMethod ? "Save" : "Edit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserInfo;

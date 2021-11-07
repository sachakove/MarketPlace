import classes from "./UserInfo.module.css";
import editIcon from "../../assets/icons/edit.svg";
import { Fragment, useState } from "react";
import useHttp from "../../hooks/use-http";
import { updateUser } from "../../lib/api";
import { useSelector } from "react-redux";
import useForm from "../../hooks/use-Form";
import {
  billingAddressForm,
  paymentForm,
  shippingAddressForm,
} from "../../lib/formConfig";

const UserInfo = () => {
  const [editShippingAddress, setEditShippingAddress] = useState(false);
  const [editBillingAddress, setBillingAddress] = useState(false);
  const [editPaymentMethod, setEditPaymentMethod] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const {
    renderFormInputs: renderBillingInputs,
    getValues: getBillingValues,
  } = useForm(billingAddressForm(user.billingAddress));

  const {
    renderFormInputs: renderShippingInputs,
    getValues: getShippingValues,
  } = useForm(shippingAddressForm(user.shippingAddress));

  const {
    renderFormInputs: renderPaymentInputs,
    getValues: getPaymentValues,
  } = useForm(paymentForm(user.payment));

  const { sendRequest } = useHttp();

  const onEditBillingAddress = async (event) => {
    event.preventDefault();
    if (editBillingAddress) {
      const { street, city, country, zipCode } = getBillingValues();
      await sendRequest(
        updateUser({
          token,
          billingAddress: {
            street: street.value,
            city: city.value,
            country: country.value,
            zip: zipCode.value,
          },
        }),
        "updateContact"
      );
    }
    setBillingAddress(!editBillingAddress);
    setEditShippingAddress(false);
    setEditPaymentMethod(false);
  };

  const onEditShippingAddress = async (event) => {
    event.preventDefault();
    if (editShippingAddress) {
      const { street, city, country, zipCode } = getShippingValues();
      await sendRequest(
        updateUser({
          token,
          shippingAddress: {
            street: street.value,
            city: city.value,
            country: country.value,
            zip: zipCode.value,
          },
        }),
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
      const { creditNumber, name, expiry } = getPaymentValues();

      sendRequest(
        updateUser({
          token: token,
          payment: {
            creditNumber: creditNumber.value,
            name: name.value,
            expiry: expiry.value,
          },
        }),
        "updateContact"
      );
    }
    setBillingAddress(false);
    setEditShippingAddress(false);
    setEditPaymentMethod(!editPaymentMethod);
  };

  const billingAddressState = editBillingAddress ? (
    <div className={classes.infoFormContet}>{renderBillingInputs()}</div>
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
    <div className={classes.infoFormContet}>{renderShippingInputs()}</div>
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
    <div className={classes.infoFormContet}>{renderPaymentInputs()}</div>
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
        <form className={classes.infoContentBox} onSubmit={onEditPaymentMethod}>
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

import { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./AuthForm.module.css";
import logo from "../../assets/logo.png";
import existIcon from "../../assets/icons/exist.svg";
import Input from "../UI/Input";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-store";
import { userActions } from "../../store/user-store";
import useForm from "../../hooks/useForm";
import validate from "../../lib/validateInfo";

const AuthForm = (props) => {
  const [onLogin, setOnLogin] = useState(props.onLogin);
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  const [errorMessage, setErrorMessage] = useState("");
  const { error, status, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(modalActions.hideModal());
    }
    if (error !== null) {
      setErrorMessage(error);
    }
    console.log(values.password2);
  }, [error, user, dispatch, errorMessage, values.password2]);

  const stateHandler = () => {
    setOnLogin(!onLogin);
    setErrorMessage(null);
    dispatch(userActions.resetErrors());
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (onLogin) {
      const message = await handleSubmit(e, "login");
      message === "Invalid email or password"
        ? setErrorMessage(message)
        : setErrorMessage(null);
    } else {
      const message = await handleSubmit(e, "register");
      message === "Invalid email or password"
        ? setErrorMessage(message)
        : setErrorMessage(null);
    }
  };

  const onEmailInput = () => {
    dispatch(userActions.resetErrors());
  };

  return (
    <Modal auth={true}>
      <div className={classes.centered}>
        <img
          src={existIcon}
          alt=""
          style={{ alignSelf: "flex-end" }}
          onClick={() => dispatch(modalActions.hideModal())}
        />

        <span className={classes.logoBox}>
          <img src={logo} alt="MarketPlace" className={classes.logo} />
        </span>
        <span>
          <h1 className={classes.title}>
            {onLogin ? "Login To Your Account" : "Create An Account"}
          </h1>
        </span>
        {status === "pending" && !error ? (
          <LoadingSpinner />
        ) : (
          <form className={classes.inputBox} onSubmit={submitHandler}>
            <Input
              errors={errors}
              input={{
                type: "email",
                name: "email",
                placeholder: "Email",
                value: values.email,
                onChange: handleChange,
                onFocus: onEmailInput,
              }}
            />

            <Input
              errors={errors}
              input={{
                type: "password",
                name: "password",
                placeholder: "Password",
                minLength: "6",
                maxLength: "9",
                value: values.password,
                onChange: handleChange,
              }}
            />
            {!onLogin && (
              <Input
                errors={errors}
                input={{
                  type: "password",
                  name: "password2",
                  placeholder: "Confirm Password",
                  minLength: "6",
                  maxLength: "9",
                  value: values.password2,
                  onChange: handleChange,
                }}
              />
            )}

            {errorMessage !== "" || error ? (
              <p
                style={{
                  color: "red",
                  fontSize: "1.5rem",
                  letterSpacing: ".2rem",
                }}
              >
                {errorMessage || error}
              </p>
            ) : (
              <p></p>
            )}
            <button className={classes.authBtn} type="submit">
              {onLogin ? "Login" : "Sign Up"}
            </button>
          </form>
        )}

        <span className={classes.authBottomText}>
          <span onClick={stateHandler}>
            {onLogin ? "Create an account" : "Already have an account? Login"}
          </span>
        </span>
      </div>
    </Modal>
  );
};

export default AuthForm;

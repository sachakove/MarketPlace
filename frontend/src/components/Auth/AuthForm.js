import { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./AuthForm.module.css";
import logo from "../../assets/logo.png";
import existIcon from "../../assets/icons/exist.svg";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-store";
import { userActions } from "../../store/user-store";
import useForm from "../../hooks/use-Form";
import { loginForm, signupForm } from "../../lib/formConfig";
import useHttp from "../../hooks/use-http";
import { userLogin, userRegister } from "../../lib/api";

const AuthForm = (props) => {
  const [onLogin, setOnLogin] = useState(props.onLogin);
  const {
    renderFormInputs: renderLoginInputs,
    isFormValid: isLoginValid,
    getValues: loginValues,
  } = useForm(loginForm);

  const {
    renderFormInputs: renderRegisterInputs,
    isFormValid: isRegisterValid,
    getValues: registerValues,
  } = useForm(signupForm);

  const { error, status, user } = useSelector((state) => state.auth);
  const { sendRequest } = useHttp();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(modalActions.hideModal());
    }
    if (error !== null) {
      setErrorMessage(error);
    }
  }, [error, user, dispatch, errorMessage]);

  const stateHandler = () => {
    setOnLogin(!onLogin);
    setErrorMessage(null);
    dispatch(userActions.resetErrors());
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (onLogin) {
      const { email, password } = loginValues();
      await sendRequest(userLogin(email.value, password.value), "login");
    } else {
      const { email, password } = registerValues();
      await sendRequest(userRegister(email.value, password.value), "register");
    }
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
            {onLogin && renderLoginInputs()}
            {!onLogin && renderRegisterInputs()}

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
            <button
              className={classes.authBtn}
              type="submit"
              disabled={onLogin ? !isLoginValid() : !isRegisterValid()}
            >
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

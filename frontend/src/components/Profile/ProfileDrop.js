import classes from "./ProfileDrop.module.css";
import existIcon from "../../assets/icons/exist.svg";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-store";
import { userActions } from "../../store/user-store";
import { NavLink } from "react-router-dom";

const ProfileDrop = (props) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const hideProfileDrop = () => {
    dispatch(modalActions.hideModal());
  };

  const modalHandler = (onLogin) => {
    dispatch(modalActions.hideModal());
    dispatch(modalActions.showModalAuth());
    props.login(onLogin);
  };

  return (
    <div className={classes.container}>
      <span className={classes.top}>
        <img src={existIcon} alt="" onClick={hideProfileDrop} />
      </span>
      <div className={classes.content}>
        {!isLoggedIn ? (
          <>
            <button
              className={classes.dropDownBtn}
              onClick={modalHandler.bind(this, true)}
            >
              Login
            </button>
            <button
              className={classes.dropDownBtn}
              onClick={modalHandler.bind(this, false)}
            >
              Register
            </button>
          </>
        ) : (
          <>
            <NavLink to="/profile" style={{ width: "100%" }}>
              <button
                className={classes.dropDownBtn}
                onClick={() => dispatch(modalActions.hideModal())}
              >
                Profile
              </button>
            </NavLink>

            <button
              className={classes.dropDownBtn}
              onClick={() => dispatch(userActions.logout())}
            >
              Logout
            </button>
          </>
        )}
      </div>
      <span className={classes.bottom} />
    </div>
  );
};

export default ProfileDrop;

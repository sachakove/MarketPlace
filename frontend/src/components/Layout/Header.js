import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../assets/Logo@2x.png";
import profileIcon from "../../assets/icons/user-circle.svg";
import CartButton from "../UI/CartButton";
import Search from "./Search";
import { userActions } from "../../store/user-store";
import { modalActions } from "../../store/modal-store";

const Header = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [smallScreen, setSmallScreen] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userActions.logout());
  };

  const modalHandler = (onLogin) => {
    dispatch(modalActions.showModalAuth());
    props.login(onLogin);
  };
  const onSmallScreen = () => {
    window.innerWidth <= 770 ? setSmallScreen(true) : setSmallScreen(false);
  };

  const activeDropdown = () => {
    dispatch(modalActions.showModalProfile());
  };

  useEffect(() => {
    onSmallScreen();
    window.addEventListener("resize", onSmallScreen);
    return () => window.removeEventListener("resize", onSmallScreen);
  }, [smallScreen]);

  return (
    <header className={classes.header}>
      <div className={classes.centered}>
        <Link to="/">
          <img src={logo} alt="MarketPlace" className={classes.logo} />
        </Link>
        <Search smallScreen={smallScreen} />
        {!isLoggedIn && !smallScreen ? (
          <div className={classes.links}>
            <button
              className={classes.link}
              onClick={modalHandler.bind(this, true)}
            >
              Login
            </button>
            <button
              className={classes.link}
              onClick={modalHandler.bind(this, false)}
            >
              Register
            </button>
          </div>
        ) : isLoggedIn && !smallScreen ? (
          <div className={classes.links}>
            <button className={classes.link} onClick={logoutHandler}>
              Logout
            </button>
            <span className={classes.accountHeader}>
              <NavLink
                to="/profile"
                className={classes.link}
                activeClassName={classes.onNav}
              >
                My Account
              </NavLink>
            </span>
          </div>
        ) : (
          <img
            src={profileIcon}
            alt="MarketPlace"
            className={classes.profile}
            onClick={activeDropdown}
          />
        )}

        <CartButton />
      </div>
    </header>
  );
};

export default Header;

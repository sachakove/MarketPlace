import classes from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logoBox}>
        <img src={logo} alt="" />
        <div className={classes.footerContent}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span className={classes.rights}></span>
      </div>
    </footer>
  );
};

export default Footer;

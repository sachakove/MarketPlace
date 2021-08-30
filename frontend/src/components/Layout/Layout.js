import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import AuthForm from "../Auth/AuthForm";
import Cart from "../Cart/Cart";
import ProfileDrop from "../Profile/ProfileDrop";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  const modalState = useSelector((state) => state.modal);
  const [onLogin, setOnLogin] = useState(true);

  const onSetLogin = (e) => {
    setOnLogin(e);
  };

  return (
    <Fragment>
      <Header login={onSetLogin} />
      {modalState.showModalCart && <Cart />}
      {modalState.showModalProfile && <ProfileDrop login={onSetLogin} />}
      {modalState.showModalAuth && <AuthForm onLogin={onLogin} />}
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;

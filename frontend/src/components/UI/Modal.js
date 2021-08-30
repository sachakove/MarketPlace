import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-store";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideModal} />;
};

const ModalOverlay = (props) => {
  const style = props.auth ? { width: "40%", left: "30%" } : null;
  return (
    <div className={classes.modal} style={style ? style : null}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideModal={hideModal} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay auth={props.auth}>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;

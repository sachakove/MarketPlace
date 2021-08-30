import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-store";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = (props) => {
  const numberOfCartItems = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(modalActions.showModalCart());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;

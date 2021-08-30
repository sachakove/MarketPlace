import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import existIcon from "../../assets/icons/exist.svg";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-store";
import useHttp from "../../hooks/use-http";
import { createOrder } from "../../lib/api";

const Cart = (props) => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const item = items.map((item) => <CartItem item={item} />);
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();
  const date = new Date();
  const currentDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const onCheckoutHandler = async () => {
    // dispatch(cartActions.cehckOut());
    const itemsArr = items.map((item) => {
      return { _id: item._id, amount: item.amount, total: item.total };
    });
    const newOrder = {
      date: currentDate,
      totalPrice: totalPrice,
      items: itemsArr,
      status: "Deliverd",
    };
    sendRequest(createOrder({ token, order: newOrder }), "newOrder");
    hideCart();
  };

  const hideCart = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <span>Cart Price: ${totalPrice.toFixed(2)}</span>
        <img src={existIcon} alt="" onClick={hideCart} />
      </div>
      {items && <div className={classes.cartItems}>{item}</div>}
      <div className={classes.bottom}>
        <button className={classes.btnCheckout} onClick={onCheckoutHandler}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

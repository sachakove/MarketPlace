import classes from "./CartItem.module.css";
import addIcon from "../../assets/icons/add.svg";
import decreaseIcon from "../../assets/icons/decrease.svg";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-store";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ ...props.item, amount: 1 }));
  };

  const decreaseItemHandler = () => {
    dispatch(cartActions.removeItem(props.item._id));
  };

  return (
    <div className={classes.cartContent}>
      <div className={classes.cartItem}>
        <div className={classes.cartItemTop}>
          <img src={props.item.image} alt="" />
          <span className={classes.itemContent}>
            <span>{props.item.name}</span>
            <span className={classes.price}>
              ${props.item.total.toFixed(2)}
            </span>
          </span>
        </div>
        <hr />
        <div className={classes.cartItemBottom}>
          <span>Quantity</span>
          <div className={classes.quantityBox}>
            <img src={decreaseIcon} alt="" onClick={decreaseItemHandler} />
            <span>{props.item.amount}</span>
            <img src={addIcon} alt="" onClick={addItemHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

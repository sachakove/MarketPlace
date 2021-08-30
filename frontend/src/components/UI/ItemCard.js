import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-store";
import { modalActions } from "../../store/modal-store";
import CartIcon from "./CartIcon";
import classes from "./ItemCard.module.css";

const ItemCard = (props) => {
  const [show, setShow] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ ...props.item, amount: 1 }));
  };

  const onShowItem = () => {
    dispatch(modalActions.showModalItem());
    props.showItem(props.item);
  };

  return (
    <div
      className={classes.itemCard}
      onMouseEnter={(e) => {
        setShow(true);
      }}
      onMouseLeave={(e) => {
        setShow(false);
      }}
    >
      <div className={classes.top} onClick={onShowItem}>
        <img src={`${props.item.image}`} alt="item" />
      </div>
      <span className={classes.itemName}>{props.item.name}</span>
      <span className={classes.itemPrice}>${props.item.price.toFixed(2)}</span>

      {show && (
        <button
          className={classes.itemAddBtn}
          onMouseEnter={(e) => {
            setBtnHover(true);
          }}
          onMouseLeave={(e) => {
            setBtnHover(false);
          }}
          onClick={addItemHandler}
        >
          Add To Cart
          {btnHover && <CartIcon />}
        </button>
      )}
    </div>
  );
};

export default ItemCard;

import Modal from "../UI/Modal";
import exitIcon from "../../assets/icons/exist.svg";
import addIcon from "../../assets/icons/add.svg";
import decreaseIcon from "../../assets/icons/decrease.svg";
import classes from "./ItemSpec.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-store";

const ItemSpec = (props) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ ...props.item, amount: amount }));
    props.onHideModal();
  };

  const addAmountHandler = () => {
    setAmount(amount + 1);
  };

  const decreaseAmountHandler = () => {
    amount === 0 ? setAmount(0) : setAmount(amount - 1);
  };

  return (
    <Modal hideModal={props.onHideModal}>
      <div className={classes.itemContainer}>
        <div className={classes.itemContainerLeft}>
          <img src={`${props.item.image}`} alt={`${props.item.name}`} />
        </div>
        <div className={classes.itemContainerRight}>
          <span className={classes["itemContainerRight--top"]}>
            <span>{props.item.name}</span>
            <span className={classes["itemContainerRight--price"]}>
              ${props.item.price * amount}
            </span>
            <hr />
          </span>
          <div className={classes["itemContainerRight--description"]}>
            <span style={{ fontWeight: "700", color: "black" }}>
              Description
            </span>
            <p>{props.item.description}</p>
          </div>
          <div className={classes["itemContainerRight--bottom"]}>
            <span className={classes.quantityBox}>
              Quantity
              <img src={decreaseIcon} alt="" onClick={decreaseAmountHandler} />
              <span>{amount}</span>
              <img src={addIcon} alt="" onClick={addAmountHandler} />
            </span>
            <button className={classes.itemBtn} onClick={addItemHandler}>
              Add to Cart
            </button>
          </div>
        </div>
        <span className={classes.exitIcon} onClick={props.onHideModal}>
          <img src={exitIcon} alt="" />
        </span>
      </div>
    </Modal>
  );
};

export default ItemSpec;

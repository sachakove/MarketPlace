import { Fragment, useEffect, useMemo, useState } from "react";
import classes from "./RecentOrders.module.css";
import apples from "../../assets/items/Apples.png";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/use-http";
import { getItemsById, getOrders } from "../../lib/api";

const ItemOrder = (props) => {
  const { sendRequest } = useHttp();

  let ids = useMemo(
    () =>
      props.order.orderItems.map((item) => {
        return item._id;
      }),
    [props]
  );

  useEffect(() => {
    sendRequest(getItemsById(ids), `orderItems ${props.order._id}`);
  }, [sendRequest, props, ids]);

  // if (!item) {
  //   return <li></li>;
  // }
  return <p></p>;
  // <li className={classes.orderItem}>
  //   <span>{props.id}</span>
  //   <span>{props.date}</span>
  //   <span className={classes.itemSpec}>
  //     <img src={`data:image/png;base64,${item.image}`} alt="" />
  //     <p>{item.name}</p>
  //   </span>
  //   <span>{props.item.amount}</span>
  //   <span>{item.price}</span>
  //   <span>{props.item.total}</span>
  //   <span>{props.status}</span>
  // </li>
};

const OrderSection = (props) => {
  const [showOrder, setShowOrder] = useState(true);

  const onShowOrderHandler = () => {
    setShowOrder(true);
  };

  return (
    <section>
      <div className={classes.orderInfo} onClick={onShowOrderHandler}>
        <span>{props.order._id}</span>
        <span>{props.order.date}</span>
        <span>{props.order.totalPrice}</span>
        <span>{props.order.status}</span>
      </div>
      {showOrder && (
        <ul>
          <div className={classes.ordersContainerTop}>
            <span>Order Number</span>
            <span>Date</span>
            <span className={classes.itemSpec}>Item</span>
            <span>Quantity</span>
            <span>Unit Price</span>
            <span>Total Price</span>
            <span>Satus</span>
          </div>
          <ItemOrder key={props.order._id} order={props.order} />
        </ul>
      )}
    </section>
  );
};

const RecentOrders = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.order);
  const { sendRequest } = useHttp();

  useEffect(() => {
    if (!orders) {
      sendRequest(getOrders(token), "getOrders");
    }
  }, [sendRequest, orders, token]);

  const orderSection = orders
    ? orders.map((order) => {
        return <OrderSection order={order} />;
      })
    : null;

  return (
    <div className={classes.container}>
      <p>Recent Orders</p>
      <div className={classes.ordersContainer}>
        <div className={classes.ordersContainerTop}>
          <span>Order Number</span>
          <span>Date</span>
          <span>Total Price</span>
          <span>Status</span>
        </div>
        {orderSection}
      </div>
    </div>
  );
};

export default RecentOrders;

/* <section>
          <div className={classes.orderInfo} onClick={onShowOrderHandler}>
            <span>123456</span>
            <span>12/12/21</span>
            <span>80</span>
            <span>Delivered</span>
          </div>
          {showOrder && (
            <ul>
              <div className={classes.ordersContainerTop}>
                <span>Order Number</span>
                <span>Date</span>
                <span className={classes.itemSpec}>Item</span>
                <span>Quantity</span>
                <span>Unit Price</span>
                <span>Total Price</span>
                <span>Satus</span>
              </div>
              <li className={classes.orderItem}>
                <span>123456</span>
                <span>12/12/21</span>
                <span className={classes.itemSpec}>
                  <img src={apples} alt="" />
                  <p>Organic Pink Lady Apples</p>
                </span>
                <span>2</span>
                <span>$80</span>
                <span>$160</span>
                <span>Deliverd</span>
              </li>
              <li className={classes.orderItem}>
                <span>1234567</span>
                <span>30/05/2021</span>
                <span className={classes.itemSpec}>
                  <img src={apples} alt="" />
                  <p>Organic Pink Lady Apples</p>
                </span>
                <span>2</span>
                <span>$80</span>
                <span>$160</span>
                <span>Deliverd</span>
              </li>
              <li className={classes.orderItem}>
                <span>1234567</span>
                <span>30/05/2021</span>
                <span className={classes.itemSpec}>
                  <img src={apples} alt="" />
                  <p>Organic Pink Lady Apples</p>
                </span>
                <span>2</span>
                <span>$80</span>
                <span>$160</span>
                <span>Deliverd</span>
              </li>
            </ul>
          )}
        </section> */

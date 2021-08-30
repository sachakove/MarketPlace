import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

// @desc Create new order
// @route POST /api/orders
// @access Private
export const createOrder = async (req, res) => {
  const userId = req.user._id;
  const { date, totalPrice, items, status } = req.body.order;
  try {
    const order = await Order.create({
      user: userId,
      orderItems: items,
      totalPrice: totalPrice,
      date: date,
      status: status,
    });
    if (order) {
      res.json(order._id);
    } else {
      throw new Error("An error occurred while tried to create new order");
    }
  } catch (error) {
    res.send(`An error occurred while tried createOrder: ${error.message}`);
  }
};

// @desc Orders By User Id
// @route GET /api/orders
// @access Private
export const getOrdersByUserId = async (req, res) => {
  try {
    let orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.send(
      `An error occurred while tried getOrdersByUserId: ${error.message}`
    );
  }
};

const getItems = async (items) => {
  // console.log(`this is items: ${items}`);
  try {
    const newItems = await Product.find({ _id: { $in: items } });
    return newItems;
  } catch (error) {
    console.log(`the error is : ${error.message}`);
  }
};

const updateOrderItems = async (orders) => {
  let newOrders = [];
  await orders.map(async (order) => {
    let newOrder = {
      _id: order._id,
      date: order.date,
      totalPrice: order.totalPrice,
      status: order.status,
      orderItems: [],
    };
    let itemsIds = [];
    order.orderItems.map((item) => {
      itemsIds.push(item._id);
    });
    const updatedItems = await getItems(itemsIds);
    updatedItems.map((updatedItem) => {
      let item = order.orderItems.find((b) => b._id == updatedItem._id);
      updatedItem.amount = item.amount;
    });
    newOrder = {
      ...newOrder,
      orderItems: updatedItems,
    };
    newOrders.push(newOrder);
  });

  return newOrders;
};

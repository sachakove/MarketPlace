import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: { type: mongoose.Mixed, required: true },
    totalPrice: {
      type: Number,
      default: 0.0,
      required: true,
    },
    date: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

// [
//   {
//     name: { type: String, required: true },
//     image: { type: String, required: true },
//     qty: { type: Number, required: true },
//     price: { type: Number, required: true },
//     product: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Product",
//       required: true,
//     },
//   },
// ],
// shippingAddress: {
//   address: { type: String, required: true },
//   city: { type: String, required: true },
//   country: { type: String, required: true },
//   zip: { type: Number, required: true },
// },
// billingAddress: {
//   address: { type: String, required: true },
//   city: { type: String, required: true },
//   country: { type: String, required: true },
//   zip: { type: Number, required: true },
// },
// paymentMethod: {
//   type: String,
//   required: true,
// },
// paymentResult: {
//   id: { type: String },
//   status: { type: String },
//   update_time: { type: String },
//   email_address: { type: String },
// },

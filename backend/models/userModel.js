import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    shippingAddress: {
      street: { type: String, default: "" },
      city: { type: String, default: "" },
      country: { type: String, default: "" },
      zip: { type: String, default: "" },
    },
    billingAddress: {
      // type: mongoose.Mixed,
      street: { type: String, default: "" },
      city: { type: String, default: "" },
      country: { type: String, default: "" },
      zip: { type: String, default: "" },
    },
    payment: {
      // type: mongoose.Mixed,
      name: { type: String, default: "" },
      creditNumber: { type: String, default: "" },
      expiry: { type: String, default: "" },
    },
    orders: { type: mongoose.Mixed },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;

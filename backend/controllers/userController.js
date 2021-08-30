import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth user & token
// @route POST /api/users/login
// @access Public
export const authUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        shippingAddress: user.shippingAddress,
        billingAddress: user.billingAddress,
        payment: user.payment,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    next(error.message);
  }
};

// @desc Create New User
// @route POST /api/users
// @access Public
export const registerUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error("Email already exist");
    } else {
      const user = await User.create({
        email,
        password,
      });

      if (user) {
        res.json({
          _id: user._id,
          firstName: user.firstName,
          lastNAme: user.lastName,
          email: user.email,
          isAdmin: user.isAdmin,
          shippingAddress: user.shippingAddress,
          billingAddress: user.billingAddress,
          payment: user.payment,
          token: generateToken(user._id),
        });
      } else {
        throw new Error(
          `Somthing went wrong with the registration, please try again`
        );
      }
    }
  } catch (error) {
    next(error.message);
  }
};

// @desc User Profile
// @route POST /api/users/profile
// @access Private
export const getUserProfile = async (req, res, next) => {
  try {
    const user = req.user;
    if (user) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        shippingAddress: user.shippingAddress,
        billingAddress: user.billingAddress,
        payment: user.payment,
        isAdmin: user.isAdmin,
      });
    } else {
      throw new Error(`User not Found`);
    }
  } catch (error) {
    next(error.message);
  }
};

export const updateUserProfile = async (req, res, next) => {
  const userId = req.user._id;
  if (userId) {
    await User.findByIdAndUpdate(
      { _id: userId },
      {
        firstName: req.body.firstName ? req.body.firstName : req.user.firstName,
        lastName: req.body.lastName ? req.body.lastName : req.user.lastName,
        email: req.body.email ? req.body.email : req.user.email,
        billingAddress: req.body.billingAddress
          ? req.body.billingAddress
          : req.user.billingAddress,
        shippingAddress: req.body.shippingAddress
          ? req.body.shippingAddress
          : req.user.shippingAddress,
        payment: req.body.payment ? req.body.payment : req.user.payment,
      },
      { new: true, useFindAndModify: false },
      (err, result) => {
        if (err) {
          next(err.message);
        } else {
          res.json(result);
        }
      }
    );
  }
};

import bcrypt from "bcryptjs";

const users = [
  {
    firstName: "Admin",
    lastName: "User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    billingAddress: {
      street: "3785 Boone Crockett Lane",
      city: "Port Townsend, WA",
      country: "USA",
      zip: "98368",
    },
    shippingAddress: {
      street: "3785 Boone Crockett Lane",
      city: "Port Townsend, WA",
      country: "USA",
      zip: "98368",
    },
    payment: {
      name: "john Doe",
      creditNumber: 1234567891223795,
      expiry: "10 / 22",
    },
    isAdmin: true,
  },
  {
    firstName: "Ploni",
    lastName: "Almoni",
    email: "ploni@email.com",
    password: bcrypt.hashSync("123456", 10),
    billingAddress: {
      street: undefined,
      city: undefined,
      country: undefined,
      zip: undefined,
    },
    shippingAddress: {
      street: undefined,
      city: undefined,
      country: undefined,
      zip: undefined,
    },
    payment: {
      name: undefined,
      creditNumber: undefined,
      expiry: undefined,
    },
    isAdmin: false,
  },
  {
    firstName: "Israel",
    lastName: "Israeli",
    email: "israel@email.com",
    password: bcrypt.hashSync("123456", 10),
    billingAddress: {
      street: undefined,
      city: undefined,
      country: undefined,
      zip: undefined,
    },
    shippingAddress: {
      street: undefined,
      city: undefined,
      country: undefined,
      zip: undefined,
    },
    payment: {
      name: undefined,
      creditNumber: undefined,
      expiry: undefined,
    },
    isAdmin: false,
  },
];

export default users;

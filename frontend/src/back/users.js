import userPic from "../assets/johndoe.png";

export const user = {
  id: 111,
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@email.com",
  image: userPic,
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
  recentCarts: [],
};

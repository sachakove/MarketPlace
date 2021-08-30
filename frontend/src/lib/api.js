export const userLogin = (email, password) => {
  return {
    url: "/api/users/login",
    method: "POST",
    body: { email: email, password: password },
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const userRegister = (email, password) => {
  return {
    url: "/api/users/",
    method: "POST",
    body: { email: email, password: password },
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const getCategoriesApi = () => {
  return { url: "/api/products/categories" };
};

export const getSubById = (id) => {
  return { url: `/api/products/categories/${id}` };
};

export const getMainProductsApi = () => {
  return { url: `/api/products/mainproducts` };
};

export const getSubCategoriesApi = () => {
  return { url: `/api/products/subcategories` };
};

export const getCategory = () => {
  return { url: `api/products/categories/:category` };
};

export const getSubCategory = (id) => {
  return { url: `api/products/subcategories/${id}` };
};

export const getItemById = (id) => {
  return { url: `api/products/${id}` };
};

export const getItemsById = (ids) => {
  return {
    url: `/api/products/many`,
    body: { ids: ids },
  };
};

export const getItemsByCategoryApi = (category) => {
  return { url: `api/products/byCategory/${category}` };
};

export const getItemsBySubApi = (sub) => {
  return { url: `api/products/bysubcategory/${sub}` };
};

export const getSearchProducts = (keywords) => {
  return { url: `/api/products/search/${keywords}` };
};

export const getUserById = (token) => {
  return {
    url: "/api/users/profile",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const updateUser = ({
  token,
  firstName,
  lastName,
  email,
  billingAddress,
  shippingAddress,
  payment,
}) => {
  return {
    url: "/api/users/profile",
    method: "PATCH",
    body: {
      firstName: firstName ? firstName : null,
      lastName: lastName ? lastName : null,
      email: email ? email : null,
      billingAddress: billingAddress ? billingAddress : null,
      shippingAddress: shippingAddress ? shippingAddress : null,
      payment: payment ? payment : null,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

export const createOrder = ({ token, order }) => {
  return {
    url: "/api/orders/",
    method: "POST",
    body: { order: order },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getOrders = (token) => {
  return {
    url: "/api/orders",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

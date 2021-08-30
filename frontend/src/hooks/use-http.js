import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { httpActions } from "../store/http-store";
import { userActions } from "../store/user-store";
import { productActions } from "../store/product-store";
import { orderActions } from "../store/order-store";

const useHttp = () => {
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    async (requestConfig, requestData) => {
      if (requestData === "login" || requestData === "register") {
        console.log(`this is requestData: ${requestData}`);
        dispatch(userActions.send());
      } else {
        dispatch(httpActions.send());
      }

      if (requestData === "checkLog") {
        dispatch(userActions.checkLoggedIn());
        dispatch(httpActions.success());
      } else if (requestData === "clearItems") {
        dispatch(productActions.clearItems());
        dispatch(httpActions.success());
      } else {
        try {
          const response = await fetch(requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : "GET",
            body: requestConfig.body
              ? JSON.stringify(requestConfig.body)
              : null,
            headers: requestConfig.headers ? requestConfig.headers : {},
          });

          if (!response.ok) {
            throw await response.json();
          }

          const loadedData = await response.json();

          switch (requestData.split(" ")[0]) {
            case "login":
              dispatch(userActions.login(loadedData));
              dispatch(userActions.success());
              return;
            case "register":
              dispatch(userActions.register(loadedData));
              dispatch(userActions.success());
              return;
            case "categories":
              dispatch(productActions.getCategories(loadedData));
              dispatch(httpActions.success());
              return;
            case "mainProducts":
              dispatch(productActions.getMainProducts(loadedData));
              dispatch(httpActions.success());
              return;
            case "subCategories":
              dispatch(productActions.getSubCategories(loadedData));
              dispatch(httpActions.success());
              return;
            case "items":
              console.log(`here2`);
              dispatch(productActions.getItems(loadedData));
              dispatch(httpActions.success());
              return;
            case "item":
              dispatch(productActions.getItem(loadedData));
              dispatch(httpActions.success());
              return;
            case "userDetails":
              dispatch(userActions.getUserDetails(loadedData));
              dispatch(httpActions.success());
              return;
            case "updateContact":
              dispatch(userActions.updateUserContact(loadedData));
              dispatch(httpActions.success());
              return;
            case "newOrder":
              // #################################
              dispatch(httpActions.success());
              return;
            case "getOrders":
              dispatch(orderActions.getOrders(loadedData));
              return;
            case "orderItems":
              // ###########################
              return console.log(loadedData);
            default:
              return dispatch(httpActions.success());
          }
        } catch (error) {
          requestData === "login" || "register"
            ? dispatch(
                userActions.error(
                  error.message || "Somthing went wrong, please try again"
                )
              )
            : dispatch(
                httpActions.error(
                  error.message || "Somthing went wrong, please try again"
                )
              );
        }
      }
    },
    [dispatch]
  );

  return { sendRequest };
};

export default useHttp;

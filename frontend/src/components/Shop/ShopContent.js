import { useLocation, useParams } from "react-router-dom";
import classes from "./ShopContent.module.css";
import ItemCard from "../UI/ItemCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import {
  getCategoriesApi,
  getItemsByCategoryApi,
  getItemsBySubApi,
  getSearchProducts,
  getSubCategoriesApi,
} from "../../lib/api";

const ShopContent = (props) => {
  const location = useLocation();
  const params = useParams();
  const queryParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const { categories, subCategories, items } = useSelector(
    (state) => state.product
  );
  const { sendRequest } = useHttp();
  const { category, keywords } = params;
  const subCategoryParam = queryParams.get("sub");

  useEffect(() => {
    if (!categories) {
      sendRequest(getCategoriesApi(), "categories");
    } else if (!subCategories) {
      sendRequest(getSubCategoriesApi(), "subCategories");
    } else if (!items || items.length <= 0) {
      const fetchItemsByCategory = async () => {
        const chosenCategory = await categories.find(
          (e) => e.category === category
        );
        chosenCategory
          ? sendRequest(getItemsByCategoryApi(chosenCategory._id), "items")
          : fetchItemsBySearch();
      };
      const fetchItemsBySub = async () => {
        const chosenSub = await subCategories.find(
          (e) => e.name === subCategoryParam
        );
        sendRequest(getItemsBySubApi(chosenSub._id), "items");
      };

      const fetchItemsBySearch = async () => {
        sendRequest(getSearchProducts(keywords), "items");
      };

      keywords
        ? fetchItemsBySearch()
        : subCategoryParam
        ? fetchItemsBySub()
        : fetchItemsByCategory();
    }
  }, [
    keywords,
    dispatch,
    subCategoryParam,
    categories,
    category,
    subCategories,
    items,
    sendRequest,
  ]);

  const itemCard = items ? (
    items.map((item) =>
      Object.values(item).length !== 0 ? (
        <ItemCard
          key={item._id}
          item={item}
          showItem={props.onShowItemHandler}
          hideModal={props.onHideItemHandler}
        />
      ) : (
        <h1>No products found</h1>
      )
    )
  ) : (
    <LoadingSpinner />
  );
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.top_title}>
          <span>{keywords ? "Search results" : category}</span>
        </div>
        <div className={classes.topSub}>
          {subCategoryParam && <span>{subCategoryParam}</span>}
          <hr className={classes.categoryHr} />
        </div>
      </div>
      <main className={classes.mainContent}>{itemCard}</main>
    </div>
  );
};

export default ShopContent;

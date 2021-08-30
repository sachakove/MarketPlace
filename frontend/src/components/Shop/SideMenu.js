import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCategoriesApi } from "../../lib/api";

import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./SideMenu.module.css";
import useHttp from "../../hooks/use-http";
import { useSelector } from "react-redux";

const SubCategories = (props) => {
  return (
    <li
      className={classes.sideSubCategoryName}
      onClick={props.onSubCategoryHandler.bind(this, {
        category: props.category,
        subCategory: props.subCategory.name,
      })}
    >
      {props.subCategory.name}
    </li>
  );
};

const SideMenu = (props) => {
  const history = useHistory();
  const { status, error } = useSelector((state) => state.http);
  const { categories } = useSelector((state) => state.product);
  const { sendRequest } = useHttp();

  useEffect(() => {
    if (!categories) {
      sendRequest(getCategoriesApi(), "categories");
    }
  }, [categories, sendRequest]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    console.log(error);
  }

  const subCategoryHandler = (obj) => {
    sendRequest(null, "clearItems");
    history.push(`/${obj.category}?sub=${obj.subCategory}`);
  };

  const categoryName = categories
    ? categories.map((category) => {
        const subCategories = category.subCategories.map((sub) => {
          return (
            <SubCategories
              key={sub._id}
              subCategory={sub}
              category={category.category}
              onSubCategoryHandler={subCategoryHandler}
            />
          );
        });

        return (
          <section className={classes.categoryBox} key={category._id}>
            <span className={classes.categoryTop}>
              <ul className={classes.sideCategoryName}>{category.category}</ul>
              <hr />
            </span>
            {subCategories}
          </section>
        );
      })
    : null;
  return (
    <menu
      className={`${classes.sideMenu} ${
        props.menuButton
          ? props.menuState
            ? classes.active
            : classes.inactive
          : ""
      }`}
    >
      {categoryName}
    </menu>
  );
};

export default SideMenu;

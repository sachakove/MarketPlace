import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/use-http";
import { getCategoriesApi } from "../../lib/api";
import { Fragment } from "react";

const MainNavigation = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scollWidth, setScollWidth] = useState(0);
  let categoryWidth = (window.innerWidth / 100) * 8.333;
  const categories = useSelector((state) => state.product.categories);
  const { sendRequest } = useHttp();

  const adjast = () => {
    setScollWidth(0);
    window.innerWidth <= 1200 ? setSmallScreen(true) : setSmallScreen(false);
    window.innerWidth <= 770 ? setShowMenu(true) : setShowMenu(false);
    return;
  };

  useEffect(() => {
    adjast();
    if (!categories) {
      sendRequest(getCategoriesApi(), "categories");
    }
    window.addEventListener("resize", adjast);
  }, [categories, sendRequest]);

  const onRightHandler = () => {
    if (scollWidth !== 0) {
      setScollWidth(scollWidth + categoryWidth);
    } else return;
  };

  const onLeftHandler = () => {
    if (
      (window.innerWidth / 6).toString().split(".")[0] >
      -(scollWidth - 1).toString().split(".")[0]
    ) {
      setScollWidth(scollWidth - categoryWidth);
    } else return;
  };

  const onCategoryHandler = () => {
    sendRequest(null, "clearItems");
  };

  const categoriesData = categories
    ? categories.map((item) => {
        return (
          <Link
            to={`/${item.category}`}
            onClick={onCategoryHandler}
            className={classes.category}
          >
            <li key={item._id} className={classes.categoryBox}>
              {!smallScreen && (
                <img
                  className={classes.categoryImage}
                  src={`data:image/png;base64,${item.image}`}
                  alt="category"
                />
              )}
              <span className={classes.link}>{item.category}</span>
            </li>
          </Link>
        );
      })
    : null;

  return (
    <nav>
      <div className={classes.iconBoxLeft}>
        <img
          src={arrowLeft}
          className={classes.icon}
          alt=""
          onClick={onRightHandler}
        />
      </div>
      <ul className={classes.navBox} style={{ left: `${scollWidth}px` }}>
        {categoriesData}
      </ul>

      <div className={classes.iconBoxRight}>
        <img
          src={arrowRight}
          className={`${classes.icon} ${classes.iconRight}`}
          alt=""
          onClick={onLeftHandler}
        />
      </div>
    </nav>
  );
};

export default MainNavigation;

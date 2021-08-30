import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./Section.module.css";
import ItemCard from "./ItemCard";
import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { getMainProductsApi } from "../../lib/api";

const Section = (props) => {
  const mainProducts = useSelector((state) => state.product.mainProducts);
  const { sendRequest } = useHttp();

  useEffect(() => {
    if (!mainProducts) {
      sendRequest(getMainProductsApi(), "mainProducts");
    }
  }, [mainProducts, sendRequest]);

  return mainProducts ? (
    mainProducts.map((product) => {
      return (
        <section key={product._id} className={classes.itemsSection}>
          <div className={classes.top}>
            <div className={classes.top_title}>
              <span>{product.category}</span>
            </div>
            <hr className={classes.categoryHr} />
            <div className={classes.link}>
              <Link to={`/${product.category}`}>View All</Link>
            </div>
          </div>
          <div className={classes.content}>
            {product.items.map((item) =>
              item ? (
                <ItemCard
                  key={item._id}
                  item={item}
                  showItem={props.onShowItemHandler}
                />
              ) : null
            )}
          </div>
        </section>
      );
    })
  ) : (
    <div />
  );
};

export default Section;

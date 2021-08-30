import classes from "./Ads.module.css";
import add1 from "../../assets/firstAdd.png";
import add2 from "../../assets/secondAdd.png";
import add3 from "../../assets/thirdAdd.png";
import { useEffect, useState } from "react";

const Ads = () => {
  const [adjast, setAdjast] = useState(false);
  const smallScreen = () => {
    window.innerWidth <= 800 ? setAdjast(true) : setAdjast(false);
  };

  useEffect(() => {
    smallScreen();
    window.addEventListener("resize", smallScreen);
    return window.removeEventListener("rezie", smallScreen);
  }, []);

  return (
    <section className={classes.section}>
      {!adjast && (
        <div className={classes.firstAdd}>
          <img src={add1} alt="add1" />
        </div>
      )}
      <div className={classes.slideAdds}>
        <img src={add2} alt="add2" />
        <img src={add3} alt="add3" />
      </div>
    </section>
  );
};

export default Ads;

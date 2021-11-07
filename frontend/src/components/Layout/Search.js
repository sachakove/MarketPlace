import { Fragment } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import searchIcon from "../../assets/icons/Icon feather-search.svg";
import useHttp from "../../hooks/use-http";
import classes from "./Search.module.css";
const Search = (props) => {
  const [keywords, setKeywords] = useState("");
  const [active, setActive] = useState(false);
  const history = useHistory();
  const { sendRequest } = useHttp();

  //
  const submitHandler = (e) => {
    e.preventDefault();

    if (keywords.trim()) {
      sendRequest(null, "clearItems");

      history.push(`/search/${keywords}`);
      setKeywords("");
    } else {
      history.push(`/`);
    }
  };

  const handleClick = (e) => {
    if (!props.smallScreen) {
      submitHandler(e);
    } else {
      if (active) {
        submitHandler(e);
        setActive(false);
      } else {
        setActive(true);
      }
    }
  };
  return (
    <Fragment>
      <form className={classes.search} onSubmit={submitHandler}>
        <img
          src={searchIcon}
          alt="search"
          className={`${classes.searchIcon} ${
            props.smallScreen
              ? active
                ? classes.searchIconActive
                : classes.searchIconSmallScreen
              : ""
          }`}
          onClick={handleClick}
        />
        <input
          type="text"
          placeholder="Search"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className={`${classes.searchBox} ${
            props.smallScreen
              ? active
                ? classes.activeBox
                : classes.smallScreen
              : ""
          }`}
        ></input>
      </form>
    </Fragment>
  );
};

export default Search;

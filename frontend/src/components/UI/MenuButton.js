import classes from "./MenuButton.module.css";

const MenuButton = (props) => {
  const changeState = () => {
    props.changeMenuState();
  };
  return (
    <div className={classes.buttonContainer} onClick={changeState}>
      <div
        className={`${classes.bar1} ${
          props.changeButton ? classes.change : null
        }`}
      />
      <div
        className={`${classes.bar2} ${
          props.changeButton ? classes.change : null
        }`}
      />
      <div
        className={`${classes.bar3} ${
          props.changeButton ? classes.change : null
        }`}
      />
    </div>
  );
};

export default MenuButton;

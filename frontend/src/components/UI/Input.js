import classes from "./Input.module.css";

const Input = (props) => {
  const {
    label,
    name,
    type,
    value,
    handleChange,
    errorMessage,
    valid,
    ...rest
  } = props;

  return (
    <div className={classes.input}>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={name}
        onChange={handleChange}
        {...rest}
      />
      {errorMessage && !valid && (
        <span className={classes.error}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;

import { useEffect, useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const [valid, setValid] = useState(true);
  const errors = props.errors;
  const name = props.input.name;
  useEffect(() => {
    errors[name] ? setValid(false) : setValid(true);
  }, [errors, name]);

  return (
    <div className={classes.input}>
      {valid ? (
        <input {...props.input} />
      ) : (
        <input
          {...props.input}
          style={{ borderColor: "#ef9a9a", backgroundColor: "#ffcdd2" }}
        />
      )}
    </div>
  );
};

export default Input;

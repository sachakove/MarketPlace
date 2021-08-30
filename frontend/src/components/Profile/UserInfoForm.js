import classes from "./UserInfoForm.module.css";
import Input from "../UI/Input";

const UserInfoForm = (props) => {
  return (
    <div className={classes.infoContet}>
      {props.inputConfigs.map((config) => {
        return (
          <Input
            key={config.name}
            errors={props.errors}
            input={{
              type: "text",
              name: config.name,
              placeholder: config.placeholder,
              value: config.value,
              onChange: config.onChange,
              required: true,
            }}
          />
        );
      })}
    </div>
  );
};

export default UserInfoForm;

import { useRef, useState } from "react";
import classes from "./AccountHeader.module.css";
import editIcon from "../../assets/icons/edit.svg";
import { useSelector } from "react-redux";
import johndoe from "../../assets/johndoe.png";
import { updateUser } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import useForm from "../../hooks/use-Form";
import { emailValidate } from "../../lib/formValidationRules";

const AccountHeader = () => {
  const [edit, setEdit] = useState(false);
  // const userFullNameInput = useRef();
  // const userEmailInput = useRef();
  const { user, token } = useSelector((state) => state.auth);
  const { sendRequest } = useHttp();
  const [fullName, setFullName] = useState(
    `${user.firstName} ${user.lastName}`
  );
  const [email, setEmail] = useState(user.email);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (edit) {
      const firstName = fullName.split(" ")[0];
      const lastName = fullName.split(" ")[1];
      await sendRequest(
        updateUser({ token, firstName, lastName, email }),
        "updateContact"
      );
    }
    setEdit(!edit);
  };

  return (
    <form onSubmit={submitHandler} className={classes.accountHeader}>
      <div className={classes.user}>
        <img src={user.image ? user.image : johndoe} alt="profilePic" />
        {/* ************************************************************ */}
        {!edit ? (
          <span className={classes.userInfo}>
            <span className={classes.userName}>
              {user.firstName ? `${user.firstName} ${user.lastName}` : `---`}
            </span>
            <span className={classes.userEmail}>{user.email}</span>
          </span>
        ) : (
          <span className={classes.userInfo}>
            <input
              className={classes.userNameInput}
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className={classes.userEmailInput}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
        )}
      </div>

      <button className={classes.btnEditAccout} type="submit">
        <img src={editIcon} alt="edit" />
        {!edit ? "Edit" : "Save"} Account Info
      </button>
    </form>
  );
};

export default AccountHeader;

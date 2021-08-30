import { useRef, useState } from "react";
import classes from "./AccountHeader.module.css";
import editIcon from "../../assets/icons/edit.svg";
import { useSelector } from "react-redux";
import johndoe from "../../assets/johndoe.png";
import { updateUser } from "../../lib/api";
import useHttp from "../../hooks/use-http";

const AccountHeader = () => {
  const [edit, setEdit] = useState(false);
  const userFullNameInput = useRef();
  const userEmailInput = useRef();
  const { user, token } = useSelector((state) => state.auth);
  const { sendRequest } = useHttp();

  const submitHandler = (event) => {
    event.preventDefault();

    if (edit) {
      const firstName = userFullNameInput.current.value.split(" ")[0];
      const lastName = userFullNameInput.current.value.split(" ")[1];
      const email = userEmailInput.current.value;
      sendRequest(
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
              defaultValue={`${user.firstName} ${user.lastName}`}
              ref={userFullNameInput}
            />
            <input
              className={classes.userEmailInput}
              type="text"
              defaultValue={user.email}
              ref={userEmailInput}
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

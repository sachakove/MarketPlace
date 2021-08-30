import classes from "./MainProfile.module.css";
import AccountHeader from "./AcountHeader";
import UserInfo from "./UserInfo";
import RecentOreder from "./RecentOrders";
import { useSelector } from "react-redux";

const MainProfile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <h1 style={{ alignSelf: "center" }}>Please login or register</h1>;
  }

  return (
    <div className={classes.container}>
      <AccountHeader />
      <UserInfo />
      {/* <RecentOreder /> */}
    </div>
  );
};

export default MainProfile;

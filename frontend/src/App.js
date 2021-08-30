import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShopScreen from "./screens/ShopScreen";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import useHttp from "./hooks/use-http";
import { getCategoriesApi, getUserById } from "./lib/api";

function App() {
  const { status, error } = useSelector((state) => state.http);
  const { mainProducts, categories } = useSelector((state) => state.product);
  const { token, user } = useSelector((state) => state.auth);
  const { sendRequest } = useHttp();

  useEffect(() => {
    if (!user) {
      token
        ? sendRequest(getUserById(token), "userDetails")
        : sendRequest(null, "checkLog");
    }

    if (!categories) {
      sendRequest(getCategoriesApi(), "categories");
    }
  }, [sendRequest, categories, mainProducts, token, user]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }
  if (error && status === "completed") {
    return <p>{error}</p>;
  }

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MainScreen />
        </Route>

        <Route path="/profile">
          <ProfileScreen />
        </Route>
        <Route path="/:category" exact>
          <ShopScreen />
        </Route>
        <Route path="/search/:keywords" component={ShopScreen} />
      </Switch>
    </Layout>
  );
}

export default App;

import Ads from "../components/Ads/Ads";
import MainNavigation from "../components/Layout/MainNavigation";
import Section from "../components/UI/Section";
import { Fragment, useState } from "react";
import ItemSpec from "../components/Items/ItemSpec";
import { useSelector } from "react-redux";

const MainScreen = (props) => {
  const [item, setItem] = useState(null);
  const showItemModal = useSelector((state) => state.modal.showModalItem);

  const showItemHandler = (chosenItem) => {
    setItem(chosenItem);
  };

  const hideItemHandler = () => {
    setItem(null);
  };

  return (
    <Fragment>
      <Ads />
      <MainNavigation />
      <Section onShowItemHandler={showItemHandler} />
      {item && showItemModal && (
        <ItemSpec item={item} onHideModal={hideItemHandler} />
      )}
    </Fragment>
  );
};

export default MainScreen;

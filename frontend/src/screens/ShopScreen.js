import ShopContent from "../components/Shop/ShopContent";
import SideMenu from "../components/Shop/SideMenu";
import ItemSpec from "../components/Items/ItemSpec";
import { useEffect, useState } from "react";
import MenuButton from "../components/UI/MenuButton";

const ShopScreen = () => {
  const [item, setItem] = useState(null);
  const [menuButton, setMenuButton] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const showItemHandler = (chosenItem) => {
    setItem(chosenItem);
  };

  const hideItemHandler = () => {
    setItem(null);
  };

  const showButton = () => {
    window.innerWidth <= 625 ? setMenuButton(true) : setMenuButton(false);
  };
  const changeMenuState = () => {
    setMenuState(!menuState);
    console.log(menuState);
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);

    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <main className={"shopLayout"}>
      <ShopContent
        onShowItemHandler={showItemHandler}
        onHideItemHandler={hideItemHandler}
      />

      {item && <ItemSpec item={item} onHideModal={hideItemHandler} />}
      {menuButton && <MenuButton changeMenuState={changeMenuState} />}
      <SideMenu menuState={menuState} menuButton={menuButton} />
    </main>
  );
};

export default ShopScreen;

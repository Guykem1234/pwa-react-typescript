import React from "react";
import InstallButton from "./InstallButton";
import Navbar from "./components/Navbar";
import { observer } from "mobx-react" // Or "mobx-react".
import MainStore from "./store/MainStore";
import Login from "./components/Login";
import InventoryItem from "./components/InventoryItem";

const Home: React.FC = () => {
  async function askUserPermission() {
    return await Notification.requestPermission();
  }
  askUserPermission().then(x => console.log(x));

  const store = new MainStore()

  return (
    <div>
      <Navbar store={store.navigationStore}/>
      <div>
        <InventoryItem/>
      </div>
      <InstallButton />
    </div>

  )
};

export default observer(Home);
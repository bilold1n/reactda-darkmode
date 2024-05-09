import React, { useContext } from "react";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
import { DarkMode } from "../../context/context";
function Home() {
  const {
    state: { lanuage },
  } = useContext(DarkMode);
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}
export default Home;

import React from "react";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
function Home() {
  console.log(1);
  return (
    <>
      <Header />
      <h1 className="title">Hammasi joyida</h1>
      <Outlet></Outlet>
    </>
  );
}
export default Home;

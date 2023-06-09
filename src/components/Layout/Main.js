import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header/Header";

const Main = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

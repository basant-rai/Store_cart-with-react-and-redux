import React from "react";
import Nav from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const DefaultLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;

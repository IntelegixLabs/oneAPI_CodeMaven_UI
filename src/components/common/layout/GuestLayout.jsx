import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useStateContext } from "../../../context/ContextProvider.jsx";
import Navbar from "../../guest/Navbar.jsx";
import Footer from "../../guest/Footer.jsx";

export default function GuestLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

import { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "./../../../context/ContextProvider.jsx";

import Navbar from "../../user/Navbar.jsx";
import Footer from "../../user/Footer.jsx";

export default function DefaultLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container-fluid">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

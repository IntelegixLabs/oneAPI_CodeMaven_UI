import { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useStateContext } from "../../../context/ContextProvider.jsx";

export default function GuestLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <Fragment>
      <h1>Guest Navbar</h1>
      <Outlet />
    </Fragment>
  );
}

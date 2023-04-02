import { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

export default function DefaultLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <Fragment>
      <h1>User Navbar</h1>
      <Outlet />
    </Fragment>
  );
}

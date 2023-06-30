import { Link, Navigate, useLocation } from "react-router-dom";
import LOGO from "../../assets/images/logo512.png";
import Api from "./../../Api/Api.js";

import { useStateContext } from "./../../context/ContextProvider.jsx";
import { useEffect } from "react";

export default function Navbar() {
  const { user, token, setUser, setToken } = useStateContext();

  const location = useLocation().pathname;

  const logout = e => {
    e.preventDefault();
    setUser({});
    setToken(null);
  };

  useEffect(() => {
    Api.get("/user/get-user-details").then((response) => {
      setUser(response.data.userDetails);
    });
  }, []);

  return (
    <nav className="navbar bg-body-tertiary navbar-expand-md sticky-top">
      <Link className="navbar-brand ms-2 ms-md-0" to="/">
        <img
          src={LOGO}
          style={{ width: "32px", marginRight: "4px" }}
          alt="logo"
        />
        {process.env.REACT_APP_NAME}
      </Link>
      <span
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars fa-lg fa-fw"></i>
      </span>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            {process.env.REACT_APP_NAME}
          </h5>
          <button
            type="button"
            className="btn-close-offcanvas"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-solid fa-times fa-fw"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link
                className={`nav-link ${
                  location === "/health-activity" && "active"
                }`}
                to="/health-activity"
              >
                <i className="fa-solid fa-heart-pulse fa-fw"></i> Activity
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link
                className={`nav-link ${
                  location === "/health-history" && "active"
                }`}
                to="/health-history"
              >
                <i className="fa-solid fa-circle-info fa-fw"></i> History
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-user-circle fa-fw"></i>{" "}
                {user.userName}
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="health-activity/heart-attack-risk-predictor"
                  >
                    Settings
                  </Link>
                  <Link className="dropdown-item" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

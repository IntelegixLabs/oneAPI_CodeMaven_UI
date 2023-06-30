import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateContext } from "./../../context/ContextProvider.jsx";
import Api from "../../Api/Api";

export default function ViewLogin() {
  const navigate = useNavigate();

  const { setUser, setToken } = useStateContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, showLoginErrorMessage] = useState(false);

  const handleInputChange = (e) => {
    const fieldName = e.target.name;

    if (fieldName === "username") {
      setUsername(e.target.value);
    }

    if (fieldName === "password") {
      setPassword(e.target.value);
    }

    showLoginErrorMessage(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      showLoginErrorMessage(true);
      return;
    }

    const payload = {
      userName: username,
      password: password,
    };

    await axios
      .post(process.env.REACT_APP_API + "/user/login", payload)
      .then((response) => {
        let userData = response.data;

        if (userData?.token) {
          setToken(userData.token);

          Api.get("/user/get-user-details").then((res) => {
            let userDetails = res.data.userDetails;

            setUser(userDetails);

            navigate('/dashboard');
            return;
          });
        }

        showLoginErrorMessage(true);
      })
      .catch((error) => showLoginErrorMessage(true));

    return;
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
        <div className="mt-5 row">
          <div className="col-6 col-md-4 col-lg-4 mx-auto">
            <div className="card card-body">
              <h3>Login</h3>
              <p>Don't have an account? <Link to="/register">Create account</Link></p>
              {loginError && (
                <p className="text-center text-danger">
                  Wrong email or password
                </p>
              )}
              <input
                type="text"
                className="mt-3 form-control"
                name="username"
                placeholder="username"
                onChange={(e) => handleInputChange(e)}
              />
              <input
                type="password"
                className="mt-3 form-control"
                name="password"
                placeholder="password"
                onChange={(e) => handleInputChange(e)}
              />
              <div className="mt-3 d-grid">
                <button className="btn btn-success" onClick={onSubmit}>
                  Let me in <i className="fa-solid fa-arrow-right fa-fw"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

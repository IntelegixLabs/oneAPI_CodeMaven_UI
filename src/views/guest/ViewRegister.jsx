import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateContext } from "../../context/ContextProvider.jsx";
import Api from "../../Api/Api.js";

export default function ViewRegister() {
  const navigate = useNavigate();
  const { setUser, setToken } = useStateContext();

  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [signupError, showSignupErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const fieldName = e.target.name;

    if (fieldName === "username") {
      setUsername(e.target.value);
    }

    if (fieldName === "userId") {
      setUserId(e.target.value);
    }

    if (fieldName === "password") {
      setPassword(e.target.value);
    }

    if (fieldName === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }

    showSignupErrorMessage("");
  };

  const isUsernameExist = (uname) => {
    const payload = {
      userName: uname,
    };

    axios
      .post(process.env.REACT_APP_API + "/user/checkUsername", payload)
      .then((response) => {
        return response.data.resp;
      })
      .catch((err) => {
        showSignupErrorMessage(
          "Username is not available! Select different username."
        );
      });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!username || !userId || !password || !confirmPassword) {
      showSignupErrorMessage("Empty fields!");
      return;
    }

    if (isUsernameExist(username)) {
      showSignupErrorMessage(
        "Username is not available! Select different username."
      );
      return;
    }

    if (password !== confirmPassword) {
      showSignupErrorMessage("Passwords do not match!");
      return;
    }

    const payload = {
      userName: username,
      userID: userId,
      password: password,
      confirmPassword: confirmPassword,
    };

    await axios
      .post(process.env.REACT_APP_API + "/user/signup", payload)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => showSignupErrorMessage(true));

    return;
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-4 mx-auto">
            <div className="mt-5 card card-body">
              <h3 className="mb-0">Create Account</h3>
              <p className="mt-0">
                Already have an account? <Link to="/login">Login here</Link>
              </p>
              {signupError && (
                <p className="mt-2 text-center text-danger">{signupError}</p>
              )}
              <input
                type="text"
                className="mt-2 form-control"
                name="username"
                placeholder="Username"
                onChange={(e) => handleInputChange(e)}
              />
              <input
                type="text"
                className="mt-3 form-control"
                name="userId"
                placeholder="Email address"
                onChange={(e) => handleInputChange(e)}
              />

              <div className="mt-2 row g-2">
                <div className="col-lg-6">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>

              <div className="mt-3 d-grid">
                <button className="btn btn-primary py-3" onClick={onSubmit}>
                  <i className="fa-solid fa-user-plus fa-fw"></i> Create my
                  account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

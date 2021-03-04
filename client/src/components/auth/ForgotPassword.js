import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
import AuthContext from "../../context/auth/authContext";

const ForgotPassword = () => {
  const authContext = useContext(AuthContext);
  const {loadFogotUser } = authContext;

  const [email, setEmail] = useState("");

  const onChange = (e) => setEmail(e.target.value);

  const onSubmitEmail = (e) => {
    e.preventDefault();
    loadFogotUser({email: email});
  };

  return (
    <div id="login">
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            
              <div id="login-box" className="col-md-12">
                <form onSubmit={onSubmitEmail}>
                  <h3 className="text-center text-4 py-2">Login</h3>
                  <div className="form-group pt-3">
                    <label htmlFor="email" className="text-2">
                      Enter Your Email Address
                    </label>
                    <br />
                    <input
                      className="form-control"
                      id="username"
                      type="email"
                      name="email"
                      required
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group pb-5 ">
                    <input
                      type="submit"
                      value="Search for the User"
                      className="btn bg-4 btn-md text-light"
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    <Link
                      to={"/register"}
                      className="text-3 font-weight-bold link"
                    >
                      Register
                    </Link>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

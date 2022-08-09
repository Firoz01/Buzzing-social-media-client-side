import React from "react";
import "./Auth.css";

import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signUp, logIn } from "../../Action/AuthAction";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const navigate = useNavigate();

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmPass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  return (
    <div className="Auth">
      {/* left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Buzzing</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* right side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log in"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="userName"
              placeholder="Usernames"
              onChange={handleChange}
              value={data.userName}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmPass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmPass}
              />
            )}
          </div>
          {isSignUp && (
            <span
              style={{
                display: confirmPass ? "none" : "block",
                color: "red",
                fontSize: "12px",
              }}
            >
              *Confirm Password is not same
            </span>
          )}
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

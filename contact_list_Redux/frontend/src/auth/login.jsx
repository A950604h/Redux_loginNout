import React from "react";
import { useDispatch } from "react-redux";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/authSlice";
// import { findOneLogin } from "../redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const Input = email;
    dispatch(loginUser(Input));

    // navigate("/ContactList");
  };
  return (
    <>
       <div className="login"> 
        <h2>Login</h2>
        {/* <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label> <br />
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />  */}
        <br />
        <br />
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <br />
        <br />
        <button
          type="register  "
          className="btn btn-primary"
          onClick={(e) => {
            navigate("/register");
          }}
        >Register
        </button>
      </div>
    </>
  );
};

export default Login;

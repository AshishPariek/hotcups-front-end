import React from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const regitserHandler = () => {
    navigate("/Register");
  };

  return (
    <div className="loginFormContainer">
      <from className="loginForm">
        <div className="fromHeader"></div>
        <div className="formBody">
          <label>Email</label>
          <input type="text" placeholder="Email" />
          <label>Password</label>
          <input type="text" placeholder="Password" />
          <button>LogIn</button>
          <button onClick={regitserHandler}>Register</button>
        </div>
      </from>
    </div>
  );
};

export default LogIn;

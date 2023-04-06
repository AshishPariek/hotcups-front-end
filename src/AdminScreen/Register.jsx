import React from "react";

const Register = () => {
  return (
    <div className="loginFormContainer">
      <from className="loginForm">
        <div className="fromHeader"></div>
        <div className="formBody">
          <label>Name</label>
          <input type="text" placeholder="Name" />
          <label>Email</label>
          <input type="text" placeholder="Email" />
          <label>Password</label>
          <input type="text" placeholder="Password" />
          <button>Register</button>
        </div>
      </from>
    </div>
  );
};

export default Register;

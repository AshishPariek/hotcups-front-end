import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const LogIn = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const loginhandler = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (login.email || login.password) {
      axios
        .post("http://localhost:4500/hotcup/admin/login", login)
        .then((res) => {
          if (res.data.value === "-1") {
            toast.error("You aren't Authrised");
          } else {
            if (res.data.value === "1") {
              toast.success("Login Suceed");
              console.log(res.data);
              localStorage.setItem("admin", JSON.stringify(res.data.auth));
              navigate("/Dashboard");
            } else {
              toast.error("Please Check Password");
            }
          }
        });
    } else {
      toast.error("Fields Can't Empty");
    }
  };

  const regitserHandler = () => {
    navigate("/Register");
  };

  return (
    <div className="loginFormContainer">
      <form className="loginForm">
        <div className="formHeader">
          <h2>LOG IN</h2>
        </div>
        <div className="formBody">
          <label>Email</label>
          <input
            type="text"
            value={login.email}
            name="email"
            onChange={loginhandler}
            placeholder="Email"
          />
          <label>Password</label>
          <input
            type="password"
            value={login.password}
            name="password"
            onChange={loginhandler}
            placeholder="Password"
          />
          <button onClick={submitHandler}>LogIn</button>
          <button onClick={regitserHandler}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;

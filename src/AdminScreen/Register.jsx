import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.name || user.email || user.password) {
      axios
        .post("http://localhost:4500/hotcup/admin/register", user)
        .then((result) => {
          if (result.data) {
            toast.success("Registration Complete");
            navigate("/LogIn");
          } else {
            toast.error("This Email is Associated with Other Account");
          }
        });
    } else {
      toast.error("Feilds Can't be Empty");
    }
  };

  return (
    <div className="loginFormContainer">
      <form onSubmit={submitHandler} className="loginForm">
        <div className="formHeader">
          <h2>REGISTER</h2>
        </div>
        <div className="formBody">
          <label>Name</label>
          <input
            value={user.name}
            name="name"
            onChange={inputHandler}
            type="text"
            placeholder="Name"
          />
          <label>Email</label>
          <input
            name="email"
            value={user.email}
            onChange={inputHandler}
            type="text"
            placeholder="Email"
          />
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            onChange={inputHandler}
            type="password"
            placeholder="Password"
          />
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const styleHandler = ({ isActive }) => {
    return {
      textDecoration: "none",
      fontWeight: isActive ? "bold" : "normal",
      marginRight: "2rem",
      color: "black",
    };
  };

  const admin = JSON.parse(localStorage.getItem("admin"));
  // console.log("js", admin);

  return (
    <nav className="navBar">
      <NavLink style={styleHandler} to={"/"}>
        Home
      </NavLink>
      <NavLink
        style={styleHandler}
        onClickCapture={() => console.log(admin)}
        to={admin === null ? "/LogIn" : "/Dashboard"}
      >
        <i className="fa-solid fa-user"></i>
      </NavLink>
    </nav>
  );
};

export default Header;

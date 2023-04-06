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
  return (
    <nav className="navBar">
      <NavLink style={styleHandler} to={"/"}>
        Home
      </NavLink>
      <NavLink style={styleHandler} to={"/Dashboard"}>
        Admin
      </NavLink>
    </nav>
  );
};

export default Header;

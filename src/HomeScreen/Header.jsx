import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);
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
      <NavLink
        style={styleHandler}
        to={isAuthenticated ? "/Dashboard" : "/LogIn"}
      >
        <i className="fa-solid fa-user"></i>
      </NavLink>
    </nav>
  );
};

export default Header;

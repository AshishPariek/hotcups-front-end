import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const styleHandler = (isActive) => {
    return {
      textDecoration: "none",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <nav className="navBar">
      <NavLink style={styleHandler} to={"/"}>
        Home
      </NavLink>
    </nav>
  );
};

export default Header;

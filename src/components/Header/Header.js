import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="nav-button">Home</div>
      </Link>
      <Link to="/units">
        <div className="nav-button">Units</div>
      </Link>
    </div>
  );
};
export default Header;

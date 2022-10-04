import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="nav-button">
        Home
      </Link>
      <Link to="/units" className="nav-button">
        Units
      </Link>
    </div>
  );
};
export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <NavLink to="/admin/dashboard">
            <img src={require("../../../assets/image/Logo.png")} alt="logo" />
          </NavLink>
        </div>

        <div className="nav-top-section">
          <div className="nav-left-section">
            <input type="checkbox" id="btn" />
            <span htmlFor="btn" className="menu-btn">
              <i className="fa-solid fa-bars"></i>
            </span>

            <div className="search-container">
              <input id="search" type="text" placeholder="Search" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="nav-right-section">
            <i className="fa-solid fa-bell"></i>
            <span className="nav-right-section language-dropdown">
              <img src={require("../../../assets/image/Flag.png")} alt="flag" />
              <p>English</p>
              <i className="fa-solid fa-angle-down"></i>
            </span>
            <span className="nav-right-section profile-box">
              <img src={require("../../../assets/image/profile-logo.png")} alt="profile" />
              <p>
                <b>Moni Roy</b>
                <br />
                Admin
              </p>
              <i className="fa-solid fa-angle-down"></i>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

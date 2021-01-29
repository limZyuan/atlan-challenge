import React from "react";
import "./navbar.css";

// logo
import logo from "../../img/ipl.webp";

export default function Navbar() {
  return (
    <React.Fragment>
      {/* navbar */}
      <nav className="main-nav flex p-3">
        {/* logo */}
        <img title="Home" className="main-nav-img" src={logo} alt="" />
        {/* search bar */}
        <input
          title="Search"
          className="main-search"
          type="text"
          placeholder="Search..."
        ></input>
        {/* other icons */}
        <ul className="flex">
          <li title="Watchlist">
            <i className="fas fa-tasks"></i>
          </li>
          <li title="Notifications">
            <i className="fas fa-bell"></i>
          </li>
          <li title="Profile">
            <i className="fas fa-user"></i>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

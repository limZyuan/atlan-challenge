import React from "react";
import "./navbar.css";
import logo from "../../img/ipl.jpg";

export default function Navbar() {
  return (
    <React.Fragment>
      {/* navbar */}
      <nav className="main-nav flex p-3">
        <img className="main-nav-img" src={logo} alt="" />
        <input
          className="main-search"
          type="text"
          placeholder="Search..."
        ></input>
        <ul className="flex">
          <li>
            <i className="fas fa-tasks"></i>
          </li>
          <li>
            <i className="fas fa-bell"></i>
          </li>
          <li>
            <i className="fas fa-user"></i>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

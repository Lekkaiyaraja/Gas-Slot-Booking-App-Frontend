import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid p-2">
        <Link to="/home" className="navbar-brand">
          FuelOne
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gas" className="nav-link">
                Gas
              </Link>
            </li>
          </ul>
          {/* <Link to="/" className="register">
            <button className="btn btn-custom">Create Account</button>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import React, { useState } from "react";
function Navbar() {
  const [isMobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Ridgeview Properties</h1>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-link-desktop"}
          onClick={() => setMobile(false)}
        >
          <NavLink to="/" className="nav-link">
            <li>Home</li>
          </NavLink>
          <NavLink to="/" className="nav-link">
            <li>About</li>
          </NavLink>
          <NavLink to="/" className="nav-link">
            <li>Properties</li>
          </NavLink>
          <NavLink to="/" className="nav-link">
            <li>Contacts</li>
          </NavLink>
          <NavLink to="/" className="nav-link">
            <li>Buyers Guide</li>
          </NavLink>
        </ul>
        <button className="burger-menu" onClick={() => setMobile(!isMobile)}>
        {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
         </button>
      </nav>
    </>
  );
}

export default Navbar;

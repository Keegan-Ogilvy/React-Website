import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav>
        <Link to="/" className="title">
          Website
        </Link>
        <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={isOpen ? "open" : ""}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;
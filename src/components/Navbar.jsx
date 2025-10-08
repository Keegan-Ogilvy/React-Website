import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { SearchBar } from "./SearchBar.jsx";
import { SearchResultList } from "./SearchResultList.jsx";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  // 👇 Detect clicks outside of search bar & list
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {/* 👇 Wrap SearchBar + ResultList in a container with a ref */}
        <li ref={searchRef} className="search-li">
          <SearchBar
            setResults={(data) => {
              setResults(data);
              setShowResults(true);
            }}
          />
          <SearchResultList results={results} showResults={showResults} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

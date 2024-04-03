import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/landing.css";

import logoImage from "../../assets/Site-Logo.png";

const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [selectedTag, setSelectedTag] = useState("Home");

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    localStorage.setItem("selectedTag", tag);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isShrunk = currentScrollPos > 50;
      setIsShrunk(isShrunk);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isShrunk ? "scrolled" : ""}>
      <div className="nav__container">
        <img
          src={logoImage}
          className={
            isShrunk ? "logoImage__setting__small" : "logoImage__setting"
          }
        />
        <div className="Navbar__lists">
          <Link
            to="/"
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "Home" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("Home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "About" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("About")}
          >
            About
          </Link>
          <Link
            to="/shop"
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "Shop" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("Shop")}
          >
            Shop
          </Link>
          <p
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "Community" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("Community")}
          >
            Community
          </p>
          <p
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "Members" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("Members")}
          >
            Members
          </p>
          <p
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "Tournaments" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("Tournaments")}
          >
            Tournaments
          </p>
          <p
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "TennisCourts" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("TennisCourts")}
          >
            Tennis Courts
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
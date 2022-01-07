import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [openLink, setOpen] = useState(false);
  const clickHandler = (e) => {
    e.target.classList.toggle("open");
    setOpen((prev) => !prev);
  };
  return (
    <div className="header">
      <h1 className="logo">MYSTICAL PETS</h1>
      <div className="nav-container">
        <nav className={`navbar ${openLink ? "open-nav" : ""}`}>
          <a
            href="#home"
            className={`nav-links ${openLink ? "open-link" : ""}`}
          >
            HOME
          </a>
          <a href="..." className={`nav-links ${openLink ? "open-link" : ""}`}>
            ROADMAP
          </a>
          <a href="..." className={`nav-links ${openLink ? "open-link" : ""}`}>
            PETS
          </a>
          <a href="..." className={`nav-links ${openLink ? "open-link" : ""}`}>
            TEAM
          </a>
          <a href="..." className={`nav-links ${openLink ? "open-link" : ""}`}>
            FAQ
          </a>
        </nav>
        <div className="hamburger-lines" onClick={clickHandler}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </div>
    </div>
  );
}

export default Header;

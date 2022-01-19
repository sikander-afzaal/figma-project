import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Header({ func }) {
  const [openLink, setOpen] = useState(false);
  const clickHandler = (e) => {
    if (window.innerWidth <= 716) {
      document.querySelector(".hamburger-lines").classList.toggle("open");
      if (document.querySelector("body").classList.contains("y-hide")) {
        document.querySelector("body").classList.remove("y-hide");
      } else {
        document.querySelector("body").classList.add("y-hide");
      }
      setOpen((prev) => !prev);
    } else {
      return;
    }
  };
  return (
    <div className="header">
      <a
        className="logo_anchor"
        href="..."
        onClick={() => {
          func(false);
        }}
      >
        {" "}
        <img src={logo} className="logo" alt="...." />
      </a>

      <div className="nav-container2">
        <nav className={`navbar2 ${openLink ? "open-nav" : ""}`}>
          <a
            onClick={clickHandler}
            href="#home"
            className={`nav-links ${openLink ? "open-link" : ""}`}
          >
            HOME
          </a>
          <a
            onClick={clickHandler}
            href="#roadmap"
            className={`nav-links ${openLink ? "open-link" : ""}`}
          >
            ROADMAP
          </a>
          <a
            onClick={clickHandler}
            href="#pets"
            className={`nav-links ${openLink ? "open-link" : ""}`}
          >
            PETS
          </a>
          <a
            onClick={clickHandler}
            href="#team"
            className={`nav-links ${openLink ? "open-link" : ""}`}
          >
            TEAM
          </a>
          <a
            onClick={clickHandler}
            href="#faq"
            className={`nav-links ${openLink ? "open-link" : ""}`}
          >
            FAQ
          </a>
        </nav>
        <div className="hamburger-lines" onClick={clickHandler}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className="starter_boxes small-head">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faDiscord} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
}

export default Header;

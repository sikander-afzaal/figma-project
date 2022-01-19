import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../Assets/round.png";
import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer({ prop }) {
  return (
    <div className="footer">
      {/* <div className="footer_left">
        <h1>Get on the List</h1>
        <input type="email" placeholder="Enter email address" />
      </div> */}

      <div className="footer_middle">
        <img src={logo} alt="" />
        <div className="small-box-div">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faDiscord} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <p>Mystical Pets © 2021 All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

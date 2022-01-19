import React from "react";
import "./Starter.css";
import img from "../../Assets/image1.jpeg";
import logo from "../../Assets/Logo.png";
import Footer from "../../Layout/Footer/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
function Starter({ func }) {
  return (
    <>
      <div className="starter">
        <div className="starter_top">
          <div className="starter_boxes">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faDiscord} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <div className="middle-starter">
          <img src={logo} alt="..." className="logo-enter" />
          <img src={img} alt="" />
          <div className="left_starter">
            <div className="left_left">
              <div className="h1-start">
                <h1>Welcome to the</h1>
                <h1 style={{ alignSelf: "center", marginLeft: "-25px" }}>
                  Home of
                </h1>
                <h1>Mystical Pets</h1>
              </div>

              <button
                onClick={() => {
                  func(false);
                }}
                className="enter"
              >
                Enter
              </button>
            </div>
            <div className="right_right">
              <p className="scroll_text">Scroll Down</p>
              <FontAwesomeIcon icon={faLongArrowAltDown} />
            </div>
          </div>
        </div>
        <p className="desc-starter">
          A limited NFT collection where the virtual goods meet reality, come
          join us and discover <br></br> the story of the Mystical Pets
        </p>
      </div>
      <Footer prop={false} />
      <div className="bottom-line"></div>
    </>
  );
}

export default Starter;

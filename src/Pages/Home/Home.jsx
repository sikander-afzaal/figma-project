import React from "react";
import "./Home.css";
//assets
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.gif";
import dummy from "../../Assets/baby (4).gif";
function Home() {
  return (
    <div id="home" className="home">
      <img src={img1} alt="" />
      <h1>DIVE INTO THE WORLD OF NFT'S</h1>

      <p className="final">
        <p>
          <span>Where internet gaming and economics are combined</span>{" "}
          <br></br> Trade or hold em and evolve the pets <br></br> through
          unique gameplay
        </p>

        <img src={img2} alt="" />
      </p>
    </div>
  );
}

export default Home;

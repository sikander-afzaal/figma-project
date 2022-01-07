import React from "react";
import "./Home.css";
//assets
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
function Home() {
  return (
    <div id="home" className="home">
      <img src={img1} alt="" />
      <h1>DIVE INTO THE WORLD OF NFT'S</h1>
      <img src={img2} alt="" />
      <p>
        <span>Where internet gaming and economics are combined</span> <br></br>{" "}
        Trade or hold em and evolve the pets <br></br> through unique gameplay
      </p>
    </div>
  );
}

export default Home;

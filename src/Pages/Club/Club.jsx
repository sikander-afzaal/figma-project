import React from "react";
import "./Club.css";
import img from "../../Assets/baby (1).gif";
import img2 from "../../Assets/baby (2).gif";
import img3 from "../../Assets/baby (3).gif";
import img4 from "../../Assets/baby (4).gif";
import img5 from "../../Assets/baby (5).gif";
function Club() {
  return (
    <div className="club">
      <h1>Join The Club</h1>
      <div className="club_img-div">
        <div className="image-box">
          <img src={img} alt="" />
          <p>unique pets</p>
        </div>
        <div className="image-box">
          <img src={img2} alt="" />
          <p>An investment for your future </p>
        </div>
        <div className="image-box">
          <img src={img3} alt="" />
          <p>community wallet gives you additional benefits</p>
        </div>
        <div className="image-box">
          <img src={img4} alt="" />
          <p>Lottery System gives your rewards monthly</p>
        </div>
        <div className="image-box">
          <img src={img5} alt="" />
          <p>Additional Benefits through roadmap activations</p>
        </div>
      </div>
      <h1>Owning a mystical pet is extremely easy</h1>
      <p>
        Get your metamask wallet set up which is needed for minting. All you
        need to do is have 0.0555 ETH+GAS, be connected to the mainnet and
        you're ready to go.
      </p>
      <button className="mask">Get MetaMask</button>
    </div>
  );
}

export default Club;

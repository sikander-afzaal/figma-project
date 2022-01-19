import React from "react";
import "./Roadmap.css";
import img1 from "../../Assets/baby (1).gif";
import img2 from "../../Assets/baby (2).gif";
function Roadmap() {
  return (
    <div id="roadmap" className="roadmap">
      <h1>Roadmap</h1>
      <div className="roadmap_div">
        <img src={img1} alt="" className="gif-road" />
        <img src={img2} alt="" className="gif-road" />
        <div className="milestone">
          <p className="small-width">DEMO RELEASED</p>
          <p className="margin-left">300 Pets on sale for 0.111 ETH</p>
        </div>
        <p style={{ textTransform: "uppercase" }} className="middle">
          Early Alpha Investors
        </p>
        <div className="milestone">
          <p>100 SOLD</p>
          <p>3 ETH Giveaway for one of the lucky holders</p>
        </div>
        <div className="milestone">
          <p>200 SOLD</p>
          <p>5 ETH Giveaway held for a lucky holder</p>
        </div>
        <div className="milestone">
          <p>300 SOLD</p>
          <p>3 Rare Dragon Giveaways</p>
        </div>
        <p className="middle">
          SINGLE PLAYER GAME RELEASED WITH A SUPPLY OF 9999 PETS FOR 1 ETH
        </p>
        <div className="milestone">
          <p>10% SOLD</p>
          <p>10 ETH giveaway to 3 lucky holders</p>
        </div>
        <div className="milestone">
          <p>20% SOLD</p>
          <p>Lottery System is activated</p>
        </div>
        <div className="milestone">
          <p>30% SOLD</p>
          <p>Website Updated for Mystical Pets with change color mechanism</p>
        </div>
        <div className="milestone">
          <p>40% SOLD</p>
          <p>10 ETH Giveaway held for 10 lucky holders</p>
        </div>
        <div className="milestone">
          <p>50% SOLD</p>
          <p>500 ETH invested into the Community Wallet for Blue Chip NFTs</p>
        </div>
        <div className="milestone">
          <p>60% SOLD</p>
          <p>500 ETH to the Lottery Vault</p>
        </div>
        <div className="milestone">
          <p>70% SOLD</p>
          <p>5 ETH giveaway to 50 lucky holders</p>
        </div>
        <div className="milestone">
          <p>80% SOLD</p>
          <p>
            Merch Store opens, where 70% of profits are distributed to holders
            every year
          </p>
        </div>
        <div className="milestone">
          <p>90% SOLD</p>
          <p>500 ETH invested into the Community Wallet for Blue Chip NFTs</p>
        </div>
        <div className="milestone">
          <p>100% SOLD</p>
          <p>
            Multiplayer 3D Game, breeding and staking with ERC-20 Development
            starts
          </p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;

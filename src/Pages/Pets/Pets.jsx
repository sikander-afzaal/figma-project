import React from "react";
import "./Pets.css";
import img from "../../Assets/baby (1).gif";
import img2 from "../../Assets/baby (2).gif";
import img3 from "../../Assets/baby (3).gif";
import img4 from "../../Assets/baby (4).gif";
import img5 from "../../Assets/baby (5).gif";
import img6 from "../../Assets/baby (6).gif";
function Pets() {
  return (
    <div id="pets" className="pets">
      <h1>What is a Mystical Pet?</h1>
      <p className="desc-pets">
        Mystical Pets hatch from the Eggs stored on the ethereum blockchain.
        Once hatched they learn according to user's gameplay Each pet is unique
        to its owner
      </p>
      <div className="card2-div">
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img} alt="...." />
            <p>Rarity%</p>
          </div>
          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img2} alt="...." />
            <p>Rarity%</p>
          </div>
          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img3} alt="...." />
            <p>Rarity%</p>
          </div>
          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img4} alt="...." />
            <p>Rarity%</p>
          </div>
          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img5} alt="...." />
            <p>Rarity%</p>
          </div>
          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img6} alt="...." />
            <p>Rarity%</p>
          </div>
          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
      </div>
      <div className="center-pet">
        <button className="mint">MINT</button>
        <p>Currently 300</p>
      </div>
      <h1>Starter Pets</h1>
      <div className="card2-div">
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img} alt="...." />
            <p>Rarity% Species Name</p>
          </div>

          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img2} alt="...." />
            <p>Rarity% Species Name</p>
          </div>
          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img3} alt="...." />
            <p>Rarity% Species Name</p>
          </div>
          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img4} alt="...." />
            <p>Rarity% Species Name</p>
          </div>
          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img5} alt="...." />
            <p>Rarity% Species Name</p>
          </div>
          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2__side card2__side--front">
            <img src={img6} alt="...." />
            <p>Rarity% Species Name</p>
          </div>
          <div className="card2__side card2__side--back">
            <p>Hi I am Card Back ----</p>
          </div>
        </div>
      </div>
      <div className="center-pet">
        <button className="mint download">DOWNLOAD</button>
        <p>Smart Contract Address</p>
      </div>
    </div>
  );
}

export default Pets;

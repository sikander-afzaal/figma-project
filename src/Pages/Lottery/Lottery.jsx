import React from "react";
import "./Lottery.css";
import img1 from "../../Assets/lottery-img1.png";
import img2 from "../../Assets/lottery-img2.png";
function Lottery() {
  return (
    <div className="lottery">
      <div style={{ paddingTop: "1rem" }} className="div-lot1">
        <h1>What is the Lottery System?</h1>
        <img src={img1} alt="" />
      </div>
      <div style={{ paddingTop: "3rem" }} className="div-lot2">
        <h1 className="happ">What is Happening?</h1>
        <img src={img2} alt="" />
      </div>
    </div>
  );
}

export default Lottery;

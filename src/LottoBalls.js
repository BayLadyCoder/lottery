import React from "react";
import "./LottoBalls.css";
import Ball from "./Ball";

function LottoBall(props) {
  return (
    <div className={ props.nums.length === 6 ? "LottoBalls" : "LottoBalls-mini-daily"}>
    {
      props.nums.map(n => <Ball num={n} />)
    }
      
    </div>
  );
}

export default LottoBall;

import React, { Component } from "react";
import "./Lottery.css";
import LottoBalls from "./LottoBalls";

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lottoBalls: [3, 12, 34, 19, 5, 26],
      miniDailyBalls: [17, 6, 29, 40]
    };

    this.randNums = this.randNums.bind(this);
    this.randLottoBalls = this.randLottoBalls.bind(this);
    this.randMiniDailyBalls = this.randMiniDailyBalls.bind(this);
  }

  randNums(numBalls) {
    let numArr = [];
    let num;
    for (let i = 0; i < numBalls; i++) {
      num = Math.floor(Math.random() * 40 + 1);
      numArr.push(num);
    }
    // console.log(numArr);
    return numArr;
  }

  randLottoBalls() {
    let arr = this.randNums(6);
    // console.log(arr);
    this.setState({ lottoBalls: arr });
  }

  randMiniDailyBalls() {
    let arr = this.randNums(4);
    this.setState({ miniDailyBalls: arr });
  }

  render() {
    let balls6 = this.state.lottoBalls;
    return (
      <div className="Lottery">
        <h2>Lotto</h2>
        <LottoBalls nums={this.state.lottoBalls} />
        <button className="Lottery-btn" onClick={this.randLottoBalls}>
          Generate Numbers
        </button>
        <h2>Mini Daily</h2>
        <LottoBalls nums={this.state.miniDailyBalls} />
        <button className="Lottery-btn" onClick={this.randMiniDailyBalls}>
          Generate Numbers
        </button>
      </div>
    );
  }
}

export default Lottery;

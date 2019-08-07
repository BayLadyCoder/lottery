import React, { Component } from "react";
import "./Lottery.css";
import Ball from "./Ball";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls })
    };

    this.randNumBalls = this.randNumBalls.bind(this);
  }

  randNumBalls() {
    let numArr = [];
    let num;
    for (let i = 0; i < this.props.numBalls; i++) {
      num = Math.floor(Math.random() * this.props.maxNum + 1);
      numArr.push(num);
    }
    console.log(numArr);
    this.setState({ nums: numArr });
  }

  render() {
    return (
      <div className="Lottery">
        <h2>{this.props.title}</h2>
        <div className="Lottery-balls">
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button className="Lottery-btn" onClick={this.randNumBalls}>
          Generate Numbers
        </button>
      </div>
    );
  }
}

export default Lottery;

import React from "react";
import styled from "styled-components";

import Display from "../Display";
import Buttons from "../Buttons";

const Big = require("big.js");
const calculate = require("../../js/calculate/calculate");
const webFrame = window.require("electron").webFrame;
webFrame.setVisualZoomLevelLimits(1, 1);
webFrame.setLayoutZoomLevelLimits(0, 0);

class App extends React.Component {
  state = {
    input: [],
    operatorPressedLast: false,
    display: "0"
  };

  removeFormatting = input => {
    return String(input).replace(/,/g, "");
  };

  onACPress = () => {
    this.setState({
      input: [],
      display: "0",
      operatorPressedLast: false
    });
  };

  onNumberPress = button => {
    if (button === "0" && this.state.display === "0") {
      return false;
    } else if (
      this.removeFormatting(this.state.display.length) > 10 &&
      !this.state.operatorPressedLast
    ) {
      return false;
    } else if (this.state.display === "0" || this.state.operatorPressedLast) {
      this.setState({ display: button, operatorPressedLast: false });
    } else {
      let display = this.removeFormatting(this.state.display) + button;
      this.setState({
        display:
          display > 999999999
            ? Big(display).toExponential(2)
            : Number(display).toLocaleString("en")
      });
    }
  };

  onDecimalPress = () => {
    if (this.state.display === "0" || this.state.operatorPressedLast) {
      this.setState({ display: "0.", operatorPressedLast: false });
    } else if (!this.state.display.includes(".")) {
      this.setState({
        display: this.state.display + "."
      });
    }
  };

  onPercentagePress = () => {
    if (this.state.display !== "0")
      this.setState({
        display: Number(
          this.removeFormatting(this.state.display) / 100
        ).toLocaleString("en")
      });
  };

  onNegatePress = () => {
    this.state.display !== "0"
      ? Number(this.removeFormatting(this.state.display)) > 0
        ? this.setState({
            display: "-" + this.state.display
          })
        : this.setState({
            display: this.state.display.replace(/-/g, "")
          })
      : false;
  };

  onOperatorPress = button => {
    if (this.state.input.length === 0 && this.state.display === "0") {
      return false;
    } else if (this.state.operatorPressedLast && button !== "=") {
      this.setState({
        input: [this.state.input[0], button]
      });
    } else if (this.state.input.length === 0) {
      this.setState({
        input: [this.removeFormatting(this.state.display), button],
        operatorPressedLast: true
      });
    } else if (button !== "=") {
      const sum = calculate(
        this.state.input.concat(this.removeFormatting(this.state.display))
      );
      this.setState({
        input: [sum, button],
        display:
          sum > 999999999
            ? Big(sum).toExponential(2)
            : Number(sum).toLocaleString("en"),
        operatorPressedLast: true
      });
    } else {
      const sum = calculate(
        this.state.input.concat(this.removeFormatting(this.state.display))
      );
      this.setState({
        input: [sum],
        display:
          sum > 999999999
            ? Big(sum).toExponential(2)
            : Number(sum).toLocaleString("en"),
        operatorPressedLast: true
      });
    }
  };

  handleButtonPress = button => {
    if (button === "AC") {
      this.onACPress();
    } else if (!isNaN(button)) {
      this.onNumberPress(button);
    } else if (button === ".") {
      this.onDecimalPress();
    } else if (button === "%") {
      this.onPercentagePress();
    } else if (button === "+/-") {
      this.onNegatePress();
    } else {
      this.onOperatorPress(button);
    }
  };

  render() {
    return (
      <div className={this.props.className}>
        <Display content={this.state.display} />
        <Buttons />
      </div>
    );
  }
}

export default styled(App)`
  background: linear-gradient(
      180deg,
      rgba(205, 237, 229, 0.05) 50%,
      transparent 0
    ),
    linear-gradient(#84e, #004cee);
  background-size: 4px 4px, 100% 100%;
  height: 100vh;
`;

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

  removeFormatting = input => input.replace(/,/g, "");

  onACPress = () =>
    this.setState({
      input: [],
      display: "0",
      operatorPressedLast: false
    });

  onNumberPress = button => {
    const formattedDisplay = this.state.display;
    const display = this.removeFormatting(this.state.display);

    if (button === "0" && !display) {
      return false;
    } else if (
      formattedDisplay.length > 10 &&
      !this.state.operatorPressedLast
    ) {
      return false;
    } else if (!display || this.state.operatorPressedLast) {
      this.setState({ display: button, operatorPressedLast: false });
    } else {
      const newDisplay = display + button;
      this.setState({
        display:
          newDisplay > 999999999
            ? Big(newDisplay).toExponential(2)
            : Number(newDisplay).toLocaleString("en")
      });
    }
  };

  onDecimalPress = () => {
    const display = this.removeFormatting(this.state.display);

    if (!display || this.state.operatorPressedLast) {
      this.setState({ display: "0.", operatorPressedLast: false });
    } else if (!display.includes(".")) {
      this.setState({ display: display + "." });
    }
  };

  onPercentagePress = () => {
    const display = this.removeFormatting(this.state.display);

    if (display)
      this.setState({
        display: Number(display / 100).toLocaleString("en")
      });
  };

  onNegatePress = () => {
    const display = this.removeFormatting(this.state.display);

    display
      ? display > 0
        ? this.setState({ display: "-" + display })
        : this.setState({ display: display.replace(/-/g, "") })
      : false;
  };

  onOperatorPress = button => {
    const display = this.removeFormatting(this.state.display);
    const input = this.state.input;

    if (!input.length && !display) {
      return false;
    } else if (this.state.operatorPressedLast && button !== "=") {
      this.setState({
        input: [input[0], button]
      });
    } else if (!input.length) {
      this.setState({
        input: [display, button],
        operatorPressedLast: true
      });
    } else if (button !== "=") {
      const sum = calculate(input.concat(display));
      this.setState({
        input: [sum, button],
        display:
          sum > 999999999
            ? Big(sum).toExponential(2)
            : Number(sum).toLocaleString("en"),
        operatorPressedLast: true
      });
    } else {
      const sum = calculate(input.concat(display));
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
    if (!isNaN(button)) {
      this.onNumberPress(button);
    } else {
      switch (button) {
        case "AC":
          this.onACPress();
          break;
        case ".":
          this.onDecimalPress();
          break;
        case "%":
          this.onPercentagePress();
          break;
        case "+/-":
          this.onNegatePress();
          break;
        default:
          this.onOperatorPress(button);
      }
    }
  };

  render() {
    return (
      <div className={this.props.className}>
        <Display content={this.state.display} />
        <Buttons handleButtonPress={this.handleButtonPress} />
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

import React from "react";
import styled from "styled-components";

import Display from "../Display";
import Buttons from "../Buttons";

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

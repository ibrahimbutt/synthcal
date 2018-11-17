import React from "react";
import styled from "styled-components";

import Display from "../Display";
import Buttons from "../Buttons";


class App extends React.Component {
  state = {
    display: 458
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

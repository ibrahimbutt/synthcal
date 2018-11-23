import React from "react";
import styled from "styled-components";

class Button extends React.Component {
  state = {
    animate: false
  };

  toggleAnimation = () => {
    this.setState({ animate: true });
    setTimeout(() => {
      this.setState({ animate: false });
    }, 750);
  };
  render() {
    return (
      <div
        className={
          this.state.animate
            ? `${this.props.className} active`
            : `${this.props.className}`
        }
        onClick={() => {
          this.props.handleButtonPress(this.props.content);
          this.toggleAnimation();
        }}
        content={this.props.content}
      >
        {this.props.content}
      </div>
    );
  }
}

export default styled(Button)`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  color: #f0e4fa;
  font-size: 20px;
  font-family: "MyWebFontBold", "Titillium Web", sans-serif;
  transition: active 5s ease;
  user-select: none;

  &:nth-child(4),
  &:nth-child(8),
  &:nth-child(12),
  &:nth-child(16),
  &:nth-child(19) {
    background-color: rgba(36, 170, 252, 0.15);
  }
  &:nth-child(17) {
    grid-column: span 2;
  }

  position: relative;

  &::before {
    content: attr(content);
    position: absolute;
    display: grid;
    align-content: center;
    justify-content: center;
    margin-left: -3px;
    margin-top: -3px;
    height: 6px;
    width: 6px;
    color: #98ffa8;
    text-align: center;
    font-size: 18px;
    background-color: #98ffa8;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 10px;
    transform: rotate(45deg);
    overflow: visible;
    clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    &::before {
      clip-path: polygon(
        0% 80%,
        20% 100%,
        50% 70%,
        80% 100%,
        100% 80%,
        70% 50%,
        100% 20%,
        80% 0%
      );
    }
  }

  &:nth-child(1),
  &:nth-child(5),
  &:nth-child(9),
  &:nth-child(13),
  &:nth-child(17) {
    &::before {
      margin-left: 57px;
    }
  }

  &.active {
    animation: button-pop-bg 0.75s ease both;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 3px;
      height: 3px;
      top: -1px;
      left: 0;
      background-color: #98ffa8;
      animation: border-flow 0.75s ease infinite;
      z-index: -1;
    }

    &::before {
      margin-top: -15px;
      margin-left: -15px;
      height: 30px;
      width: 30px;
      opacity: 1;
      clip-path: none;
      animation: button-pop 0.75s ease both;
    }

    &:nth-child(1),
    &:nth-child(5),
    &:nth-child(9),
    &:nth-child(13),
    &:nth-child(17) {
      &::before {
        margin-left: 44px;
      }
    }
  }

  @keyframes button-pop {
    0% {
      transform: scale(0) rotate(45deg);
    }
    20% {
      transform: scale(0.5) rotate(45deg);
    }
    40% {
      transform: scale(0) rotate(45deg);
      color: #98ffa8;
    }
    44% {
      transform: scale(0) rotate(45deg);
      color: #004cee;
    }
    50% {
      transform: scale(1) rotate(10deg);
    }
    55% {
      transform: scale(1) rotate(0deg);
    }
    90% {
      transform: scale(1) rotate(0deg);
    }
    100% {
      transform: scale(0) rotate(0deg);
      color: #004cee;
    }
  }

  @keyframes button-pop-bg {
    0% {
      background-color: none;
    }
    50% {
      background-color: rgba(36, 170, 252, 0.15);
    }
    100% {
      background-color: none;
    }
  }

  @keyframes border-flow {
    0% {
      transform: translateX(0);
    }
    25% {
      opacity: 1;
      transform: translateX(59px);
    }
    50% {
      opacity: 1;
      transform: translateY(59px) translateX(59px);
    }
    75% {
      opacity: 1;
      transform: translateX(0px) translateY(59px);
    }
    100% {
      opacity: 0;
      transform: translateY(0);
    }
  }
`;

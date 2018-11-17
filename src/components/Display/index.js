import React from "react";
import styled from "styled-components";

const Display = props => (
  <div className={props.className} content={props.content}>
    {props.content}
  </div>
);

export default styled(Display)`
  position: relative;
  padding: 40px 20px;
  color: #f0e4fa;
  text-align: right;
  font-family: "MyWebFontBold", sans-serif;
  font-size: 46px;
  letter-spacing: 1px;
  line-height: 36px;
  z-index: 1;
  user-select: none;

  &::before {
    content: attr(content);
    position: absolute;
    right: 22.5px;
    color: #20a4fd;
    opacity: 0.65;
    width: 100%;
    z-index: -1;
  }

  &::after {
    content: attr(content);
    position: absolute;
    right: 16.5px;
    color: #bd45ba;
    opacity: 0.65;
    width: 100%;
    z-index: -1;
  }
`;

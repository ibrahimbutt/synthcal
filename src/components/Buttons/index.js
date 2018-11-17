import React from "react";
import styled from "styled-components";
import Button from "./button";

const buttonsContent = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "="
];

const Buttons = props => (
  <div className={props.className}>
    {buttonsContent.map((content, index) => (
      <Button key={`button-${index}`} content={content} />
    ))}
  </div>
);

export default styled(Buttons)`
  display: grid;
  grid-template-columns: repeat(4, 60px);
  color: #f0e4fa;
`;

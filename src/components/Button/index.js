import React from "react";
import "./styles.scss";

export const Button = props => {
  const { onClick, text } = props;
  return <button onClick={onClick}>{text}</button>;
};

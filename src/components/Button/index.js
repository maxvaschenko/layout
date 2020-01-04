import React from "react";
import "./styles.scss";

export const Button = props => {
  const { onClick, text, image } = props;
  return (
    <button onClick={onClick} className={`${!image ? "centerText" : ""}`}>
      {image && <img src={image} alt="" />}
      <span>{text}</span>
    </button>
  );
};

import React, { useState, useEffect } from "react";
import "./style.scss";
import {Link} from "react-router-dom";

export const Home = () => {
  const [initialText, changeInitialText] = useState('');
  useEffect(() => {
    document.title = "Home";
  }, []);

  const changeTextAreaValue = e => {
    changeInitialText(e.target.value);
  };

  console.log(initialText);

  return (
    <div className="Home">
      <textarea
        name="text-area"
        id="initial-text-area"
        cols="80"
        rows="10"
        value={initialText}
        onChange={changeTextAreaValue}
      />
      <Link to={"/layout"}>
        <button>LAYOUT</button>
      </Link>
    </div>
  );
};

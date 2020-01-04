import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setTextAction } from "../../actions/textActions";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import "./style.scss";

const Home = props => {
  const [initialText, changeInitialText] = useState("");
  const { setTextAction } = props;

  useEffect(() => {
    document.title = "Home";
  }, []);

  const changeTextAreaValue = e => {
    e.preventDefault();
    changeInitialText(e.target.value);
  };

  const setTextToStore = () => {
    setTextAction(initialText);
  };

  return (
    <div className="Home">
      <div className="textContainer">
        <h2>Enter your text below pls</h2>
        <Textarea
          value={initialText}
          onChange={changeTextAreaValue}
          rows={"40"}
        />
        <div className="linkContainer">
          <Link to={"/layout"}>
            <Button onClick={setTextToStore} text={"LAYOUT"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setTextAction
};

export default connect(null, mapDispatchToProps)(Home);

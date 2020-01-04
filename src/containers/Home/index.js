import React, { useState, useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setTextAction } from "../../actions/textActions";
import { Textarea } from "../../components/Textarea";

const Home = props => {
  const [initialText, changeInitialText] = useState("");
  const { setTextAction } = props;

  useEffect(() => {
    document.title = "Home";
  }, []);

  const changeTextAreaValue = e => {
    changeInitialText(e.target.value);
  };

  const setTextToStore = () => {
    setTextAction(initialText);
  };

  return (
    <div className="Home">
      <Textarea value={initialText} onChange={changeTextAreaValue} />
      <Link to={"/layout"}>
        <button onClick={setTextToStore}>LAYOUT</button>
      </Link>
    </div>
  );
};

const mapDispatchToProps = {
  setTextAction
};

export default connect(null, mapDispatchToProps)(Home);

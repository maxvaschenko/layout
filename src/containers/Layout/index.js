import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { textSelector } from "../../reducers/textReducer";
import { Textarea } from "../../components/Textarea";
import { setTextAction } from "../../actions/textActions";
import * as nanoid from "nanoid";
import { columnsChangingHandler } from "../../utils";
import { Button } from "../../components/Button";
import one from "../../assets/img/one.svg";
import two from "../../assets/img/two.svg";
import three from "../../assets/img/three.svg";
import "./styles.scss";

const Layout = props => {
  const [id] = React.useState(nanoid);
  const [columns, changeColumns] = useState(1);
  const [textInColumns, changeTextInColumns] = useState([]);
  const { text, setTextAction } = props;

  useEffect(() => {
    document.title = "Layout";
  }, []);

  useEffect(() => {
    columnsChangingHandler(columns, text, changeTextInColumns);
  }, [columns, text]);

  const changeColumnsValue = val => () => {
    const modifiedText = textInColumns.reduce((accum, current) => {
      return [...accum, current.text];
    }, []);
    setTextAction(modifiedText.join(""));
    changeColumns(val);
  };

  const setTextToStore = id => e => {
    e.preventDefault();
    const updatedTextsList = textInColumns.map(item => {
      if (item.id === id) {
        return {
          text: e.target.value,
          id
        };
      }
      return item;
    });

    changeTextInColumns([...updatedTextsList]);
  };

  return (
    <div className="Layout">
      <div className="Layout_buttons">
        <div className="Layout_buttons-item">
          <Button
            onClick={changeColumnsValue(1)}
            text={"column"}
            image={one}
            selected={columns === 1}
          />
        </div>
        <div className="Layout_buttons-item">
          <Button
            onClick={changeColumnsValue(2)}
            text={"column"}
            image={two}
            selected={columns === 2}
          />
        </div>
        <div className="Layout_buttons-item">
          <Button
            onClick={changeColumnsValue(3)}
            text={"column"}
            image={three}
            selected={columns === 3}
          />
        </div>
      </div>
      <div className="Layout_textListContainer">
        {textInColumns.map((item, index) => {
          return (
            <Textarea
              value={item.text}
              onChange={setTextToStore(item.id)}
              key={id + index}
              rows={window.screen.width > 801 ? "50" : "20"}
              className={window.screen.width > 801 ? "mr-2" : "mb-2"}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  text: textSelector(state)
});

const mapDispatchToProps = {
  setTextAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

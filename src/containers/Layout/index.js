import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { textSelector } from "../../reducers/textReducer";
import { Textarea } from "../../components/Textarea";
import { setTextAction } from "../../actions/textActions";
import * as nanoid from "nanoid";

const Layout = props => {
  const [id] = React.useState(nanoid);
  const [columns, changeColumns] = useState(2);
  const [textInColumns, changeTextInColumns] = useState([]);
  const { text, setTextAction } = props;

  useEffect(() => {
    if (columns !== 1) {
      const splitText = text.split(" ");
      const length = splitText.length;
      const firstCol = [
        ...splitText.slice(0, Math.round(splitText.length / 2))
      ].join(" ");
      const secondCol = [
        ...splitText.slice(Math.round(splitText.length / 2))
      ].join(" ");
      console.log(firstCol);
      console.log(secondCol);
      changeTextInColumns([
        { text: firstCol, id: "first" },
        { text: secondCol, id: "second" }
      ]);
    } else {
      changeTextInColumns([{ text: text, id: "first" }]);
    }
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
      <div className="Layout_buttons-container">
        <div className="Layout_buttons-item" onClick={changeColumnsValue(1)}>
          1 column
        </div>
        <div className="Layout_buttons-item" onClick={changeColumnsValue(2)}>
          2 column
        </div>
        <div className="Layout_buttons-item" onClick={changeColumnsValue(3)}>
          3 column
        </div>
      </div>

      {textInColumns.map((item, index) => {
        return (
          <Textarea
            value={item.text}
            onChange={setTextToStore(item.id)}
            key={id + index}
          />
        );
      })}
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

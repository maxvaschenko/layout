import React from "react";
import nanoid from "nanoid";
import "./styles.scss";

export const Textarea = props => {
  const [id] = React.useState(nanoid);
  const [name] = React.useState(nanoid);
  const { value, onChange, cols = "80", rows = "10", className = "" } = props;
  return (
    <textarea
      name={`textarea-${name}`}
      id={id}
      cols={cols}
      rows={rows}
      value={value}
      onChange={onChange}
      autoFocus
      className={className}
    />
  );
};

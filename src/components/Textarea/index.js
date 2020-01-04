import React from "react";
import nanoid from "nanoid";

export const Textarea = props => {
  const [id] = React.useState(nanoid);
  const [name] = React.useState(nanoid);
  const { value, onChange, cols = "80", rows = "10" } = props;
  return (
    <textarea
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      value={value}
      onChange={onChange}
      autoFocus
    />
  );
};

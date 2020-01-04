const twoColumnsHandler = (columns, text, changeTextInColumns) => {
  const splitText = text.split(" ");
  const dividedNumber = getRoundedPart(splitText.length, 2);
  const firstCol = [...splitText.slice(0, dividedNumber)].join(" ");
  const secondCol = [...splitText.slice(dividedNumber)].join(" ");
  changeTextInColumns([
    { text: firstCol, id: "first" },
    { text: secondCol, id: "second" }
  ]);
};

const threeColumnsHandler = (columns, text, changeTextInColumns) => {
  const splitText = text.split(" ");
  const dividedNumber = getRoundedPart(splitText.length, 3);
  const firstCol = [...splitText.slice(0, dividedNumber)].join(" ");
  const secondCol = [...splitText.slice(dividedNumber, dividedNumber * 2)].join(
    " "
  );
  const thirdCol = [...splitText.slice(dividedNumber * 2)].join(" ");
  changeTextInColumns([
    { text: firstCol, id: "first" },
    { text: secondCol, id: "second" },
    { text: thirdCol, id: "third" }
  ]);
};

const getRoundedPart = (number, divider) => Math.round(number / divider);

export const columnsChangingHandler = (columns, text, changeTextInColumns) => {
  if (columns === 1) {
    changeTextInColumns([{ text: text, id: "first" }]);
  } else if (columns === 2) {
    twoColumnsHandler(columns, text, changeTextInColumns);
  } else {
    threeColumnsHandler(columns, text, changeTextInColumns);
  }
};

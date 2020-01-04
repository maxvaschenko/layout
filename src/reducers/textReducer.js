export default (state = { data: "" }, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        data: action.payload.text
      };
    default:
      return state;
  }
};

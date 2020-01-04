export default (state = {}, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        data: action.payload
      };
    default:
      return state;
  }
};

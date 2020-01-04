import { SET_TEXT } from "../constants";

export const setTextAction = text => ({
  type: SET_TEXT,
  payload: {
    text
  }
});

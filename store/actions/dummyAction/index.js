import { SET_TEXT } from "./actionType";

export const dummyAction = data => {
  return {
    types: SET_TEXT,
    payload: {
      data
    }
  };
};

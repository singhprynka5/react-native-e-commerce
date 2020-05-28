import { SET_TEXT } from "../../actions/dummyAction/actionType";

const initialState = {
  text: "we are ......."
};

const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TEXT:
      return { ...state, text: action.payload.data };

    default:
      return state;
  }
};

export default productsReducer;

import { FETCH_PRODUCTS } from "../../actions/productAction/actionType";

const initialState = []

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload

    default:
      return state;
  }
};

export default productReducer;

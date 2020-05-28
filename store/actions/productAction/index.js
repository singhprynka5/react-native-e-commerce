import { FETCH_PRODUCTS } from "./actionType";
import { getProducts } from "../../../data";

export const fetchProducts = () => dispatch => {
  const books = getProducts();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: books
  });
};

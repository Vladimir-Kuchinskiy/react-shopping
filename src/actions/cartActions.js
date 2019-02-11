import { types } from '../constants';

export const addToCart = item => {
  return { type: types.ADD_BOOK_TO_CART, payload: item };
};

export const removeFromCart = id => {
  return { type: types.REMOVE_BOOK_FROM_CART, payload: id };
};

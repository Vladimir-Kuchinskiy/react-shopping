import { types } from '../constants';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BOOK_TO_CART:
      return { ...state, items: [...state.items, action.payload] };
    case types.REMOVE_BOOK_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

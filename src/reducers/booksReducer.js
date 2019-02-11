import { types } from '../constants';

const initialState = {
  isReady: false,
  items: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOOKS:
      return { ...state, items: action.payload, isReady: true };
    default:
      return state;
  }
};

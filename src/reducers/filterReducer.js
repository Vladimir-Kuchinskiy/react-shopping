import { types } from '../constants';

const initialState = {
  name: 'all',
  searchQuery: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return { ...state, name: action.payload };
    case types.SET_QUERY:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

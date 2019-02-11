import { types } from '../constants';

export const setSearchQuery = searchQuery => {
  return { type: types.SET_QUERY, payload: searchQuery };
};

export const setFilter = filter => {
  return { type: types.SET_FILTER, payload: filter };
};

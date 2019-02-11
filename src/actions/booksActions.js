import axios from 'axios';
import { types } from '../constants';

export const getBooks = () => async dispatch => {
  const response = await axios.get('/books.json');
  dispatch({ type: types.GET_BOOKS, payload: response.data });
};

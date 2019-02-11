import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as booksActions from '../actions/booksActions';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (books, type) => {
  switch (type) {
    case 'priceLow':
      return orderBy(books, 'price');
    case 'priceHigh':
      return orderBy(books, 'price', 'desc');
    case 'author':
      return orderBy(books, 'author');
    default:
      return books;
  }
};

const searchBooks = (books, searchQuery) => {
  return books.filter(
    book =>
      book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      book.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );
};

const filterBooks = (books, type, searchQuery) => {
  return searchBooks(sortBy(books, type), searchQuery);
};

const mapStateToProps = ({ books, filter }) => ({
  books: books.items && filterBooks(books.items, filter.name, filter.searchQuery),
  isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

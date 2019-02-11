import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cartActions';
import BookCard from '../components/BookCard';

const mapStateToProps = ({ cart }, { book: { id } }) => ({
  addedCount: cart.items.reduce((count, item) => count + (item.id === id ? 1 : 0), 0)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookCard);

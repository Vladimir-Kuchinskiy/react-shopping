import { connect } from 'react-redux';

import NavBar from '../components/NavBar';

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, item) => total + item.price, 0),
  itemsCount: cart.items.length
});

export default connect(
  mapStateToProps,
  null
)(NavBar);

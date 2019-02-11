import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uniqBy from 'lodash/uniqBy';

import * as cartActions from '../actions/cartActions';
import Cart from '../components/Cart';

const mapStateToProps = ({ cart }) => ({
  items: uniqBy(cart.items, item => item.id)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

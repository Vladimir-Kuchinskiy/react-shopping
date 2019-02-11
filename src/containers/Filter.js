import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as filterActions from '../actions/filterActions';
import Filter from '../components/Filter';

const mapStateToProps = ({ filter, searchQuery }) => ({
  filter: filter.name,
  searchQuery
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

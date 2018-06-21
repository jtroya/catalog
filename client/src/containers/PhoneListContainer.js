import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { fetchCatalog } from '../actions';
import PhoneList from '../components/PhoneList';

const mapStateToProps = state => ({
  loading: state.catalog.loading,
  catalog: state.catalog.catalog
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCatalog: fetchCatalog }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhoneList));

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { getInfoDetail } from '../actions';
import PhoneDetailComponent from '../components/PhoneDetailComponent';

const mapStateToProps = (state) => ({
  currentId: state.catalog.currentId,
  selectedItem: state.catalog.selectedItem
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getInfoDetail: getInfoDetail }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhoneDetailComponent));

import Index from './index';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions.js';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    renderLogin: false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);

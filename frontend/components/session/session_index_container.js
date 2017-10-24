import SessionIndex from './session_index';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions.js';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      return dispatch(logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionIndex);

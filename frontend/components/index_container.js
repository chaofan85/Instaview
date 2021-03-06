import Index from './index';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions.js';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default connect(
  mapStateToProps,
  null
)(Index);

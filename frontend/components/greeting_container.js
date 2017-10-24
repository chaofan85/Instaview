import Greeting from './greeting.jsx';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions.js';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

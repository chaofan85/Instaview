import Index from './index';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions.js';
import { renderLogin } from '../actions/render_forms_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    renderLogin: false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    renderLoginForm: (shouldRender) => dispatch(renderLogin(shouldRender))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);

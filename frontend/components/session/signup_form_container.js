import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearErrors } from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => {

  const userInfo = {
    email: "",
    fullname: "",
    username: "",
    password: "",
  };

  return {
    userInfo,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

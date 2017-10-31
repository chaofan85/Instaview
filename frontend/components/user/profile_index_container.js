import { connect } from 'react-redux';
import ProfileIndex from './profile_index';
import { fetchUserInfo } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const user = state.entities.user[username];
  return {
    currentUser: state.session.currentUser,
    user: user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: username => dispatch(fetchUserInfo(username)),
    logout: () => dispatch(logout())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileIndex);

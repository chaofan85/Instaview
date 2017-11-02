import { connect } from 'react-redux';
import ProfileIndex from './profile_index';
import { fetchUserInfo } from '../../actions/user_actions';
import { fetchUserPhotos } from '../../actions/photo_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const user = state.entities.user[username];

  return {
    currentUser: state.session.currentUser,
    pageOwner: username,
    user: user,
    photos: state.entities.userPhotos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: username => dispatch(fetchUserInfo(username)),
    fetchUserPhotos: username => dispatch(fetchUserPhotos(username)),
    logout: () => dispatch(logout())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileIndex);

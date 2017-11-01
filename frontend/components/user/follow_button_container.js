import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { followUser,
         unFollowUser,
         uploadAvatar } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.pageOwner;
  const user = state.entities.user[username];
  return {
    currentUser: state.session.currentUser,
    user: user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    followUser: followeeId => dispatch(followUser(followeeId)),
    unFollowUser: followeeId => dispatch(unFollowUser(followeeId)),
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);

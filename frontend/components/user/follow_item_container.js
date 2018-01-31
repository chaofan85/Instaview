import { connect } from 'react-redux';
import FollowItem from './follow_item';
import { fetchUserInfo } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    username: ownProps.username,
    realname: ownProps.realname,
    avatarUrl: ownProps.avatarUrl,
    followed: ownProps.followed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserInfo: username => dispatch(fetchUserInfo(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowItem);

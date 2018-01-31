import { connect } from 'react-redux';
import Follower from './follower';

const mapStateToProps = (state, ownProps) => {
  return {
    followers: ownProps.followers
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follower);

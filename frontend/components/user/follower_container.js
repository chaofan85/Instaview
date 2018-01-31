import { connect } from 'react-redux';
import Follower from './follower';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    followers: ownProps.followers,
    pageOwner: ownProps.pageOwner
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

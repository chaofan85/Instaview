import { connect } from 'react-redux';
import Follower from './follower';

const mapStateToProps = (state, ownProps) => {
  return {
    followers: ownProps.followers,
    pageOwner: ownProps.pageOwner
  };
};


export default connect(
  mapStateToProps,
  null
)(Follower);

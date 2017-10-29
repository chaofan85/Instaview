import { connect } from 'react-redux';
import FeedIndex from './feed_index';

const mapStateToProps = (state) => {
  // console.log(state);
  let newPhoto = {};
  if (state.session.currentUser) {
    return {
      photos: Object.values(state.entities.photos),
      username: state.session.currentUser.username,
      userId: state.session.currentUser.id,
    };
  } else {
    return {
      photos: [],
      username: "",
    };
  }
};

export default connect(
  mapStateToProps,
  null
)(FeedIndex);

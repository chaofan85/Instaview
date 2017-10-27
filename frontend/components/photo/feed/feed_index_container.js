import { connect } from 'react-redux';
import FeedIndex from './feed_index';
// import { getPhotoFeeds } from '../../actions/photo_actions';

const mapStateToProps = (state) => {
  if (state.session.currentUser) {
    return {
      photos: state.session.currentUser.photos,
      username: state.session.currentUser.username
    };
  } else {
    return {
      photos: [],
      username: ""
    };
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getPhotoFeeds: (userId) => dispatch(getPhotoFeeds(userId))
//   };
// };

export default connect(
  mapStateToProps,
  null
)(FeedIndex);

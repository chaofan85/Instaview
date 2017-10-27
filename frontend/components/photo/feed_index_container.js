import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { getPhotoFeeds } from '../../actions/photo_actions';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    photos: state.session.currentUser.photos
  };
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

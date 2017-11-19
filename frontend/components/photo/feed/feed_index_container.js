import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { fetchPhotos, fetchComments } from '../../../actions/photo_actions';

const mapStateToProps = (state) => {

  if (state.session.currentUser) {
    const ids = Object.keys(state.entities.photos).map(id => parseInt(id));
    return {
      photos: state.entities.photos,
      username: state.session.currentUser.username,
      userId: state.session.currentUser.id,
      comments: state.entities.comments,
      currentUser: state.session.currentUser,
      photoIds: state.session.currentUser.feed_ids
    };
  } else {
    return {
      photos: [],
      username: "",
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: (userId, start, end) =>
    dispatch(fetchPhotos(userId, start, end)),
    fetchComments: (photoId) => dispatch(fetchComments(photoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);

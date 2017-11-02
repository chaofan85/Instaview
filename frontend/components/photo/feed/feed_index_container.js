import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { fetchPhotos, fetchComments } from '../../../actions/photo_actions';

const mapStateToProps = (state) => {

  if (state.session.currentUser) {
    return {
      photos: state.entities.photos,
      username: state.session.currentUser.username,
      userId: state.session.currentUser.id,
      comments: state.entities.comments,
      currentUser: state.session.currentUser
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
    fetchPhotos: username => dispatch(fetchPhotos(username)),
    fetchComments: (photoId) => dispatch(fetchComments(photoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);

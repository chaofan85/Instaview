import { connect } from 'react-redux';
import PhotoShowFrame from './photo_show_frame';
import { fetchPhoto,
         addComment,
         addLike,
         deleteLike } from '../../../actions/photo_actions';

const mapStateToProps = (state) => {
  return {
    photo: state.entities.photos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
    addComment: (comment) => dispatch(addComment(comment)),
    addLike: (photoId) => dispatch(addLike(photoId)),
    deleteLike: (photoId) => dispatch(deleteLike(photoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShowFrame);

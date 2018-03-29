import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { addComment, deletePhoto } from '../../../actions/photo_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentIndex);

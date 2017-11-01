import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { addComment, fetchComments } from '../../../actions/photo_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (photoId) => dispatch(fetchComments(photoId)),
    addComment: (comment) => dispatch(addComment(comment)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentIndex);

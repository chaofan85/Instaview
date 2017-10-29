import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { addComment, deleteComment } from '../../../actions/photo_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentIndex);

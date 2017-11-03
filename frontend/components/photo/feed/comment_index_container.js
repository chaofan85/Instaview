import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { addComment } from '../../../actions/photo_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentIndex);

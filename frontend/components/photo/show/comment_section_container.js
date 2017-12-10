import { connect } from 'react-redux';
import CommentSection from './comment_section';
import { addComment,
         addLike,
         deleteLike} from '../../../actions/photo_actions';



const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    addLike: (photoId) => dispatch(addLike(photoId)),
    deleteLike: (photoId) => dispatch(deleteLike(photoId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentSection);

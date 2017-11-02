import { connect } from 'react-redux';
import FeedFooter from './feed_footer';
import { addComment,
         deleteComment,
         addLike,
         deleteLike} from '../../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {

  let comments = ownProps.photo.comment_ids.map(id => {
    return state.entities.comments[id];
  });
  if (state.session.currentUser) {
    return {
      currentUserId: state.session.currentUser.id,
      photo: ownProps.photo,
      comments: comments
    };
  } else {
    return {
      currentUserId: null
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    addLike: (photoId) => dispatch(addLike(photoId)),
    deleteLike: (photoId) => dispatch(deleteLike(photoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedFooter);

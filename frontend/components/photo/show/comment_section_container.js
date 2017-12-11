import { connect } from 'react-redux';
import CommentSection from './comment_section';
import { fetchComments } from '../../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  let comments = ownProps.commentIds.map(id => {
    return state.entities.comments[id];
  });
  if (comments.indexOf(undefined) > -1) {
    comments = [];
  }
  if (state.session.currentUser) {
    return {
      comments: comments
    };
  } else {
    return {
      currentUserId: null
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: photoId => dispatch(fetchComments(photoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentSection);

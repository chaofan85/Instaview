import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { deleteComment } from '../../../actions/photo_actions';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUser.id
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (comment) => dispatch(deleteComment(comment))
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndexItem);

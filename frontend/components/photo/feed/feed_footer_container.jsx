import { connect } from 'react-redux';
import FeedFooter from './feed_footer';
import { addComment, deleteComment } from '../../../actions/photo_actions';

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    currentUserId: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedFooter);

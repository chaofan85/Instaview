import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { addComment } from '../../../actions/photo_actions';

// const mapStateToProps = (state, ownProps) => {
//   let comments = ownProps.photo.comment_ids.map(id => {
//     return state.entities.comments[id];
//   });
//
//   return {
//     comments: comments
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentIndex);

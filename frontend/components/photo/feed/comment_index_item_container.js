import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUser.id
  };
};


export default connect(
  mapStateToProps,
  null
)(CommentIndexItem);

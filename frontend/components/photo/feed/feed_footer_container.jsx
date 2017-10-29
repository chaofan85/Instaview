import { connect } from 'react-redux';
import FeedFooter from './feed_footer';
import { addComment } from '../../../actions/photo_actions';

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedFooter);

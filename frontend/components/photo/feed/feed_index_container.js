import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { fetchPhotos } from '../../../actions/photo_actions';

const mapStateToProps = (state) => {
  // debugger
  if (state.session.currentUser) {
    return {
      photos: state.entities.photos,
      username: state.session.currentUser.username,
      userId: state.session.currentUser.id,
    };
  } else {
    return {
      photos: [],
      username: "",
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: username => dispatch(fetchPhotos(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);

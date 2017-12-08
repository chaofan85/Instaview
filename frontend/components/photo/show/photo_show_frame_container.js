import { connect } from 'react-redux';
import PhotoShowFrame from './photo_show_frame';
import { fetchPhoto } from '../../../actions/photo_actions';

const mapStateToProps = (state) => {
  return {
    photo: state.entities.photos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShowFrame);

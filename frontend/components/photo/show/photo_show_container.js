import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto } from '../../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    photoId: ownProps.match.params.photoId,

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
)(PhotoShow);

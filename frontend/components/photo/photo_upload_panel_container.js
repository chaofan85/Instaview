import { connect } from 'react-redux';
import PhotoUploadPanel from './photo_upload_panel';
import { uploadPhoto } from '../../actions/photo_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    uploadPhoto: (formData) => dispatch(uploadPhoto(formData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PhotoUploadPanel);

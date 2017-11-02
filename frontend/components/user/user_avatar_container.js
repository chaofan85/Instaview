import { connect } from 'react-redux';
import UserAvatar from './user_avatar';
import { uploadAvatar } from '../../actions/user_actions';

// const mapStateToProps = (state, ownProps) => {
//   const user = state.entities.user[ownProps.pageOwner];
//    return {
//     currentUser: state.session.currentUser,
//     user: user
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    uploadAvatar: (id, formData) => dispatch(uploadAvatar(id, formData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserAvatar);

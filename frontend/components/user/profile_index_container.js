import { connect } from 'react-redux';
import ProfileIndex from './profile_index';
import { fetchUserInfo } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    user: state.entities.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: id => dispatch(fetchUserInfo(id))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileIndex);
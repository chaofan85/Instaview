import { connect } from 'react-redux';
import ProfileIndex from './profile_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};


export default connect(
  mapStateToProps,
  null
)(ProfileIndex);

import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    renderLogin: false
  };
};


export default connect(mapStateToProps)(SessionForm);

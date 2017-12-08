import { connect } from 'react-redux';
import photoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    photoId: ownProps.match.params.photoId,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(photoShow);

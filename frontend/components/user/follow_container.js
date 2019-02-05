import { connect } from "react-redux";
import Follow from "./follow";

const mapStateToProps = (state, ownProps) => {
  return {
    follows: ownProps.follows,
    pageOwner: ownProps.pageOwner,
    type: ownProps.type
  };
};

export default connect(
  mapStateToProps,
  null
)(Follow);

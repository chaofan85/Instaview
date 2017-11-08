import React from 'react';
import FollowButtonContainer from './follow_button_container';

class EditOrFollow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.pageOwner === this.props.currentUser.username) {
      return (
        null
      );
    } else {
      return (
        <FollowButtonContainer pageOwner={this.props.pageOwner} />
      );
    }
  }
}

export default EditOrFollow;

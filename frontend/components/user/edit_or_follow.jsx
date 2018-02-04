import React from 'react';
import FollowButtonContainer from './follow_button_container';

const EditOrFollow = ({ user, currentUser, pageOwner }) => {
  if (pageOwner === currentUser.username) {
    return null;
  } else {
    return (
      <FollowButtonContainer pageOwner={pageOwner} />
    );
  }
};

export default EditOrFollow;

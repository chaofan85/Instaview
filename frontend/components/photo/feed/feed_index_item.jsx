import React from 'react';
import FeedHeader from './feed_header';
import FeedBody from './feed_body';
import FeedFooterContainer from './feed_footer_container';

const FeedIndexItem = ({ photo, username }) => {
  return (
    <article className="feed">

      <FeedHeader location={ photo.location }
        username={ username } />

      <FeedBody imageUrl={photo.image_url} />

      <FeedFooterContainer caption={photo.caption}
        photoId={photo.photoId}
        likes={photo.likes}
        likedByCurrentUser={photo.liked_by_current_user} />

    </article>
  );
};

export default FeedIndexItem;

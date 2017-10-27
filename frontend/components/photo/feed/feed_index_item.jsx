import React from 'react';
import FeedHeader from './feed_header';
import FeedBody from './feed_body';
import FeedFooter from './feed_footer';

const FeedIndexItem = ({ photo, username }) => {

  return (
    <article className="feed">
      <FeedHeader location={ photo.location }
        username={ username }
        key={photo.id} />

      <FeedBody imageUrl={photo.image_url} key={photo.id} />
      
      <FeedFooter caption={photo.caption} key={photo.id} />
    </article>
  );
};

export default FeedIndexItem;

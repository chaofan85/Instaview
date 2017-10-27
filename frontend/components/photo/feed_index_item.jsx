import React from 'react';
import FeedHeader from './feed_header';
import FeedBody from './feed_body';
import FeedFooter from './feed_footer';

const FeedIndexItem = ({ photo }) => {
  console.log(photo);
  return (
    <article className="feed">
      <FeedHeader location={photo.location} />
      <FeedBody image_url={photo.image_url} />
      <FeedFooter caption={photo.caption} />
    </article>
  );
};

export default FeedIndexItem;

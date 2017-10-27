import React from 'react';
// import FeedHeader from './feed_header';
// import FeedBody from './feed_body';
// import FeedFooter from './feed_footer';

const FeedIndexItem = ({ photo, username }) => {
  console.log(photo.image_url);
  return (
    <article className="feed">
      {/*<FeedHeader location={photo.location} />*/}
      {/*<FeedBody imageUrl={photo.image_url} />*/}
      {/*<FeedFooter caption={photo.caption} />*/}

      <div className='feed-header'>
        <div className='feed-user-avatar'></div>
        <div className="feed-user-info">
          <div className='feed-username'>{ username }</div>
          { photo.location ?
            <div className="feed-location">{photo.location}</div>
              :
            null }
        </div>
      </div>

      <div className='feed-body'>
        <img src={`${photo.image_url}`} />
      </div>
    </article>
  );
};

export default FeedIndexItem;

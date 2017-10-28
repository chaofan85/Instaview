import React from 'react';
import FeedHeader from './feed_header';
import FeedBody from './feed_body';
import FeedFooter from './feed_footer';

class FeedIndexItem extends React.Component  {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <article className="feed">

        <FeedHeader location={ this.props.photo.location }
          username={ this.props.username } />

        <FeedBody imageUrl={this.props.photo.image_url} />

        <FeedFooter caption={this.props.photo.caption}
          photoId={this.props.photo.photoId}
          likes={this.props.photo.likes}
          likedByCurrentUser={this.props.photo.liked_by_current_user}
          addLike={this.props.addLike}
          deleteLike={this.props.deleteLike} />

      </article>
    );
  }
}

export default FeedIndexItem;

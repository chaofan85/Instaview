import React from 'react';
import FeedHeader from './feed_header';
import FeedBody from './feed_body';
import FeedFooterContainer from './feed_footer_container';

class FeedIndexItem extends React.Component  {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="feed">

        <FeedHeader location={ this.props.photo.location }
          username={ this.props.photo.author }
          userAvatar={ this.props.photo.author_avatar } />

        <FeedBody imageUrl={this.props.photo.image_url} />

        <FeedFooterContainer photo={this.props.photo}
          username={ this.props.username } />

      </article>
    );
  }
}

export default FeedIndexItem;

import React from 'react';
import FeedHeader from './feed_header';
import FeedBody from './feed_body';
import FeedFooter from './feed_footer';

class FeedIndexItem extends React.Component  {
  constructor(props) {
    super(props);

  }


  render() {
    console.log(this.props);
    return (
      <article className="feed">

        <FeedHeader location={ this.props.photo.location }
          username={ this.props.username } />

        <FeedBody imageUrl={this.props.photo.image_url} />

        <FeedFooter photo={this.props.photo}
          username={ this.props.username }
          addLike={this.props.addLike}
          deleteLike={this.props.deleteLike} />

      </article>
    );
  }
}

export default FeedIndexItem;

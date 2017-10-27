import React from 'react';
import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const feeds = this.props.photos.map(photo => {
      return (
        <FeedIndexItem photo={photo}
          username={this.props.username}
          key={photo.photoId} />
      );
    });
    return (
      <section className="feed-index">
        <ul>
          { feeds }
        </ul>
      </section>
    );
  }
}

export default FeedIndex;

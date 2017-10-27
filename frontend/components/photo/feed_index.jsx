import React from 'react';
import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getPhotoFeeds(this.props.userId);
  }

  render() {
    const feeds = this.props.photos.map(photo => {
      return (
        <FeedIndexItem photo={photo} key={photo.id}/>
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

import React from 'react';
import FeedIndexItemContainer from './feed_index_item_container';

class FeedIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.username);
  }

  render() {
    const feeds = this.props.photos.length ?
    this.props.photos.map(photo => {
      return (
        <FeedIndexItemContainer photo={photo}
          username={this.props.username}
          key={photo.photoId} />
      );
    }) : null;
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

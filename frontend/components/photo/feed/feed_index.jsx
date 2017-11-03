import React from 'react';
import FeedIndexItemContainer from './feed_index_item_container';

class FeedIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.userId);

    this.props.photoIds.forEach(id => {
      this.props.fetchComments(id);
    });
  }

  render() {
    const photoArray = Object.values(this.props.photos);
    const photoOrderByDate = photoArray.sort((a, b) => {
      return Date.parse(b.created_at) - Date.parse(a.created_at);
    });

    const feeds = photoArray.length ?
    photoOrderByDate.map(photo => {
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

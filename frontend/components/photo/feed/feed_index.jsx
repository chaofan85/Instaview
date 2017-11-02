import React from 'react';
import FeedIndexItemContainer from './feed_index_item_container';

class FeedIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.userId);

    this.props.currentUser.photo_ids.forEach(id => {
      this.props.fetchComments(id);
    });
  }

  render() {
    const photoArray = Object.values(this.props.photos);
    const feeds = photoArray.length ?
    Object.values(this.props.photos).map(photo => {
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

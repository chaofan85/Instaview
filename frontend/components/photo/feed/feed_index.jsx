import React from 'react';
import FeedIndexItemContainer from './feed_index_item_container';

class FeedIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start: -5,
      end: -1,
      max: this.props.currentUser.feed_ids.length
    };
    this.ifBottom = this.ifBottom.bind(this);
    this.trackScrolling = this.trackScrolling.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.userId,
                           this.state.start,
                           this.state.end);

    this.props.photoIds.forEach(id => {
      this.props.fetchComments(id);
    });
  }

  ifBottom(el) {
    if (el) {
      return el.getBoundingClientRect().bottom - window.innerHeight < -140;
    }
  }

  trackScrolling () {
    const wrappedElement = document.querySelector('.photo-index');
    if (this.ifBottom(wrappedElement)) {
      this.setState({
        start: Math.abs(this.state.start - 5) > this.state.max ?
               -(this.state.max) : this.state.start - 5,
        end: this.state.end - 5
      });
      document.removeEventListener('scroll', this.trackScrolling);

      this.props.fetchPhotos(this.props.userId,
                             this.state.start,
                             this.state.end);
    }
  }

  componentDidUpdate() {
    if (Math.abs(this.state.start) < this.state.max) {
      document.addEventListener('scroll', this.trackScrolling);
    }
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

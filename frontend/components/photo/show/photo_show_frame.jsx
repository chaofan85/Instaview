import React from 'react';
import FeedHeader from '../feed/feed_header';
import CommentSection from './comment_section';

class PhotoShowFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }

  render() {
    const photo = this.props.photo[this.props.photoId];
    let comments;
    if (photo) { comments = photo.comments; }
    return photo ?
    (
      <div className="photo-frame">
        <img src={`${photo.image_url}`} />
        <div className="single-photo-info">
          <FeedHeader
            location={photo.location}
            username={photo.author}
            userAvatar={photo.author_avatar} />
          <CommentSection
            photo={photo}
            comments={comments}/>
        </div>
      </div>
    ) : null;
  }
}

export default PhotoShowFrame;

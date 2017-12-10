import React from 'react';
import FeedHeader from '../feed/feed_header';
import CommentSection from './comment_section';

class PhotoShowFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  likePhoto(photoId){
    this.props.addLike(photoId);
  }

  cancleLike(photoId) {
    this.props.deleteLike(photoId);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }

  render() {
    const photo = this.props.photo[this.props.photoId];
    console.log(photo);
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
          <div className="feed-footer-icons">
            {
              photo.liked_by_current_user ?
              <span className="liked"
                onClick={() => this.cancleLike(photo.photoId)}>
              </span>
              :
              <span className="unliked"
                onClick={() => this.likePhoto(photo.photoId)}></span>
            }
          </div>

          {
            photo.likes ?
            <div className="likes-number">
              {photo.likes} &nbsp;
              {
                photo.likes > 1 ?
                <span>likes</span> : <span>like</span>
              }
            </div>
            :
            null
          }
        </div>
      </div>
    ) : null;
  }
}

export default PhotoShowFrame;

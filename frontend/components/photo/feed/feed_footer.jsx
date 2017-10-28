import React from 'react';

class FeedFooter extends React.Component {
  constructor(props) {
    super(props);

  }

  likePhoto(photoId){
    this.props.addLike(photoId);
  }

  cancleLike(photoId) {
    this.props.deleteLike(photoId);
  }


  render() {
    return (
      <div className="feed-footer">
        <div className="feed-footer-icons">

          {
            this.props.likedByCurrentUser ?
            <span className="liked"
              onClick={() => this.cancleLike(this.props.photo.photoId)}></span>
            :
            <span className="unliked"
              onClick={() => this.likePhoto(this.props.photo.photoId)}></span>
          }

          <span className="comment-icon"></span>
        </div>

        <div className="likes-number">{this.props.photo.likes} likes</div>

        <section className="comment-area">
          <ul className="comment-list">
            {
              this.props.photo.caption ?
              <li className="photo-caption">
                {this.props.username}: {this.props.photo.caption}
              </li>
              :
              null
            }
            <li className="comments-text">Comments</li>
          </ul>
        </section>

      </div>
    );
  }
}

export default FeedFooter;

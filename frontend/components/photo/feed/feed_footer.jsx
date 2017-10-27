import React from 'react';

class FeedFooter extends React.Component {
  constructor(props) {
    super(props);

    this.likePhoto = this.likePhoto.bind(this);
    this.cancleLike = this.cancleLike.bind(this);
  }

  likePhoto(photoId){
    this.props.addLike(photoId);
  }

  cancleLike(photoId) {
    this.props.deleteLike(photoId);
  }


  render() {
    console.log(this.props);
    return (
      <div className="feed-footer">
        <div className="feed-footer-icons">

          {
            this.props.likedByCurrentUser ?
            <span className="liked"
              onClick={() => this.cancleLike(this.props.photoId)}></span>
            :
            <span className="unliked"
              onClick={() => this.likePhoto(this.props.photoId)}></span>
          }

          <span className="comment-icon"></span>
        </div>

        <div className="likes-number">{this.props.likes} likes</div>

      </div>
    );
  }
}

export default FeedFooter;

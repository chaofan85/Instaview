import React from 'react';
import CommentIndexContainer from './comment_index_container';

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
            this.props.photo.liked_by_current_user ?
            <span className="liked"
              onClick={() => this.cancleLike(this.props.photo.photoId)}></span>
            :
            <span className="unliked"
              onClick={() => this.likePhoto(this.props.photo.photoId)}></span>
          }

          <span className="comment-icon"></span>
        </div>

        <div className="likes-number">{this.props.photo.likes} likes</div>

        <CommentIndexContainer photo={this.props.photo}
          username={ this.props.username }/>

      </div>
    );
  }
}

export default FeedFooter;

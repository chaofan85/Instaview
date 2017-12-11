import React from 'react';
import FeedHeader from '../feed/feed_header';
import CommentSectionContainer from './comment_section_container';

class PhotoShowFrame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo_id: this.props.photoId,
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  likePhoto(photoId){
    this.props.addLike(photoId);
  }

  cancleLike(photoId) {
    this.props.deleteLike(photoId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ photoId: this.props.photoId });
    const comment = Object.assign({}, this.state);
    this.props.addComment(comment).then(
      () => {
        this.setState({
        body: ""
      });}
    );
  }

  handleChange() {
    return e => {
      this.setState({ body: e.target.value });
    };
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
    let photoSize = $('.photo').width();
    console.log(photoSize);
  }

  render() {
    const photo = this.props.photo[this.props.photoId];
    // console.log(photo);
    let comments;
    if (photo) { comments = photo.comments; }
    return photo ?
    (
      <div className="photo-frame">
        <img className='photo' src={`${photo.image_url}`} />
        <div className="single-photo-info">
          <FeedHeader
            location={photo.location}
            username={photo.author}
            userAvatar={photo.author_avatar} />
          <CommentSectionContainer
            photo={photo}
            commentIds={photo.comment_ids}/>
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

          <div className="comment-adding">
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                placeholder="Add a comment..."
                value={this.state.body}
                onChange={this.handleChange()}></input>
            </form>
          </div>
          <div className="feed-options" onClick={this.openModal}>
            <div className="feed-options-icon"></div>
          </div>

        </div>
      </div>
    ) : null;
  }
}

export default PhotoShowFrame;

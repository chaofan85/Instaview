import React from 'react';

class FeedFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_id: props.photo.photoId,
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
    this.setState({ photoId: this.props.photo.photoId });
    const comment = Object.assign({}, this.state);
    this.props.addComment(comment);
  }

  handleChange() {
    return e => {
      this.setState({ body: e.target.value });
    };
  }


  render() {
    const comments = this.props.photo.comments.map(comment => {
      console.log(comment);
      return (
        <li key={comment.id}>{comment.username}: {comment.body}</li>
      );
    });
    return (
      <div className="feed-footer">
        <div className="feed-footer-icons">

          {
            this.props.photo.likedByCurrentUser ?
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
            { comments }
          </ul>
          <div className="comment-adding">
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                placeholder="Add a comment..."
                onChange={this.handleChange()}></input>
            </form>
          </div>
        </section>

      </div>
    );
  }
}

export default FeedFooter;

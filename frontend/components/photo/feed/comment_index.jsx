import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_id: props.photo.photoId,
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ photoId: this.props.photo.photoId });
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

  render() {
    let comments = this.props.comments.map(comment => {
      return (
        <CommentIndexItemContainer comment={comment} key={comment.id} />
      );
    });
    return (

      <section className="comment-area">
        <ul className="comment-list">
          {
            this.props.photo.caption ?
            <li className="photo-caption">
              <span className="author-name">
                {this.props.photo.author}
              </span> : {this.props.photo.caption}
            </li>
            :
            null
          }
          {
            this.props.comments ?
            <li className="comments-text">Comments</li> : null
          }
          { comments }
        </ul>
        <div className='comment-column'>
          <div className="comment-adding">
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                placeholder="Add a comment..."
                value={this.state.body}
                onChange={this.handleChange()}></input>
            </form>
          </div>
          <div className="feed-options">
            <div className="feed-options-icon"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default CommentIndex;

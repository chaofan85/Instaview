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
    const comments = this.props.photo.comments.map(comment => {
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
                {this.props.username}
              </span> : {this.props.photo.caption}
            </li>
            :
            null
          }
          {
            this.props.photo.comment_ids.length ?
            <li className="comments-text">Comments</li> : null
          }
          { comments }
        </ul>
        <div className="comment-adding">
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              placeholder="Add a comment..."
              value={this.state.body}
              onChange={this.handleChange()}></input>
          </form>
        </div>
      </section>
    );
  }
}

export default CommentIndex;

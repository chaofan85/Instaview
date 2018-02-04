import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_id: props.photo.photoId,
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ renderOptions: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ renderOptions: false });
    document.body.style.overflow = 'visible';
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ photoId: this.props.photo.photoId });
    const comment = Object.assign({}, this.state);
    this.props.addComment(comment).then(
      () => {
        this.setState({
        body: ""
      });
    });
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
          <div className="feed-options" onClick={this.openModal}>
            <div className="feed-options-icon"></div>
          </div>

          {
            this.state.renderOptions ?
            <div className='user-info-edit'>
              <div className='modal-form'>
                <ul className='modal-options'>
                  <li>
                    <Link to={`/p/${this.state.photo_id}`}>
                    <button onClick={this.closeModal}>Go to post</button>
                    </Link>
                  </li>
                  <li>
                    <button onClick={this.closeModal}>Cancel</button>
                  </li>
                </ul>
                <span className="modal-close"
                  onClick={this.closeModal}>&times;</span>
              </div>
              <div className="modal-bg"></div>
            </div>
            :
            null
          }
        </div>
      </section>
    );
  }
}

export default CommentIndex;

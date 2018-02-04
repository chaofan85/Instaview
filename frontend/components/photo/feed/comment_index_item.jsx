import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confirmDelete : false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  openModal() {
    this.setState({ confirmDelete: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ confirmDelete: false });
    document.body.style.overflow = 'visible';
  }

  removeComment() {
    this.closeModal();
    this.props.deleteComment(this.props.comment);
  }

  render() {
    return (
      <li className="comment-item">
        <span className="comment-body">
          <span className="author-name">
            {this.props.comment.username}
          </span> : {this.props.comment.body}
        </span>
        {
          this.props.comment.author_id === this.props.currentUserId ?
          <span className="delete-comment" onClick={this.openModal}>
            &times;
          </span>
          :
          null
        }

        {
          this.state.confirmDelete ?
          <div className='confirmation'>
            <div className='modal-form'>
              <ul className='modal-options'>
                <li>
                  <button onClick={this.removeComment}>Delete Comment</button>
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
      </li>
    );
  }
}

export default CommentIndexItem;

import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confirmDelete : false };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ confirmDelete: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ confirmDelete: false });
    document.body.style.overflow = 'visible';
  }

  render() {
    return (
      <li className="comment-item" key={this.props.comment.id}>
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
              <ul>
                <li>lalala</li>
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

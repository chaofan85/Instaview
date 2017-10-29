import React from 'react';

class CommentIndexItem extends React.Component {

  render() {
    console.log(this.props);
    return (
      <li key={this.props.comment.id}>
        <span className="author-name">
          {this.props.comment.username}
        </span> : {this.props.comment.body}
        {
          this.props.comment.author_id === this.props.currentUserId ?
          <span className="delete-comment">&times;</span>
          :
          null
        }
      </li>
    );
  }
}

export default CommentIndexItem;

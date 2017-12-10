import React from 'react';
import CommentIndexItemContainer from '../feed/comment_index_item_container';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let frameHeight = $(".photo-frame").height();
    console.log(frameHeight);
    $(".comments").height(frameHeight-210);
  }


  render() {
    let frameHeight = $(".photo-frame").height();
    console.log(this.props.comments);
    let comments;
    if (this.props.comments) {
      comments = Object.values(this.props.comments).map(comment => {
        return (
          <CommentIndexItemContainer comment={comment} key={comment.id} />
        );
      });
    }

    return (
      <div className="comments">
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
      </div>
    );
  }
}

export default CommentSection;

import React from 'react';
import CommentIndexItemContainer from '../feed/comment_index_item_container';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let frameHeight = $(".photo-frame").height();
    $(".comments").height(frameHeight-230);
    let photoSize = $('.photo').width();
    $(".photo-frame").width(photoSize+335);
  }


  render() {
    let frameHeight = $(".photo-frame").height();

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

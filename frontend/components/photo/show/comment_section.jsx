import React from 'react';

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

    return (
      <div className="comments"></div>
    );
  }
}

export default CommentSection;

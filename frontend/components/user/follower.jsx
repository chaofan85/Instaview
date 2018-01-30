import React from 'react';

class Follower extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.followers);
    return (
      <div><span>{this.props.followers.length}</span> followers</div>
    );
  }

}

export default Follower;

import React from 'react';

class Follower extends React.Component {

  constructor(props) {
    super(props);
    this.state = { renderUpload: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ renderUpload: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ renderUpload: false });
    document.body.style.overflow = 'visible';
  }

  render() {
    console.log(this.props.followers);
    return (
      <div className="followers-open">
        <div className="followers" onClick={this.openModal}><span>
          {this.props.followers.length}
        </span>followers</div>

        { this.state.renderUpload ? (
          <div className='modal-panel'>
            <div className='modal-form'>
              <div className="follower-list-title">Followers</div>
              <span className="modal-close"
                onClick={this.closeModal}>&times;</span>
            </div>
            <div className="modal-bg"></div>
          </div>) : null }
      </div>
    );
  }

}

export default Follower;

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
      <div>
        <div onClick={this.openModal}><span className="followers">
          {this.props.followers.length}
        </span>followers</div>

        { this.state.renderUpload ? (
          <div className='upload-panel'>
            <div className='modal-form'>
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

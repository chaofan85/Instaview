import React from 'react';

class UserAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderEdit: false,
      imageFile: null,
      imageUrl: null,
     };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.uploadAvatar = this.uploadAvatar.bind(this);
  }

  openModal() {
    this.setState({ renderEdit: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ renderEdit: false });
    document.body.style.overflow = 'visible';
  }

  uploadAvatar(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }



  render() {
    return (
      <section className="avatar-edit">
        <div className="user-profile-avatar" onClick={this.openModal}></div>

        {
          this.state.renderEdit ?
          <div className='user-info-edit'>
            <div className='modal-form'>
              <ul className='modal-options'>
                <li>
                  <button>
                    Remove Current Photo
                  </button>
                </li>
                <li>
                  <label htmlFor="upload">
                    <div>Upload Photo</div>
                    <input type="file"
                      className="choose-photo"
                      onChange={ this.uploadAvatar }
                      id="upload" style={{display:"none"}}/>
                  </label>
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
      </section>
    );
  }
}

export default UserAvatar;

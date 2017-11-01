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
    this.handleSubmit = this.handleSubmit.bind(this);
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
      this.handleSubmit(e);
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const file = this.state.imageFile;
    const id = this.props.currentUser.id;
    const formData = new FormData();
    if (file) {
      formData.append("user[avatar]", file);
      // formData.append("user[]")
    }

    this.props.uploadAvatar(id, formData).then(this.props.closeModal);
  }



  render() {
    return (
      <section className="avatar-edit">
        <div className="user-profile-avatar" onClick={this.openModal}>
          <img src={`${this.props.user.avatar_url}`} />
        </div>

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

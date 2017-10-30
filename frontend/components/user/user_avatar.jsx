import React from 'react';

class UserAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { renderEdit: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ renderEdit: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ renderEdit: false });
    document.body.style.overflow = 'visible';
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
                  <button onClick={this}>
                    Remove Current Photo
                  </button>
                </li>
                <li>
                  <input type='file' />Upload Photo
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

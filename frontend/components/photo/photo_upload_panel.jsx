import React from 'react';

class PhotoUploadPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageFile: null, imageUrl: null };
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  uploadPhoto(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    debugger
    fileReader.onloadend = () => {
      debugger
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit() {
    const file = this.state.imageFile;

    const formData = new FormData();
    debugger
    if (file) {
      formData.append("photo[image]", file);
    }

    this.props.uploadPhoto(formData);
  }

  render() {
    return (
      <div className="photo-ul">
        <input type="file"
          className="choose-photo"
          onChange={ this.uploadPhoto }/>

        <img src={ this.state.imageUrl }/>
        <button className="upload-button" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default PhotoUploadPanel;

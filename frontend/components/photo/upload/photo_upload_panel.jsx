import React from 'react';

class PhotoUploadPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      location: "",
      caption: "",
     };
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  uploadPhoto(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const file = this.state.imageFile;

    const formData = new FormData();
    if (file) {
      formData.append("photo[image]", file);
      formData.append("photo[location]", this.state.location);
      formData.append("photo[caption]", this.state.caption);
    }

    this.props.uploadPhoto(formData).then(this.props.closeModal);
  }

  render() {
    return (
      <div className="photo-ul">
        <form className='photo-info' onSubmit={this.handleSubmit}>
          <label htmlFor="upload">
            <div className='upload-symbol'>&#8682;</div>
            <input type="file"
              className="choose-photo"
              onChange={ this.uploadPhoto }
              id="upload" style={{display:"none"}}/>
          </label>


          <input type="text"
            className="location"
            value={this.state.location}
            onChange={this.handleChange('location')}
            placeholder="Add Location (optional)" />

          <input type="text"
            className="caption"
            value={this.state.caption}
            onChange={this.handleChange('caption')}
            placeholder="Write a caption..." />

          <button className="upload-button">Submit</button>
        </form>

        <img className="photo-preview" src={ this.state.imageUrl }/>

      </div>
    );
  }
}

export default PhotoUploadPanel;

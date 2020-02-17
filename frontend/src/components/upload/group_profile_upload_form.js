import React from 'react';
import axios from 'axios';

class GroupProfileUploadForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageFile: null
    }

    this.fileUpload = this.fileUpload.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.renderImageUploadBtn = this.renderImageUploadBtn.bind(this);
  }

  fileUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', e.target.files[0], e.target.files[0].name);
    axios
      .patch(`/api/upload/${this.props.group._id}`, formData, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
        }
      })
      .then(response => {
        console.log(response);
      });
    window.location.reload();
  }

  renderImage() {
    if (this.props.group !== undefined) {
      return <img src={this.props.group.picture} />;
    } else {
      return null
    }
  }

  renderImageUploadBtn() {
    if (this.props.currentUser.id === this.props.group.owner_id) {
      return <input type="file" onChange={this.fileUpload} />
    } else {
      return null
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.renderImageUploadBtn()}
        {this.renderImage()}
      </div>
    );
  }
}

export default GroupProfileUploadForm;
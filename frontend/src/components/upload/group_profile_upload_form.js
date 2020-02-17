import React from 'react';
import axios from 'axios';

class GroupProfileUploadForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageFile: null
    }

    this.fileUpload = this.fileUpload.bind(this);
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

  render() {
    return (
      <div>
        <input className="no-input" type="file" onChange={this.fileUpload} />
      </div>
    );
  }
}

export default GroupProfileUploadForm;
import React from 'react';
import axios from 'axios';

class UploadForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageFile: null
    }

    this.fileUpload = this.fileUpload.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  fileUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', this.state.imageFile, this.state.imageFile.name);
    axios.post('/api/upload/', formData, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      }
    }).then(response => {
      console.log(response)
    });
  }

  handleFile(e) {
    this.setState({imageFile: e.target.files[0]});
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <input type="file" onChange={this.handleFile} />
        <button onClick={this.fileUpload}>Upload</button>
      </div>
    );
  }
}

export default UploadForm;
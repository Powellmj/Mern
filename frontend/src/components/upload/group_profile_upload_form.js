import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { uploadGroupProfileImage } from '../../actions/upload_actions';

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
    this.props.upload(formData, this.props.group._id)
  }

  render() {
    return (
      <div>
        <input className="no-input" type="file" onChange={this.fileUpload} />
      </div>
    );
  }
}

const mDTP = dispatch => {
  return {
    upload: (data, group_id) => dispatch(uploadGroupProfileImage(data, group_id))
  }
}

export default connect(null, mDTP)(GroupProfileUploadForm);
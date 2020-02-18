import React from "react";
import { connect } from "react-redux";
import { uploadEventProfileImage } from "../../actions/upload_actions";

class EventProfileUploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFile: null
    };

    this.fileUpload = this.fileUpload.bind(this);
  }

  fileUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", e.target.files[0], e.target.files[0].name);
    this.props.upload(formData, this.props.event._id);
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
    upload: (data, event_id) =>
      dispatch(uploadEventProfileImage(data, event_id))
  };
};

export default connect(null, mDTP)(EventProfileUploadForm);

import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      imageFile: null
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleInput(e) {
    this.setState({title: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  handleFile(e) {
    debugger
    this.setState({imageFile: e.currentTarget.files[0]});
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="test" value={this.state.title} onChange={this.handleInput} />
        <input type="file" 
          onChange={this.handleFile}
        />
        <button>Upload</button>
      </form>
    )
  }
}

export default UploadForm;
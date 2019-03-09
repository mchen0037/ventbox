import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import axios from "axios";

const BACKEND_SERVER = "http://0.0.0.0:4000";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write your post here!"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    let result = await axios.post(
      BACKEND_SERVER + "/vent", { text: this.state.value });
    this.props.refresh();
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Input
          fluid
          action={{
            color: "gray",
            content: "Submit",
            onClick: this.handleSubmit
          }}
          placeholder={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default InputBox;

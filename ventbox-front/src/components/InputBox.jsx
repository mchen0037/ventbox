import React, { Component } from "react";
import { Input } from "semantic-ui-react";

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

  handleSubmit(event) {
    console.log(event);
    alert("A post was submitted: " + this.state.value);
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

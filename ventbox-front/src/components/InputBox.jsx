import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";

const BACKEND_SERVER = "http://0.0.0.0:4000";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    await axios.post(
      BACKEND_SERVER + "/vent", { text: this.state.value });
    this.props.refresh();
    await this.setState({value: ""})
  }

  render() {
    return (
      <div>
        <Form>
          <Form.TextArea value={this.state.value} onChange={this.handleChange} placeholder='Vent!'/>
          <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default InputBox;

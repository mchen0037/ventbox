import React, { Component } from 'react';

class Poster extends Component{

  constructor(props){
    super(props);
    this.state={
      value: 'Please write your post here!'
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value});
  }

  handleSubmit(event) {
    alert('A post was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea value=
              {this.state.value}
              onChange=
              {this.handleChange} />
            </label>
            <div>
              <input type ="submit" value="Submit" />
            </div>
          </form>
        </div>
      );
  }
}

export default Poster

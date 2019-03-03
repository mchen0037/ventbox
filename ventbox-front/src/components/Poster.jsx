import React, { Component } from 'react';
// Make sure you import this in order to use things from semantic
import {Button, Card} from 'semantic-ui-react';
// Import axios for part 5.
import axios from 'axios';
import ReactDOM from 'react-dom';
import '../App.css';

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

  render(){
    return(


      <form onSubmit={this.handleSubmit}>

        <label>
          Post:
          <textarea value= 
          {this.state.value} 
          onChange=
          {this.handleChange} />
        </label>

        <input type ="submit" value="Submit" />
        
      </form>

      );
  }
}

export default Poster


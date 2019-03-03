import React, { Component } from 'react';
// Make sure you import this in order to use things from semantic
import {Button, Card} from 'semantic-ui-react';
// Import axios for part 5.
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Container} from 'semantic-ui-react'
import '../App.css';


const BACKEND_SERVER = "http://0.0.0.0:4000";


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

//this is where we will do stuff with the user input
handleSubmit(event) {
    axios.post(BACKEND_SERVER),{
      vent_text: this.state.value
    }
    alert('A post was submitted: ' + this.state.value);
    event.preventDefault();
  }

  // handleClickSubmit(e) {
  //     console.log('hola');
  // }

  render(){
    return(


      <form onSubmit={this.handleSubmit}>

        <label>
          <div>        
          Post: 
          </div>
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


  //  <div class="ui big icon input">
        // <input type="text" placeholder="Post..."></input>
        
        // <Button id="Hello!" onClick={this.handleClickSubmit}>Submit</Button>

       //  </div>


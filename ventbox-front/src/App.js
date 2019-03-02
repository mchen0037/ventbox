import React, { Component } from 'react';
import './App.css';
import Examples from './components/examples.jsx';
import {Button} from 'semantic-ui-react';
import {Container} from "semantic-ui-react";

let fakedata =  [
{ 
    author:"Shawn Spencer", 
    text:"I've heard it both ways"
  },
  { 
    author:"Burton Guster", 
    text:"You hear about Pluto? That's messed up" 
  }
];

class Post extends Component{

// constructor() {
// 	super()
// 	this.state = {
// 		texts : ["", fakedata[0].text]
// 		activeText: 0
// 		// //display: false
// 		// post: fakedata[0].text,
// 		// postHidden: ""

// 	}
		
// 	showButton() {
// 		this.setState({
// 			post: fakedata[0].text,
// 	})

		
// 	}

// }



  render(){
    return (
    	 <div>
    	 <header className="App-header">
    	 	<Container>{fakedata[1].text}</Container>
    	 </header>
    	</div>
      );

  }
}


class Postbutton extends Component{
  render(){
    return (
            <Button onClick={this.props.handleClick}>{this.props.text} </Button>

      );

  }
}

class App extends Component {
  render() {
    return (
      <div>
          <Post/>
      </div>
    );
  }
}

export default App;

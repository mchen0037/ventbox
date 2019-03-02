import React, { Component } from 'react';
// Make sure you import this in order to use things from semantic
import {Button} from 'semantic-ui-react';
// Import axios for part 5.
import axios from 'axios';

// ============================PART ONE=========================================
// Comments are weird in JSX. sometimes they are in // and sometimes we have to
// say "This is JAVA SCRIPT by using { } and then commenting within that."
class HelloWorld extends Component{
  // every component needs to have a render() function, but can have
  // other functions as well, like componentDidMount, componentWillMount...
  render() {
    // You need to return one block of HTML tag in the return statement.
    // Since we can only return one, we wrap everything in a <div></div>.
    return (
      <div>
        {/* This is a component! It isn't very useful or reusable, but this
        is the basic syntax to define compoenents that we will use throughout
        our code. */}
        <h1>Hello World!</h1>
      </div>
    );
  }
}
// Not much to see here, let's keep going.
// =============================================================================

// ============================PART TWO=========================================
// We're going to use a library to help us make pretty buttons and other menu
// objects because I don't do design or CSS. Unless you know how to, which
// would be great! The library is Semantic UI and there is documentation
// here: https://react.semantic-ui.com/
class SemanticButton extends Component {
  render() {
    return(
      <Button>Button!</Button>
    );
  }
}
// There are a ton of other things that semantic-ui provides--Groups, Stacks,
// Navbars, etc. We can play around with them and make our webiste pretty.
// =============================================================================

// ============================PART THREE=======================================
// Components would be no fun if they were all the same! They're similar in
// core, but they definitely should display different information. Here, we can
// call variables passed in from the parent component (Examples) through 'props'
// This is the main idea of react.
class SemanticButtonCustom extends Component {
  render() {
    return(
      <Button>{this.props.text}</Button>
    );
  }
}
// Essentially, most of React is just calling components--defining your own
// from scratch or from premade libraries.
// =============================================================================

// ============================PART FOUR========================================
// This is when things get fun--we want our buttons to actually do something,
// not just display some text. For example, let's have it iterate some number
// when we click it.

// Every Component class has some "state" variable to it. We have to initialize
// this state in the 'main' parent component. Scroll down to the class Examples
// and see the constructor() function.
// So how should we determine what happens when we press the button? We can use
// Javascript functions and pass different ones into our buttons which are
// similar. However, the will do different things. The + button will map to
// a increaseStateNumber() function and - button will map to decreaseStateNumber
class FunctionalButton extends Component {
  render() {
    return(
        <Button onClick={this.props.handleClick}>{this.props.text}</Button>
    );
  }
}
// =============================================================================

// ============================PART FIVE========================================
// Now let's try calling an endpoint from our front end! Start by taking a look
// at the ventbox-back, to understand what Flask is doing for us.

// These are our yes and no buttons that we mentioned in the server.py. To
// Access those backend servers that we mentioned i.e: /thaifood/yes
// To do this, we need to use a library called axios.
const BACKEND_SERVER = "http://0.0.0.0:4000";

class TwoButtons extends Component {
  async callBackendYes() {
    // "visit" the 0.0.0.0:4000 site and get all the data from the page
    axios.get(
      BACKEND_SERVER + '/thaifood/yes'
    ).then(res => {
      console.log(res.data)
    })
  }

  callBackendNo() {
    axios.get(
      BACKEND_SERVER + '/thaifood/no'
    ).then(res => {
      console.log(res.data)
    })
  }

  render() {
    return(
      <div>
        <Button onClick={this.callBackendYes}>Yes</Button>
        <Button onClick={this.callBackendNo}>No</Button>
      </div>
    );
  }
}
// =============================================================================

class Examples extends Component {
  // This function is run whenever the page is first opened.
  constructor() {
    super()
    this.state = {
      number: 30
    }
    // We need to add this for our functions --tbh not too sure why lol
    this.decreaseStateNumber = this.decreaseStateNumber.bind(this);
    this.increaseStateNumber = this.increaseStateNumber.bind(this);
  }

  decreaseStateNumber() {
    let x = this.state.number
    this.setState( {
      number: x - 1
    })
  }

  increaseStateNumber() {
    let x = this.state.number
    this.setState( {
      number: x + 1
    })
  }

  render() {
    // Use this for debugging--outputs on your browser in Developer Tools (F12?)
    // console.log(this.state)
    return (
      <div>
        {/* The following are equivalent */}
        <div>1: Hello World Component: <HelloWorld/></div>
        <div>2: Button: <SemanticButton></SemanticButton></div>
        <div>3: Custom Button: <SemanticButtonCustom text="Hey there.."/></div>
        <div>4: Functional Button:
          <FunctionalButton text="-" handleClick={this.decreaseStateNumber}/>
            {this.state.number}
          <FunctionalButton text="+" handleClick={this.increaseStateNumber}/>
        </div>
        <div>5: Do you like Thai Food? <TwoButtons/></div>
      </div>
    );
  }
}

export default Examples;

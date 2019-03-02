import React, { Component } from 'react';
// Make sure you import this in order to use things from semantic
import {Button} from 'semantic-ui-react';

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
        <h>Hello World!</h>
      </div>
    );
  }
}

// We're going to use a library to help us make pretty buttons and other menu
// objects because I don't do design or CSS. Unless you know how to, which
// would be great! The library is Semantic UI and there is documentation
// here: https://react.semantic-ui.com/
class SemanticButton extends Component {
  render() {
    return(
      <div>
        <div>
          <Button>Button!</Button>
        </div>
      </div>
    );
  }
}
// Components would be no fun if they were all the same! They're similar in
// core, but they definitely should display different information. Here, we can
// call variables passed in from the parent component (Examples) through 'props'
// This is the main idea of react.
class SemanticButtonCustom extends Component {
  render() {
    return(
      <div>
        <div>
          <Button>{this.props.text}</Button>
        </div>
      </div>
    );
  }
}

// Essentially, most of React is just calling components--defining your own
// from scratch or from premade libraries.

class Examples extends Component {
  render() {
    return (
      <div>
        {/* The following are equivalent */}
        1: Hello World Component: <HelloWorld/>
        2: Button: <SemanticButton></SemanticButton>
        3: Custom Button: <SemanticButtonCustom text="Hey there.."/>
      </div>
    );
  }
}

export default Examples;

import React, { Component } from 'react';
import {Container} from "semantic-ui-react";
import './App.css';
import Examples from './components/examples.jsx';
import Post from './components/post.jsx';

import "./assets/post.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Container>
          <Post/>
      </Container>
      </React.Fragment>
    );
  }
}

export default App;

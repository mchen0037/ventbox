import React, { Component } from 'react';
// Make sure you import this in order to use things from semantic
import {Button, Card} from 'semantic-ui-react';

let fakeData = {
  data: [
    {
      text: "Man, this Guanxi Jasmine Green tea from Emtea is the dabomb.com!",
      likes: 37,
      tags: "tea"
    },
    {
      text: "Yiying is the best <3",
      likes: 999999999999999999999999999,
      tags: ["Yiying"]
    },
    {
      text: "I love thai food from New Thai Cuisine!! Today, we got pho, red curry, and pad thai.",
      likes: 12,
      tags: ["food", "pho", "curry"]
    },
    {
      text: "Jesus is probably going to win HackMerced..",
      likes: 93,
      tags: ["Jesus", "HackMerced"]
    }
  ]
};

class FunctionalButton extends Component {
  render() {
    return(
        <Button onClick={this.props.handleClick}>{this.props.text}</Button>
    );
  }
}

class Post extends Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }
    // We need to add this for our functions --tbh not too sure why lol
    this.increaseStateNumber = this.increaseStateNumber.bind(this);
  }

  increaseStateNumber() {
    let x = this.state.number
    this.setState( {
      number: x + 1
    })
  }
  render() {
    return(
      <div class = "post1">
        <Card>
          <Card.Content>
            <Card.Header content="This is a Post."/>
            <Card.Meta content="tags here?"/>
            <Card.Description content="Dude.. this Guanxsi Jasmine Green tea from
              Emtea, steeped for 8 minutes is DABOMB.COM"/>
          </Card.Content>
          <div class = "pbutton">

            <FunctionalButton handleClick={this.increaseStateNumber}/ ><i class="heart icon"></i>
            {this.state.number}


          </div>
        </Card>
      </div>

      // <Button><i class="heart icon"> 37</i></Button>
    );
  }
}
export default Post;

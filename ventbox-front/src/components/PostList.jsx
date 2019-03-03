import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";

class FunctionalButton extends Component {
  render() {
    return <Button onClick={this.props.handleClick}>{this.props.text}</Button>;
  }
}

class Post extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
    // We need to add this for our functions --tbh not too sure why lol
    this.increaseStateNumber = this.increaseStateNumber.bind(this);
  }

  increaseStateNumber() {
    let x = this.state.number;
    this.setState({
      number: x + 1
    });
  }

  render() {
    return (
      <div class = 'P'>
        <Card>
          <Card.Content>
            <Card.Header content={this.props.text} />
            <Card.Meta content={this.props.tags} />
          </Card.Content>
          <div class="pbutton">
            <FunctionalButton handleClick={this.increaseStateNumber} />
            <i class="heart icon" />
            {this.props.likes}
          </div>
        </Card>
      </div>
    );
  }
}

class PostList extends Component {
  render() {
    return (
      <div class = 'listP'>
        {this.props.data.map(d => (
          <Post text={d.text} tags={d.tags} likes={d.likes} />
        ))}
      </div>
    );
  }
}

export default PostList;

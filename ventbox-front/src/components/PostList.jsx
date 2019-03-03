import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";

class Post extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Content>
            <Card.Header content={this.props.text} />
            <Card.Meta content={this.props.tags} />
            <Card.Description content={this.props.likes} />
          </Card.Content>
        </Card>
      </div>
    );
  }
}

class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(d => (
          <Post text={d.text} tags={d.tags} likes={d.likes} />
        ))}
      </div>
    );
  }
}

export default PostList;

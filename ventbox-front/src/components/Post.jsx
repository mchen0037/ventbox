import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";
// import axios from 'axios';
//
// const BACKEND_SERVER = "http://0.0.0.0:4000";

class Post extends Component {
  constructor(props) {
    super(props);
    this.increaseStateNumber = this.increaseStateNumber.bind(this);
  }

  increaseStateNumber() {
    this.props.onLike(this.props.id);
  }

  render() {
    return (
      <div>
        <Card fluid>
          <Card.Content>
            <div align="right">
              <Card.Meta content={this.props.polarity} />
            </div>
            <Card.Description content={this.props.text} />
          </Card.Content>
          <Card.Content extra>
            <div align="right">
              <Button compact onClick={this.increaseStateNumber}>
                <i className="heart icon" />
                {this.props.likes}
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Post;

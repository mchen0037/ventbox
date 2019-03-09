import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";
// import axios from 'axios';
//
// const BACKEND_SERVER = "http://0.0.0.0:4000";

class Post extends Component {

  increaseStateNumber() {
    // axios.post(
    //   BACKEND_SERVER + 'increaseStateNumber'
    // )
    console.log('increase number of likes!')
  }

  render() {
    return (
      <div>
        <Card fluid>
          <Card.Content>
            <p align='right'>
              <Card.Meta content={this.props.polarity}/>
            </p>
            <Card.Description content={this.props.text}/>
          </Card.Content>
          <Card.Content extra>
            <p align='right'>
              <Button compact onClick={this.increaseStateNumber}>
                <i class="heart icon"/>
                {this.props.likes}
              </Button>
            </p>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Post;

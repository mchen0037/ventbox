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
        <Card>
          <Card.Content>
            <Card.Header content={this.props.text}/>
            <Card.Meta content={this.props.tags}/>
          </Card.Content>
          <div>
            <Button onClick={this.increaseStateNumber}>
              <i class="heart icon"/>
              {this.props.likes}
            </Button>
          </div>
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

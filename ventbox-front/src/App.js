import React, { Component } from "react";
import Post from "./components/Post.jsx";
import Refresh from "./components/refresh.jsx";
import InputBox from "./components/InputBox.jsx";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import "./assets/postl.css";

// const BACKEND_SERVER = "http://0.0.0.0:4000";
const BACKEND_SERVER = "https://ventbox-backend.herokuapp.com/";

// second grid.row - creating all post: by using map;
// modify post-liked so it makes a call to the backend;
// end point for like.
// make /like which then [query] 1: query the likes for the post id # of likes;
//                                2: update that row with likes = likes + 1;
//                                conn.commit();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.callRefresh = this.callRefresh.bind(this);
    this.callRefresh();

    this.postLiked = this.postLiked.bind(this);
  }

  async callRefresh() {
    let result = await axios.get(BACKEND_SERVER + "/refresh");
    await this.setState({ data: result.data });
  }

  async postLiked(id) {
    await axios.post(BACKEND_SERVER + "/likes", { id: id });
    this.callRefresh();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Grid columns="one" centered>
          <Grid.Row>
            <Grid.Column width={4} />
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4}>
              <center>
                <Refresh refresh={this.callRefresh} />
              </center>
            </Grid.Column>
          </Grid.Row>

          {this.state.data.map(d => (
            <Grid.Row key={d.id}>
              <Grid.Column width={4}>
                <center>
                  <Post
                    key={d.id}
                    id={d.id}
                    text={d.text}
                    polarity={d.polarity}
                    likes={d.likes}
                    onLike={this.postLiked}
                  />
                </center>
              </Grid.Column>
            </Grid.Row>
          ))}

          <Grid.Row>
            <Grid.Column width={4}>
              <center>
                <InputBox refresh={this.callRefresh} />
              </center>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;

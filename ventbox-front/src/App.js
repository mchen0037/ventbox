import React, { Component } from "react";
import Post from "./components/Post.jsx";
import Refresh from "./components/refresh.jsx";
import Poster from "./components/Poster.jsx";
import axios from 'axios';
import { Grid } from "semantic-ui-react";
import "./assets/postl.css";

const BACKEND_SERVER = "http://0.0.0.0:4000";

let fakeData = {
  data: [
    {
      text: "Man, this Guanxi Jasmine Green tea from Emtea is the dabomb.com!",
      likes: 37,
      polarity: 3.2
    },
    {
      text: "Yiying is the best <3",
      likes: 999999999999999999999999999,
      polarity: 2.7
    },
    {
      text:
        "I love thai food from New Thai Cuisine!! Today, we got pho, red curry, and pad thai.",
      likes: 12,
      polarity: 13
    },
    {
      text: "Jesus is probably going to win HackMerced..",
      likes: 93,
      polarity: -2
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData.data
    };
  }

  async callRefresh(){
    axios.get(
      BACKEND_SERVER + '/refresh'
    ).then(res => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <div>
          <Grid columns='one' centered>
            <Grid.Row>
              <Grid.Column width={4}>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={4}>
                <center>
                  <Refresh refresh={this.callRefresh}/>
                </center>
              </Grid.Column>
            </Grid.Row>

            {this.state.data.map(d => (
              <Grid.Row>
                <Grid.Column width={4}>
                  <center>
                    <Post text={d.text} polarity={d.polarity} likes={d.likes}t/>
                  </center>
                </Grid.Column>
              </Grid.Row>
            ))}

            <Grid.Row>
              <Grid.Column width={4}>
                <center>
                  <Poster/>
                </center>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>

    );
  }
}

export default App;

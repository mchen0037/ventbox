import React, { Component } from "react";
// import Examples from "./components/examples.jsx";
import PostList from "./components/PostList.jsx";
import Refresh from "./components/refresh.jsx";
import Poster from "./components/Poster.jsx";
import { Grid } from "semantic-ui-react";
import "./assets/postl.css";
import "./App.css";

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
      text:
        "I love thai food from New Thai Cuisine!! Today, we got pho, red curry, and pad thai.",
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData.data
    };
  }
  render() {
    return (
      <div>
        <center>
          <Grid columns='one' divided>
            <Grid.Row>
              <Grid.Column>
                <Refresh/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <PostList data={this.state.data}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Poster/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </center>
      </div>

    );
  }
}

export default App;

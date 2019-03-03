import React, { Component } from "react";
import { Button} from "semantic-ui-react";
import axios from 'axios';

const BACKEND_SERVER = "http://0.0.0.0:4000";

class Refresh extends Component {
  async callRefresh(){
    axios.get(
      BACKEND_SERVER + '/refresh'
    ).then(res => {
      console.log(res.data)
    })
  }

  render() {
    return(
    <div class = 'refresh'>
      <Button onClick={this.callRefresh}><i class="refresh icon"/>Refresh</Button>

    </div>
    )

  }
}

export default Refresh;

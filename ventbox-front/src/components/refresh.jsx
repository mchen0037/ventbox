import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Refresh extends Component {
  render() {
    return(
      <div>
        <Button fluid onClick={this.props.refresh}>
          Refresh
          <i class="refresh icon"/>
        </Button>
      </div>
    )
  }
}

export default Refresh;

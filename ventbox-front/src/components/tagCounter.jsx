import React, { Component } from 'react';
import { Label } from 'semantic-ui-react'

// We want the DB to return the top ten tags
// SELECT tag, %age of the tag
// FROM tag_post
// GROUP BY tag
// ORDER BY DECREASING
// LIMIT 5
let top5Tags = {
  tags: [
    {key: 0, tag: "family", count: 37},
    {key: 1, tag: "high school", count: 23},
    {key: 2, tag: "apple", count: 19},
    {key: 3, tag: "HackMerced", count: 11},
    {key: 4, tag: "EmTea", count: 3}
  ]
}

class Tag extends Component {
  render() {
    return (
      <div>
        <Label>
          {this.props.text}
          <Label.Detail>{this.props.count}</Label.Detail>
        </Label>
      </div>
    );
  }
}


class TagCounter extends Component {
  constructor() {
    super()
    this.state = {
      tags : top5Tags.tags
    }
  }

  render() {
    console.log(this.state.tags)
    return (
      <div>
        {this.state.tags.map(tag =>
          <Tag key={tag.key} text={tag.tag} count={tag.count}>
          </Tag>
        )}
      </div>
    );
  }
}

export default TagCounter;

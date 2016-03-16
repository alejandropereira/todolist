import React, { Component } from "react"

export default class TodoItem extends Component {
  render() {
    let { item } = this.props;

    return (
      <li>{item.text}</li>
    )
  }
}



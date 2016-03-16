import React, { Component } from "react"

export default class NewTodo extends Component {
  constructor() {
    super()
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter(e) {
    const ENTER = 13;

    if(e.keyCode == ENTER) {
      console.log("Key press ENTER");
    }
  }

  render() {
    return (
      <div className="page-header">
        <input onKeyUp={this.onEnter} className="form-control" placeholder="New todo" type="text" />
      </div>
    )
  }
}

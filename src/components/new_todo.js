import React, { Component } from "react"
import * as todoActions from "../actions/todo_actions"

export default class NewTodo extends Component {
  constructor() {
    super()
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter(e) {
    const ENTER = 13;
    let inputVal = e.target.value;

    if(e.keyCode == ENTER) {
      todoActions.createTodo(inputVal);
      e.target.value = "";
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

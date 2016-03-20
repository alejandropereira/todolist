import React, { Component } from "react"
import * as todoActions from "../actions/todo_actions"

const listStyles = {
  marginBottom: "10px"
}

const btnStyles = {
  marginLeft: "10px"
}

export default class TodoItem extends Component {
  constructor() {
    super()
    this.state = {
      isEditing: false
    }
  }

  editTodo(e) {
    this.setState({
      isEditing: true
    });
  }

  updateTodo(id, e) {
    const ENTER = 13;
    let text = e.target.value;

    if(e.keyCode == ENTER) {
      todoActions.editTodo(id, text);
      this.setState({
        isEditing: false
      })
    }
  }

  render() {
    let { isEditing } = this.state;
    let { item } = this.props;
    let { text, id } = item;

    if (isEditing) {
      return (
        <li style={listStyles}>
          <input type="text" onKeyUp={this.updateTodo.bind(this, id)} defaultValue={text} />
        </li>
      )
    } else {
      return (
        <li>
          {text}
          <button style={btnStyles} onClick={this.editTodo.bind(this)} className="btn btn-primary btn-sm">Edit</button>
        </li>
      )
    }
  }
}

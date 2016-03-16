import React, { Component } from "react"
import TodoItem from "./todo_item"

export default class TodoList extends Component {
  render() {
    let { todos } = this.props;

    return (
      <ul>
        { todos.map(todo => <TodoItem key={todo.id} item={todo} />) }
      </ul>
    )
  }
}


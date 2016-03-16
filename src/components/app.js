import React, { Component } from "react"
import TodoStore from "../stores/todo"
import TodoList from "./todo_list"
import NewTodo from "./new_todo"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll()
      })
    });
  }

  render() {
    let { todos } = this.state;

    return (
      <div className="container">
        <NewTodo />
        <h1>Todolist</h1>
        <TodoList todos={todos} />
      </div>
    )
  }
}

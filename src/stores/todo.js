import EventEmitter from "events";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 1234354,
        text: "Go Shopping",
      },
      {
        id: 432343543,
        text: "Pay bills",
      }
    ];
  }

  getAll() {
    return this.todos;
  }

  createTodo(text){
    const id = Date.now();

    this.todos.push({
      id,
      text,
    });

    this.emit("change");
  }
}

const todoStore = new TodoStore;

window.todoStore = todoStore;

export default todoStore;